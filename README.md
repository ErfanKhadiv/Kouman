# Project Kouman

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-build-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-navigation-CA4245?logo=reactrouter&logoColor=white)
![Live demo](https://img.shields.io/badge/Demo-GitHub%20Pages-brightgreen)
![License](https://img.shields.io/badge/License-MIT-green)

Kouman is a front-end e-commerce web application for clothes and accessories, built with React, JavaScript, HTML and CSS. It is a multi-page single-page app: React Router handles client-side navigation between a home page, two product listing pages, a product details page, a login/signup page and a shopping cart, all sharing one header and footer. The project was developed with Vite and is deployed on GitHub Pages. Its UI and layout were inspired by [TOPIALAND.IR](https://topialand.ir), and it was built strictly for learning, practice and portfolio purposes. There is no backend; it is a front-end project only.

**[Live demo: erfankhadiv.github.io/Kouman](https://erfankhadiv.github.io/Kouman/)**

## Contents

- [Preview](#preview)
- [Features](#features)
- [Pages and routes](#pages-and-routes)
- [Tech stack](#tech-stack)
- [Concepts and skills practiced](#concepts-and-skills-practiced)
- [Project structure](#project-structure)
- [Setup and running](#setup-and-running)
- [Purpose of the project](#purpose-of-the-project)
- [Disclaimer](#disclaimer)
- [Author, credits and license](#author-credits-and-license)

## Preview

[![Preview 1](public/screenshots/preview1.png)](public/screenshots/preview1.png)
[![Preview 2](public/screenshots/preview2.png)](public/screenshots/preview2.png)
[![Preview 3](public/screenshots/preview3.png)](public/screenshots/preview3.png)

[![Preview 4](public/screenshots/preview4.png)](public/screenshots/preview4.png)
[![Preview 5](public/screenshots/preview5.png)](public/screenshots/preview5.png)

## Features

- Multi-page navigation with **React Router**, with no full page reloads
- Shared **Header** and **Footer** rendered on every page
- Product listing pages for **Clothes** and **Accessories**
- Dynamic **product details** page driven by a URL parameter (`/product/:productId`)
- **Login / Signup** page UI
- **Shopping cart** page
- Responsive layout

## Pages and routes

| Route | Page | Description |
| --- | --- | --- |
| `/` | [`MainPage.jsx`](src/Pages/MainPage.jsx) | Home page with a banner |
| `/Clothes` | [`Clothes.jsx`](src/Pages/Clothes.jsx) | Clothes product listing |
| `/Accessory` | [`Accessory.jsx`](src/Pages/Accessory.jsx) | Accessories product listing |
| `/product/:productId` | [`ProductInfo.jsx`](src/Pages/ProductInfo.jsx) | Details of a single product, looked up from the URL parameter |
| `/loginsignup` | [`LoginSignup.jsx`](src/Pages/LoginSignup.jsx) | Login and signup form UI |
| `/cart` | [`Cart.jsx`](src/Pages/Cart.jsx) | Shopping cart |

## Tech stack

| Layer | Technology |
| --- | --- |
| UI library | React 19 |
| Language | JavaScript (ES modules) |
| Markup and styling | HTML5, CSS3 |
| Routing | React Router |
| Build tool and dev server | Vite |
| Linting | ESLint |
| Hosting | GitHub Pages |

## Concepts and skills practiced

- **Component-based architecture:** reusable components for banners, breadcrumbs, header, footer, item cards, product display and the product page
- **Client-side routing:** route definitions, shared layout, dynamic route parameters
- **Front-end UI work:** recreating a real-world e-commerce layout, responsive CSS, page-level stylesheets
- **Tooling:** Vite project setup, ESLint configuration, static deployment to GitHub Pages

## Project structure

```
Kouman/
├── docs/
├── public/
│   ├── screenshots/        # preview images used in this README
│   └── ...                 # fonts, icons and other static assets
├── src/
│   ├── Components/
│   │   ├── Banners/
│   │   ├── Breadcrumbs/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Items/
│   │   ├── ProductDisplay/
│   │   └── ProductPage/
│   ├── Pages/
│   │   ├── CSS/            # page stylesheets
│   │   ├── MainPage.jsx
│   │   ├── Clothes.jsx
│   │   ├── Accessory.jsx
│   │   ├── ProductInfo.jsx
│   │   ├── LoginSignup.jsx
│   │   └── Cart.jsx
│   ├── App.jsx             # routes
│   ├── html.css
│   └── main.jsx            # entry point
├── eslint.config.js
├── package.json
├── vite.config.js
├── LICENSE
└── README.md
```

## Setup and running

Requires [Node.js](https://nodejs.org/) (a current LTS release is recommended) and npm.

```
git clone https://github.com/ErfanKhadiv/Kouman.git
cd Kouman
npm install
npm run dev
```

Vite prints a local address (by default `http://localhost:5173`). Open it in your browser.

Other commands, if your `package.json` defines the standard Vite scripts:

```
npm run build      # production build
npm run preview    # serve the production build locally
npm run lint       # run ESLint
```

## Purpose of the project

- Practice building a real-world React application end to end
- Learn React Router and component-based architecture
- Improve front-end UI and UX skills
- Create a portfolio-ready project

## Disclaimer

This project is **not affiliated with or endorsed by TOPIALAND.IR**. The site's design was used only as inspiration, for educational purposes. No backend services, proprietary data or private APIs were used.

## Author, credits and license

Created by **Erfan Khadiv** ([@ErfanKhadiv](https://github.com/ErfanKhadiv)).

Design inspiration: TOPIALAND.IR. Built with [React](https://react.dev/), [React Router](https://reactrouter.com/) and [Vite](https://vite.dev/).

Released under the MIT license; see [LICENSE](LICENSE).
