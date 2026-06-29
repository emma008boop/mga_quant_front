
# MGA Quant - Frontend Client

[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)
[![Framework](https://img.shields.io/badge/Framework-React_18-blue.svg)](https://react.dev/)
[![Package Manager](https://img.shields.io/badge/Package_Manager-pnpm-yellow.svg)](https://pnpm.io/)

A modern, highly responsive frontend application crafted for quantitative data visualization and rapid US DOT business account querying.

Designed with a premium, high-contrast **Purple and White theme** utilizing native CSS variables for maximum performance and scannability.

---

## Key Features

* **Vite-Powered Pipeline:** Lightning-fast Hot Module Replacement (HMR) and ultra-optimized asset bundling.
* **Minimalist Unified Search:** Clean navbar utility containing an inline search form designed specifically for single-parameter DOT lookups.
* **Institutional Data Dashboard:** Dynamic account layouts with interactive, real-time client-side table filtering.
* **Modular Architecture:** Structured with a dedicated layout engine, components layer, and decoupled screen views.

---

## Project Directory Structure

```text
mga_quant_front/
├── src/
│   ├── assets/         # Shared media and static files
│   ├── components/     # Reusable UI molecules (Navbar, buttons, etc.)
│   ├── layout/         # Layout wrappers wrapping dynamic screens
│   ├── screens/        # Full page views (Home, Accounts dashboard)
│   ├── services/       # Client-side endpoints and data fetches
│   ├── theme/          # Global styles and central color variables
│   ├── App.jsx         # Root app wrapper
│   └── main.jsx        # App mounting and entry point
├── index.html          # HTML template
├── vite.config.js      # Vite compilation configurations
└── package.json        # Manifest file
```
