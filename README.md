# Andy's personal website

A minimal, single-page website with an introduction, past work, open-source interpretability tooling, and email/GitHub links. The design keeps Plain's narrow text layout with an upright serif greeting and a quiet contact footer.

## Content

`personalwebsite.MD` contains the supplied material. Its wording is preserved in `app/page.tsx`; edits to the Markdown file are not automatically reflected on the page.

- `app/page.tsx` — page content and semantic HTML
- `app/globals.css` — typography, spacing, and responsive styles
- `app/layout.tsx` — document metadata
- `public/favicon.svg` — site icon

The page is server-rendered with React and Vinext. There are no design selectors, client-side state, UI component libraries, external fonts, or analytics.

## Development

Requires Node 22.13 or newer.

```sh
npm install
npm run dev
```

## Validation

```sh
npm run build
npx tsc --noEmit
```

Sites configuration lives in `.openai/hosting.json`. The hosted site remains private, and its metadata requests that search engines do not index it.
