# Advibe React

Marketing site for Advibe, built with React and Vite. Supports four languages (English, Polish, Czech, Russian) and includes a careers section with job listings and Telegram apply flow.

## Install dependencies

```bash
npm install
```

`node_modules` is listed in `.gitignore` and should not be included in project archives. After extracting or cloning the repo, run `npm install` to restore dependencies.

### Node.js version

This project requires **Node.js 20 or newer** (`engines.node` in `package.json`).

React Router is pinned to v7 for compatibility with Node 20+. React Router v8 requires Node >=22.22.0 — upgrade Node before moving to v8 if needed.

## Development

```bash
npm run dev
```

The dev server starts at `http://localhost:5173`. Visiting `/` redirects to the saved language (see below) or English (`/en/`).

## Build

```bash
npm run build
```

Production output is written to `dist/`. Preview the production build locally:

```bash
npm run preview
```

## Localization

Translation files live in:

```
src/i18n/locales/
  en.json   # source language (English)
  pl.json
  cs.json
  ru.json
```

All locale files share the same key structure. English is the main language — add or update keys in `en.json` first, then mirror them in the other files.

i18n is configured in `src/i18n/index.js`.

### Language persistence

The selected language is stored in `localStorage` under the key `advibe-lang`. When a user visits `/`, they are redirected to their saved language if it is valid; otherwise English is used.

## Jobs

Job listings are split between a data file and locale strings:

- **`src/data/jobs.json`** — job IDs and unit tags (`IT`, `Affiliate`)
- **`src/i18n/locales/*.json`** — job titles, previews, and meta text under `jobs.items.*`

To add a vacancy, add an entry to `jobs.json` and add matching keys in all four locale files.

## Configuration

### Placeholders to replace

All contact details are centralized in:

```
src/config/site.js
```

| Constant | Purpose | Current value |
| --- | --- | --- |
| `CONTACT_EMAIL` | HR e-mail in the footer | `hr@example.com` |
| `TELEGRAM_USERNAME` | HR Telegram account for the apply modal | `YOUR_TELEGRAM_USERNAME` |
| `SOCIAL_LINKS` | LinkedIn / Instagram / Telegram links in the header and footer | `https://example.com/...` |

The apply modal builds a pre-filled `t.me` link with the localized message template from `applyModal.telegramMessage` in the locale files.

The company registration line in the footer (`footer.legal` in `src/i18n/locales/*.json`) also contains placeholder numbers.

### Public base path

By default the site is served from the domain root (`/`). To serve it from a subfolder (for example GitHub Pages at `/Advibe/`), set `VITE_BASE` before building:

```bash
# PowerShell
$env:VITE_BASE = "/Advibe/"; npm run build
```

or copy `.env.example` to `.env` and edit it. For Apache, `RewriteBase` in `public/.htaccess` must match the same path.

## Project structure

```
src/
  components/     # UI components (Header, Hero, Footer, etc.)
  config/         # Site-wide config (contact e-mail, social links, Telegram username)
  context/        # React context (apply modal state)
  data/           # jobs.json
  i18n/           # i18next setup and locale JSON files
  layouts/        # Route layouts
  pages/          # Home and Careers pages
  styles/         # Global CSS
  utils/          # Routing and language storage helpers
```

## Deployment

This app uses `BrowserRouter` from React Router. The server must serve `index.html` for all routes so client-side routing works on direct visits and refresh (e.g. `/pl/careers`).

Examples:

- **Netlify / Vercel** — add a SPA fallback rewrite to `/index.html`
- **Nginx** — `try_files $uri $uri/ /index.html;`
- **Apache** — `FallbackResource /index.html`

Without this fallback, deep links and page refreshes on non-root paths will return 404.

### SEO tags

`SeoMeta` sets `<title>`, meta description, canonical URL, and `hreflang` alternates for each language route. Tags update when the route or language changes.

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Production build         |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |
