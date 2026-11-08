# Paradise Nursery — e-plantShopping

A responsive houseplant shopping application built with **React, Redux Toolkit, React Router and Vite**. Browse curated indoor plants, add favourites to your cart, adjust quantities and review your order total.

## Features

- Welcoming landing page with company story and a prominent Get Started action.
- Plant catalogue with 18 houseplants across three categories: Easy-care favourites, Statement plants and Air-purifying greens.
- Product cards with images, descriptions, prices and add-to-cart controls.
- Redux Toolkit cart state with `addItem`, `removeItem` and `updateQuantity` reducers.
- Dynamic cart badge, line totals, order subtotal and quantity controls.
- Continue shopping navigation and a Checkout — Coming Soon message.
- Responsive layout for desktop, tablet and mobile.
- GitHub Pages deployment configuration.

## Tech stack

- React 18 + Vite
- Redux Toolkit + React Redux
- React Router (HashRouter for GitHub Pages compatibility)
- Lucide React icons
- CSS

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a **public** GitHub repository named `e-plantShopping`.
2. Update the `homepage` field in `package.json` with your GitHub username:
   `https://YOUR_GITHUB_USERNAME.github.io/e-plantShopping/`
3. Keep `base: '/e-plantShopping/'` in `vite.config.js`.
4. Push the project to the repository.
5. Run:

```bash
npm install
npm run deploy
```

6. In GitHub, open **Settings → Pages** and select the `gh-pages` branch, `/ (root)` folder if it is not selected automatically.
7. Your app will be available at `https://YOUR_GITHUB_USERNAME.github.io/e-plantShopping/`.

## Coursera submission file links

After pushing to the public repository, replace `YOUR_GITHUB_USERNAME` with your GitHub username:

- `README.md`: `https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping/blob/main/README.md`
- `AboutUs.jsx`: `https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping/blob/main/src/components/AboutUs.jsx`
- `App.css`: `https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping/blob/main/src/App.css`
- `App.jsx`: `https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping/blob/main/src/App.jsx`
- `CartSlice.jsx`: `https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping/blob/main/src/redux/CartSlice.jsx`
- `ProductList.jsx`: `https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping/blob/main/src/components/ProductList.jsx`
- `CartItem.jsx`: `https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping/blob/main/src/components/CartItem.jsx`

## Project structure

```text
e-plantShopping/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── data/plants.js
    ├── redux/
    │   ├── CartSlice.jsx
    │   └── store.js
    └── components/
        ├── AboutUs.jsx
        ├── Navbar.jsx
        ├── ProductList.jsx
        └── CartItem.jsx
```

## Notes

Product photos are loaded from Unsplash and therefore require an internet connection. Prices are illustrative demo prices in Indian rupees (INR). Checkout is intentionally a demo action and does not process payments.
