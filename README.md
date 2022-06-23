## Project Share+ (More Than Just showcasing to the world)

> Building this to learn about Spring Boot and to get a bit taste of NextJs.

This is a Next.js and Spring Boot project

+ ### Learnings:
 + Automatic dependency injection using `@Autowired`
 + Different attributes present on Spring Boot
 + SET cookie using Spring Boot REST API call
 + Handle CORS configuration in Spring Boot
 + Database interaction using Spring Data JPA, MySQL driver
 + Security configuration in Spring Boot
 + Creation of JWT token taking user as subject, check validity etc.



## ✨ Phases ✨
```
Phase - 1: Initials & Build route for User
```
+ created an endpoint for user login
    + set JWT token in cookie using REST API call to Spring Boot backend
    + maintain state in frontend using `@reduxjs/toolkit`
+ Build UI component for Home page and login
+ Added user Register component
+ Added User Profile section

```
Phase - 2: Upload/Create Post (Projects)
```
+ added Create Post Component
+ added Feeds Component

## Getting Started

First, run the development server:

```bash
npm run dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
