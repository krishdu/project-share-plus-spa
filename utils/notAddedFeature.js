/**
 * @description show notification info for not implemented features
 */
import { alertService } from "./Alert/alert.service";
export const notImplementedNotify = () => {
  alertService.info(
    "This Feature is Not Available, We will notify once available :)",
    {
      autoClose: true,
      keepAfterRouteChange: false,
    }
  );
};
