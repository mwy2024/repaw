# REPAW

A responsive product presentation and customization demo built with Next.js 16,
React 19, and Tailwind CSS 4.

Live website: https://sparkly-nasturtium-94711c.netlify.app/

## Run Locally

```bash
npm ci
npm run dev
```

Open http://localhost:3000/.

## Build

```bash
npm run build
npm start
```

For a multi-file static export:

```bash
REPAW_STATIC_EXPORT=1 npm run build
```

The generated `out/` directory is excluded from Git. See `STATIC-PUBLISH.md`
for hosting requirements.

## Standalone HTML

`REPAW-offline.html` is the latest self-contained snapshot. Open it directly
in a browser without a server or internet connection. Images, fonts, compressed
videos, styles, and demo interactions are embedded in the file.

To publish this snapshot with Netlify Drop, put a copy named `index.html` in
an otherwise empty folder and upload that folder to the existing site's
Deploys page. This updates the current website without changing its address.

The snapshot is a separate export; editing the Next.js source does not
automatically regenerate it.

## Demo Scope

Product details, customization previews, media playback, and modal dialogs
are interactive demos. Checkout, payment, and community QR flows are not
connected to real services.
