# Submodule Remote for Vite Module Federation

This repository is a standalone **remote micro-frontend** intended to be added to a host repo as a **git submodule**. It demonstrates how a host can load a locally running remote without needing a monorepo that contains every micro-frontend.

The code mirrors the Module Federation setup used in the host repo (React + React Router + the Module Federation bridge), but lives in its own repository as a means of demonstrating how teams can work in isolation.

Reference host repo: https://github.com/charlesduso/module-federation-with-vite-and-react-router

## What this repository shows

- Exposing a remote entry with `@module-federation/vite`.
- Sharing routing context with the Module Federation React bridge.
- Running the remote independently while still being consumable by a host.

## Test the submodule remote demo with `npm run dev`

From the repository root:

```bash
npm install
npm run dev
```

Then open: `http://localhost:2002/submodule-remote` to see the remote application running

## Other commands

- `npm run build` – build the production bundle.
- `npm run preview` – build then start the preview server.
