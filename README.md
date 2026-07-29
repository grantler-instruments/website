# Grantler Instruments

The website for Grantler Instruments—an independent instrument-building practice
by Thomas Geissl. It presents instruments, custom tools, performance systems,
events, and contact information.

Built with React, TypeScript, Vite, and Material UI.

## Development

Install the locked dependencies, then start the development server:

```sh
npm ci
npm run dev
```

Vite prints the local URL after the server starts.

## Available scripts

```sh
npm run dev      # Start the development server
npm run build    # Type-check and create a production build in dist/
npm run lint     # Run ESLint
npm run preview  # Serve the production build locally
```

## Project structure

- `src/components/` contains pages, navigation, and instrument/event views.
- `src/components/things/` contains the individual instrument pages.
- `src/assets/` contains images and other static project media.
- `src/dsp/` and `src/stores/` contain the browser audio engine and application state.

The site uses hash-based routing, so individual routes work on static hosting
without server-side route rewrites.
