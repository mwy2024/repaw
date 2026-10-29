# Static Website Handoff

Build: `REPAW_STATIC_EXPORT=1 npm run build`

Publish the entire contents of `out/` at the hosting domain root. The entry
file is `index.html`. No Node.js server, database, or Next.js image service
is required to run this export.

Keep `_next/`, all images, videos, and route directories alongside
`index.html`. CSS alone is not sufficient: JavaScript is needed for the
customization preview, dialogs, media switching, and keyboard navigation.

Compiled, browser-ready CSS files are in `_next/static/`. The source CSS
files in `app/` require Tailwind processing and should not be published
alone as a replacement for the compiled styles.

Asset paths are root-relative. Hosting under a subdirectory requires a
new build with the appropriate Next.js basePath configuration.
Google Fonts requires network access; system fonts are the fallback.
Orders, payments, and the community QR code remain demonstration features.
