import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import { alertService, AlertType } from "./alert.service";

Alert.propTypes = {
  id: PropTypes.string,
  fade: PropTypes.bool,
};

Alert.defaultProps = {
  id: "default-alert",
  fade: true,
};

function Alert({ id, fade }) {
  const mounted = useRef(false);
  const router = useRouter();
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    mounted.current = true;

    // subscribe to new alert notifications
    const subscription = alertService.onAlert(id).subscribe((alert) => {
      // clear alerts when an empty alert is received
      if (!alert.message) {
        setAlerts((alerts) => {
          // filter out alerts without 'keepAfterRouteChange' flag
          const filteredAlerts = alerts.filter((x) => x.keepAfterRouteChange);

          // remove 'keepAfterRouteChange' flag on the rest
          return omit(filteredAlerts, "keepAfterRouteChange");
        });
      } else {
        // add alert to array with unique id
        alert.itemId = Math.random();
        setAlerts((alerts) => [...alerts, alert]);

        // auto close alert if required
        if (alert.autoClose) {
          setTimeout(() => removeAlert(alert), 3000);
        }
      }
    });

    // clear alerts on location change
    const clearAlerts = () => alertService.clear(id);
    router.events.on("routeChangeStart", clearAlerts);

    // clean up function that runs when the component unmounts
    return () => {
      mounted.current = false;

      // unsubscribe to avoid memory leaks
      subscription.unsubscribe();
      router.events.off("routeChangeStart", clearAlerts);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function omit(arr, key) {
    return arr.map((obj) => {
      const { [key]: omitted, ...rest } = obj;
      return rest;
    });
  }

  function removeAlert(alert) {
    if (!mounted.current) return;

    if (fade) {
      // fade out alert
      setAlerts((alerts) =>
        alerts.map((x) =>
          x.itemId === alert.itemId ? { ...x, fade: true } : x
        )
      );

      // remove alert after faded out
      setTimeout(() => {
        setAlerts((alerts) => alerts.filter((x) => x.itemId !== alert.itemId));
      }, 250);
    } else {
      // remove alert
      setAlerts((alerts) => alerts.filter((x) => x.itemId !== alert.itemId));
    }
  }

  function cssClasses_div(alert) {
    if (!alert) return;

    const Divclasses = ["px-4", "py-3", "rounded-lg"];
    const Pclasses = ["font-bold"];

    const div_alertTypeClass = {
      [AlertType.Success]: "alert-bg-Success",
      [AlertType.Error]: "alert-bg-Error",
      [AlertType.Info]: "alert-bg-Info",
      [AlertType.Warning]: "alert-bg-Warning",
    };

    const p_alertTypeClass = {
      [AlertType.Success]: "alert-text-Success",
      [AlertType.Error]: "alert-text-Error",
      [AlertType.Info]: "alert-text-Info",
      [AlertType.Warning]: "alert-text-Warning",
    };

    Divclasses.push(div_alertTypeClass[alert.type]);
    Pclasses.push(p_alertTypeClass[alert.type]);

    if (alert.fade) {
      Divclasses.push("fade");
    }

    return { forDiv: Divclasses.join(" "), forP: Pclasses.join(" ") };
  }

  if (!alerts.length) return null;

  return (
    <div className="myAlert-bottom">
      {alerts.map((alert, index) => (
        <div key={index} className={cssClasses_div(alert).forDiv} role="alert">
          <a className="alert_close_btn" onClick={() => removeAlert(alert)}>
            &times;
          </a>
          <span className={cssClasses_div(alert).forP}> {alert.message}</span>
        </div>
      ))}
    </div>
  );
}

export default Alert;
