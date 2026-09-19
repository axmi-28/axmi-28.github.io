# Personal website — design studies

Four minimal directions built around the same placeholder content:

- **Plain** — a narrow, text-first homepage, closest to the supplied reference.
- **Margin** — serif typography, side labels, and a red asterisk.
- **Index** — numbered rows, monospace metadata, and a blue accent.
- **Letter** — a personal note with an italic sign-off.

Switch using the top tabs. Each direction also has a URL: `/?design=plain`, `/?design=margin`, `/?design=index`, or `/?design=letter`. Project and note titles expand to show sample content. All names, dates, descriptions, locations, and the example email address are placeholders.

## Development

Requires Node 22.13 or newer.

```sh
npm install
npm run dev
```

```sh
npm run build
npx tsc --noEmit
```

The site uses React and Vinext. The four page compositions and shared sample content live in `app/page.tsx`; their styles live in `app/globals.css`. The top comparison toolbar and design captions are for this design review and can be removed once a direction is chosen.

Sites deployment configuration is in `.openai/hosting.json`. The design study is private, and metadata requests that search engines do not index it. There are no analytics, remote fonts, or external image dependencies.

Reference: https://www.johnnylin.co/
