# Personal Website

A modern, responsive personal website built with React and Vite.

## Features

- 🎨 Beautiful, modern UI with smooth animations
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling navigation
- 📧 Contact form
- 🎭 Interactive project showcase

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the personal directory:
```bash
cd personal
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
personal/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Update Personal Information

1. **About Section**: Edit `src/components/About.jsx` to update your name, title, description, and skills.

2. **Experience**: Update the entries in `src/components/Experience.jsx` to reflect your professional journey.

3. **Projects**: Modify the `projects` array in `src/components/Projects.jsx` to showcase your own projects.

4. **Leadership**: Customize community and outreach highlights in `src/components/Leadership.jsx`.

5. **Contact Information**: Update contact details in `src/components/Contact.jsx`.

6. **Footer**: Edit `src/components/Footer.jsx` to update social media links and copyright information.

### Styling

The project uses CSS custom properties (variables) defined in `src/index.css`. You can customize colors, spacing, and other design tokens by modifying these variables.

## Deployment

### GitHub Pages

Since this is configured with `base: '/personal/'` in `vite.config.js`, you can deploy to GitHub Pages:

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains the built files that can be deployed.

3. If using GitHub Actions or similar, configure it to deploy the `dist` folder to the `/personal` path on your GitHub Pages site.

#### SPA Routing Note (clean URLs)

This project uses React Router with browser history (clean URLs like `/personal/now`). GitHub Pages does not natively rewrite deep links to your app entry point, so direct visits to nested routes can 404 unless a fallback file is present.

The `build` script handles this by copying `dist/index.html` to `dist/404.html`:

```bash
npm run build
```

This allows GitHub Pages to serve the SPA for unknown paths under `/personal`, so direct route access keeps working without hash-based URLs.

## Technologies Used

- React 18
- Vite
- CSS3 (with custom properties)
- Modern JavaScript (ES6+)

## License

This project is open source and available for personal use.

