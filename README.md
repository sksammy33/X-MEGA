# X-MEGA Website

Marketing website for **XMEGA** — Ideas. Design. Technology.
Built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and lucide-react.

## Pages

Home · About · Services · Projects · Freelancing · Internships · Student Projects · For Local Business · Careers · Contact

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where things live

| Path | What |
|---|---|
| `app/` | One folder per page |
| `components/` | Shared sections and UI (buttons, forms, hero, FAQ…) |
| `lib/content.ts`, `lib/pages.ts` | Page copy and data |
| `lib/site.ts` | Contact details, navigation and form endpoint |
| `app/globals.css` | Colour tokens and theme utilities |

## Before launch

- Replace placeholder contact details in `lib/site.ts`.
- Set `NEXT_PUBLIC_FORM_ENDPOINT` (e.g. Formspree) so forms submit directly; otherwise they open a pre-filled email.
- Confirm stats, project examples and program details marked as placeholders.
