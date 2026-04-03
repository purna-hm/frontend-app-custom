# MyUni University Portal — Deployment Guide

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **CMS**: Sanity v5 (Admissions pages)
- **Styling**: Tailwind CSS v4
- **Hosting**: Vercel
- **Language**: TypeScript

---

## 1. Sanity CMS Setup

### a. Create a Sanity project
1. Go to [sanity.io](https://sanity.io) → Sign in
2. Click **New Project** → Name it `MyUni CMS`
3. Note your **Project ID** and set Dataset to `production`

### b. Configure CORS
In Sanity → Project → API → CORS Origins, add:
- `http://localhost:3000`
- `https://your-domain.vercel.app`
- `https://www.myuni.edu.in`

### c. Create API Token
Sanity → Project → API → Tokens → Add API token (Editor or Viewer role)

---

## 2. Environment Variables

Copy `.env.local.example` to `.env.local` and fill in values:

```bash
cp .env.local.example .env.local
```

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=skXXXXXXXXXXX

# Optional: chatbot embed
NEXT_PUBLIC_CHATBOT_IFRAME_URL=https://your-chatbot-url.com/widget

# Optional: virtual tour embed
NEXT_PUBLIC_VIRTUAL_TOUR_URL=https://your-360-tour.com/embed
```

---

## 3. Local Development

```bash
nvm use 22       # Node.js 20+
npm install
npm run dev      # Starts at http://localhost:3000
```

**Sanity Studio**: `http://localhost:3000/studio`

---

## 4. Deploy to Vercel

### Option A: Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Option B: GitHub Integration
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select your repo
4. Add Environment Variables in Vercel Dashboard:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`
   - (any chatbot/tour URLs)
5. Click Deploy

---

## 5. Chatbot Integration

The `ChatbotWidget` component supports two modes:

### Mode A: iframe embed (Tidio, Crisp, Freshdesk, custom)
```env
NEXT_PUBLIC_CHATBOT_IFRAME_URL=https://chatbot.yourdomain.com/widget
```

### Mode B: Script-based (Drift, Intercom, Tidio script)
```env
NEXT_PUBLIC_CHATBOT_SCRIPT_URL=https://code.tidio.co/XXXXXXXX.js
```

For script-based bots, the script handles its own UI — remove the ChatbotWidget button from `layout.tsx` if needed.

---

## 6. Content Management

After deploying, visit `/studio` to manage:
- **Admission Procedure** — Edit steps, important dates, hero content
- **Online Application** — Application portal link, FAQ, contact details
- **Information Brochure** — Upload and manage brochures
- **Admission Fee** — Fee categories and payment modes
- **Admission Offices** — Office locations, contacts
- **Notices** — Exam and admission notices (shown in ticker + notice board)

---

## 7. Security Notes

- `/studio` is excluded from robots.txt via `vercel.json` headers
- Protect with Vercel's Password Protection or Sanity's user roles
- Never commit `.env.local` — it is gitignored
- Rotate `SANITY_API_TOKEN` periodically

---

## 8. Page Structure

```
/                        → Home (static)
/about                   → About MyUni
/about/*                 → About sub-pages (static)
/admissions              → Admissions hub
/admissions/procedure    → Sanity CMS
/admissions/apply        → Sanity CMS (form + FAQ)
/admissions/brochure     → Sanity CMS
/admissions/fee          → Sanity CMS
/admissions/offices      → Sanity CMS
/academics               → Academics hub
/academics/*             → Academic sub-pages (static)
/institutes/[slug]       → Dynamic institute pages (static)
/phd/*                   → PhD pages (static)
/research/*              → Research pages (static)
/sage-life/*             → Campus life (static)
/rankings/*              → Rankings (static)
/tp                      → Training & Placement (static)
/contact                 → Contact form (static)
/login                   → Login portal selection (static)
/virtual-tour            → Virtual tour embed (static)
/career                  → Career openings (static)
/studio                  → Sanity Studio (CMS editor)
```
