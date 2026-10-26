# Ness Glass (French) landing page: PROGRESS

Source: Figma file `i7ShFs4Hfhi9k3OWvS7w8z` ("Mecatronics", last modified 2026-10-07), page **final** → section **"Ness glass french"** (`31:8001`), root frame `31:4467` "hero" (1440 × 11240).
Stack: Next.js 16.4.3 (App Router, `src/`, Cache Components on), React 19.3, TypeScript strict, Tailwind CSS v4 (`@theme` tokens in `src/app/globals.css`), ESLint 9. Scaffolded with `create-next-app` on 2026-10-26. Work branch: `feat/landing`.
Project path: `C:\xampp\htdocs\faker\nessglass`. Sibling project built from the same Figma file: `C:\xampp\htdocs\faker\oxxoglass`. Dev server: `npx next dev --port 3108`.

---

## Design data source (read before fetching anything from Figma)

The Figma REST API is **not usable for layer data**: every token tried is on a View/Collab seat (`x-figma-rate-limit-type: low`), Tier-1 endpoints (`/files/:key/nodes`, `/images/:key`) return 429 until **Fri 2026-10-30 ~15:25 CET**, then allow only a handful of calls per month. `/files/:key/images` (image-fill URLs by hash, Tier 2) does work.

Instead, all node data comes from a **local copy of the file**: `C:\Users\triosweb\Downloads\Mecatronics - Partial file saved 26-10-2026.fig` (a zip; `canvas.fig` is Figma's kiwi binary). It is decoded with scripts kept outside the repo in `%TEMP%\nesstool` (deps `kiwi-schema@0.5.0`, `fzstd@0.1.1`):

| Script | Does |
|---|---|
| `decode.js <canvas.fig> <out.json>` | Decodes the kiwi message → `%TEMP%\nessfig\fig_msg.json` (+ `.blobs.json`, `.schema.txt`) |
| `tree.js <json> <guid>` | Prints a subtree (type, name, size, position, text) |
| `spec.js <json> <guid>…` | One line per node: fills, gradients, strokes, effects, radius, auto-layout, fonts, text runs, instance overrides |
| `images.js` / `imgtf.js` | Lists image fills per node with their crop transforms |
| `svg.js <json> <outDir> name=guid…` | Renders a node to SVG from fill/stroke geometry blobs or the raw vector network (append `!` to include hidden strokes) |
| `svg2tsx.js <svgDir> <outDir>` | Turns those SVGs into typed React icon components |
| `export-images.js` | Crops each image like Figma (CROP transform or cover), resizes to 2× node size, writes WebP |

The full style spec of the page and its components is cached in `%TEMP%\nessfig\spec_all.txt` (frames `31:4467`, `31:1742`, `31:1775`, `31:1924`, `31:2048`, `31:2236`, `31:2272`, `1:1137`). **Fetch frame details from there before building each section.** If `%TEMP%` was cleaned, unzip the `.fig` again and rerun `decode.js`.

The `.fig` is a *partial* save: 20 image fills were missing and were downloaded by hash through `/files/:key/images` into `%TEMP%\nessfig\dl`.

---

## Phase status

- [x] Phase 0: Inventory (approved 2026-10-26: build **only** the landing page from `31:8001`, see A1)
- [x] Phase 1: Design system (2026-10-26, `npm run lint` + `npm run build` clean)
  - [x] Scaffold (`create-next-app`, branch `feat/landing`)
  - [x] Node data decoded from the `.fig` local copy (see above)
  - [x] Tokens in `@theme` (`src/app/globals.css`), default Tailwind palette removed (`--color-*: initial`)
  - [x] Fonts via `next/font` in `src/app/layout.tsx`
  - [x] 25 images in `public/images` (WebP, 1.2 MB total), 16 icons in `src/components/icons`
- [x] Phase 2: Shared components + layout (2026-10-26, lint + build clean; header, menu and footer checked in the browser at 1440, 375 and 320 px with no horizontal overflow)
  - Cards (`OfferCard`, `StepCard`, `EngagementCard`, `ServiceThumb`, `ReviewCard`, `CareerCard`, `NewsCard`) are built in Phase 3 with their section, since each is used by one section only.
- [x] Phase 3: Pages (2026-10-26): all 12 sections of `/` built in order, `npm run lint` + `npm run build` clean after each step. Each section was compared side by side with the Figma render at 1440 px; section heights are within ~1–4 % of Figma (`%TEMP%\nessfig\overview.png` is the reference). Checked for horizontal overflow and layout at 320, 375, 768, 1024 and 1440 px.
- [x] Final check: `npm run build` + `npm run lint` clean (2026-10-26)

### Possible next steps (not done)
- Commit the work on `feat/landing` (nothing is committed yet).
- Real data: social URLs, reviews, news articles, CGU link, real centre list (A3, A8, A18).
- The Clash Display licence must be obtained by Ness Glass (A11).
- Prototype motion for the offer cards' sparkles (A12) once the Figma prototype can be inspected.

---

## Design system (Phase 1)

**Fonts** (from the text nodes)
- Display: **Clash Display** Bold 700 (headings, watermarks, line-height 0.9) and Medium 500 (marquee, "Offer valid…"). Self-hosted from `src/fonts/*.woff2` via `next/font/local` → `font-display`. Downloaded from Fontshare (ITF Free Font License, copy in `src/fonts/ClashDisplay-LICENSE.txt`).
- Text: **Inter** (Light 300, Regular 400, Medium 500, Semi Bold 600, Bold 700, Extra Bold 800; line-height 1.2) via `next/font/google` → `font-sans` (default).
- Legal: **Roboto** Medium 500 14px (consent text) → `font-legal`.

**Colours** (`bg-*`, `text-*`, …)

| Token | Hex | Used for |
|---|---|---|
| `brand` | `#cc05fd` | Buttons, links, asterisks, select pill, checkbox border |
| `brand-cyan` | `#0bd2f8` | Glow ellipses, icon gradient end, offer prices |
| `glow-magenta` | `#cd00d7` | Glow ellipses |
| `gradient-from` → `gradient-to` | `#b200c0` → `#08effb` | Watermark text gradient |
| `cyan-bright` | `#00dfeb` | "40 €" in the referral heading |
| `ink` / `ink-strong` | `#333333` / `#232323` | Headings / card titles |
| `muted` / `muted-dark` | `#696d76` / `#a9a9a9` | Body text on light / on dark |
| `fineprint` | `#646464` | Consent text |
| `snow` / `mist` | `#fcfcfc` / `#f6f6f6` | Text on dark / review cards |
| `line` / `silver` | `#5b5b5b` / `#cecece` | Footer divider / avatar ring |
| `night` / `night-card` | `#0c0c0c` / `#141414` | Dark sections / referral card |
| `plum` / `plum-deep` | `#270031` / `#28002a` | Offer card / footer |
| `star` / `star-off` | `#fcbd03` / `#d9d9d9` | Ratings |

**Type scale** (`text-*`): `caption` 12, `legal` 14, `body` 16, `title` 18, `lead` 24, `marquee` 23.32 (all 1.2 except marquee 0.9); `h2` 68 and `h2-xl` 84 (fluid `clamp()`, line-height 0.9); watermarks `watermark-offer` 418, `watermark-know` 150, `watermark-rewards` 238, `watermark-footer` 233 (scale with `vw`, capped at the Figma size).
**Layout:** `max-w-site` = 1280 (frame 1440 with 80 px gutters → `lg:px-20`). Spacing uses Tailwind's default 4 px scale (Figma gaps are 8/16/20/24/28/32/40/80…).
**Radii:** `rounded-field` 8, `rounded-card` 16, `rounded-offer` 21, `rounded-panel` 32, pills `rounded-full` (Figma 51/78).
**Blurs** (Figma radius ÷ 2): `marquee` 13, `button` 34, `offer` 50, `panel` 88, `glass` 105, `coin-sm` 5, `coin` 9, `glow-sm` 111, `glow-md` 302, `glow-lg` 517 → `blur-*` / `backdrop-blur-*`.
**Shadows:** none in the design (every Figma effect is a layer or background blur).
**Motion:** `animate-marquee` (ticker).

**Images** (`public/images/*.webp`, 2× node size, never upscaled)

| File | Node | Section |
|---|---|---|
| `hero-technicians` | `31:4470` | Hero |
| `logo-nessglass` | `31:4487` | Header, footer |
| `offer-banknotes`, `offer-tyres` | `31:1934`, `31:2058` | Offer cards (behind the card, see A12) |
| `map-france` | `31:4511` | Emplacements |
| `avatar-centre-1..3` | `31:4528–30` | Emplacements avatar stack |
| `step-online-form`, `step-support`, `step-fast` | `31:4541`, `31:4549`, `31:4557` | Comment ça marche |
| `garage-background` | `31:4569` | Le saviez-vous (10 % opacity) |
| `question-mark` | `31:4609` | Le saviez-vous (rotated 23°) |
| `car-top-view` | `I31:4726;…` (`31:2237`) | Services |
| `service-panoramic-roof`, `-rear-window`, `-impact-repair`, `-adas-camera`, `-windshield` | `31:2239…2259` | Services |
| `contact-mechanic` | `31:4730` | Contact form |
| `reviewer-avatar` | `31:2297` | Reviews |
| `euro-coin` | `31:4791`, `31:4804–06` | Referral |
| `career-expertise`, `career-growth` | `31:4815`, `31:4827` | Careers |
| `news-windshield-repair` | `31:4846` | News |

**Icons** (`src/components/icons`, `currentColor` unless multi-colour): `MenuIcon`, `AsteriskIcon`, `ChevronDownIcon`, `ArrowRightIcon`, `FacebookIcon`, `InstagramIcon`, `YoutubeIcon`, `StarIcon`, `CheckIcon`, `GoogleIcon` (brand colours), and the gradient engagement icons `InsuranceIcon`, `EuroIcon`, `FastServiceIcon`, `PaperlessIcon`, `FranceIcon`, `ShieldCheckIcon` (gradient stops use `var(--color-brand)` → `var(--color-brand-cyan)`).

**Rendered in CSS, not exported:** the glow backgrounds (`hero bg effect` `31:1742` = 2 blurred magenta/cyan ellipses on black; same pattern in the footer, referral card, offer cards and engagement cards) and the text gradients. See the glow utilities below.

---

## Code map (Phase 2)

- `src/app/globals.css`: `@theme` tokens, plus custom utilities:
  - `bg-glow-hero`, `bg-glow-pill`, `bg-glow-offer`, `bg-glow-card`, `bg-glow-rewards`, `bg-glow-footer`: each Figma glow (two blurred ellipses) as two radial gradients. Centres and radii come from the ellipse geometry (rotation applied), the falloff from the blur, the alpha from blur coverage × layer opacity. Much cheaper than `filter: blur()` at 300–500 px.
  - `text-gradient-brand`: watermark text gradient.
  - base: focus-visible outline in `brand`, scroll lock while a `<dialog>` is open, smooth scrolling (off with reduced motion).
- `src/app/layout.tsx`: fonts, skip link "Aller au contenu" (→ `#contenu`, the page's `<main>`), `SiteHeader`, `SiteFooter`.
- `src/lib/cn.ts`: class joiner. It does **not** resolve conflicting utilities (e.g. `hidden` vs a component's `inline-flex`), so wrap instead of overriding display/colour classes.
- `src/data/site.ts`: nav anchors, primary CTA, contact, footer columns, socials, copyright.
- `src/components/ui/`
  - `Container`: 1280 content column, gutters 20 / 40 / 80 px (`box-content`, so 1440 → 1280 exactly).
  - `Button.tsx`: `ButtonLink` (`<a>`) and `Button` (`<button>`), variants `brand | light | outline`; `buttonClasses()` for reuse.
  - `TextLink`: "EN SAVOIR PLUS →".
  - `SectionIntro`: `layout="split" | "center"`, `tone="light" | "dark"`, `titleClassName` for the per-section heading width, `titleId` for `aria-labelledby`.
  - `Watermark`: `size="offer" | "know" | "rewards" | "footer"`, `tone="gradient" | "white"`, `aria-hidden`.
  - `AsteriskLabel` and `Marquee` (CSS animation, list duplicated with the copy `aria-hidden`, stops with reduced motion).
  - `FormFields.tsx`: `TextField`, `TextArea`, `Checkbox`, `Select` (visually hidden labels, the placeholder mirrors Figma).
  - `AvatarStack`, `StarRating` (`role="img"` + "Note : 4 sur 5").
- `src/components/layout/`
  - `Logo` (`next/image`, `eager` above the fold).
  - `SiteHeader` (server, absolute over the hero).
  - `SiteMenu` (client): hamburger + modal `<dialog>` (focus trap, Escape, backdrop click, links close it).
  - `SiteFooter` (server).
- `src/components/icons/`: generated icons + `CloseIcon` (hand-drawn, see A16).

---

## Routes

The section contains **one frame only**, so there is one route.

- [x] `/`: Landing page (`31:4467`): `src/app/page.tsx`

### Section → component map (Phase 3)

All content lives in `src/data/landing.ts` (typed); sections in `src/components/sections`, cards in `src/components/cards`.

| # | Section | Component(s) | Anchor |
|---|---|---|---|
| 1 | Header | `layout/SiteHeader` + `layout/SiteMenu` (client) | — |
| 2–3 | Hero + ticker | `sections/HeroSection` (`ui/Marquee`) | `#accueil` |
| 4 | Offres | `sections/OffersSection`, `cards/OfferCard` | `#offres` |
| 5 | Emplacements | `sections/LocationsSection` (`ui/Select`, `ui/AvatarStack`) | `#emplacements` |
| 6 | Comment ça marche | `sections/HowItWorksSection`, `cards/StepCard` | `#comment-ca-marche` |
| 7 | Le saviez-vous | `sections/DidYouKnowSection` | `#le-saviez-vous` |
| 8 | Nos engagements | `sections/EngagementsSection`, `cards/EngagementCard` | `#engagements` |
| 9 | Services | `sections/ServicesSection`, `cards/ServiceThumb` | `#services` |
| 10 | Formulaire | `sections/ContactSection` + `sections/ContactForm` (client) | `#rendez-vous` |
| 11 | Avis | `sections/ReviewsSection`, `cards/ReviewCard` | `#avis` |
| 12 | Parrainage | `sections/ReferralSection` | `#parrainage` |
| 13 | Carrières | `sections/CareersSection`, `cards/CareerCard` | `#carrieres` |
| 14 | Actualités | `sections/NewsSection`, `cards/NewsCard` | `#actualites` |
| 15 | Footer | `layout/SiteFooter` | — |

Only `SiteMenu` and `ContactForm` are client components.

### Landing page sections (top → bottom)

| # | Figma node | Section | Content | Anchor (planned) |
|---|---|---|---|---|
| 1 | `31:4485` (in `31:4468`) | Header | Logo, round hamburger button, "Parlons-en" pill CTA; transparent over the hero | — |
| 2 | `31:4468` (part) | Hero | "Visibilité claire. Sécurité complète. Partout en France.", two technicians + car image over a magenta→cyan gradient (`hero bg effect` instance), intro text, "Contactez-nous" + "Prendre rendez-vous" | `#accueil` |
| 3 | `31:4473` | Marquee ticker | ✱ No upfront costs · Franchise Offered · All Insurances · Installation guaranteed for life | — |
| 4 | `31:4468` (part: `31:4499`, `31:4504`, `31:4505`, `31:4481`) | Offres | Giant gradient "OFFRE" watermark, 2 tilted gradient offer cards ("De 200 € à 400 €" virement bancaire, "De 2 € à 4 €" nouveaux pneus) with outline CTA (`offer animations` instances), "✱ Offer valid throughout France" | `#offres` |
| 5 | `31:4509` | Emplacements | "Explorez vos lieux les plus proches", text, location select pill, avatar stack "83 emplacements", France map (`Figmap` `31:4510`) on the right half | `#emplacements` |
| 6 | `31:4532` | Comment fonctionne Nessglass ? | Centered heading + text, 3 step cards (3D illustration on grey tile, title, text), "Prendre rendez-vous" | `#comment-ca-marche` |
| 7 | `31:4567` (top) | Le saviez-vous ? | Gradient "LE SAVIEZ-VOUS ?" watermark band, dark garage photo, "Vous avez la liberté de choisir votre réparateur.", 3D question mark, law text (loi n° 2014-344) | `#le-saviez-vous` |
| 8 | `31:4611` (in `31:4567`) | Nos engagements | Centered heading, 6 dark gradient cards in 3 × 2 grid (icon, title, text), "Book appointment" | `#engagements` |
| 9 | `31:4726` (instance "our services") | Soins complets du pare-brise | Heading left + text right, top-down car in the centre with 5 service thumbnails around it (pare-brise, toit panoramique, vitre arrière, caméra ADAS, impact), "Prendre rendez-vous" | `#services` |
| 10 | `31:4727` | Formulaire contact | Left: photo card "Prenons soin de votre véhicule."; right on black: prénom, nom, téléphone, email, code postal, message, CGU checkbox, "Envoyer la demande" | `#rendez-vous` |
| 11 | `31:4764` | Avis clients | "Ce que disent nos clients" + text, review cards (Google logo, stars, quote, avatar, name, date) | `#avis` |
| 12 | `31:4786` | Parrainage | Gradient card with "REWARDS" watermark and 3D € coins: "Recevez 40 € pour chaque parrainage !", payment method, CTA "Profitez d'une remise allant jusqu'à 50 %" | `#parrainage` |
| 13 | `31:4807` | Carrières | "Grandissez avec nous, construisez avec nous" + text, 2 image cards with title, text, "Rejoignez-nous" | `#carrieres` |
| 14 | `31:4838` | Nos actualités | Heading + text, 3 news cards (image, title, excerpt, "En savoir plus →"), "Book appointment" | `#actualites` |
| 15 | `31:4885` | Footer | Gradient (2 ellipses), logo + tagline, columns Nos services / Infos / Communauté / Contactez-nous / Réseaux sociaux, "English(Eng)", "© 2026 Nessglass", giant "NESSGLASS" watermark | — |

---

## Shared elements

**Layout**
- `SiteHeader`: logo, hamburger (opens a menu, not designed in Figma, see A4), "Parlons-en" CTA. Overlays the hero.
- `SiteFooter`: see section 15.
- `Container`: content is 1280 wide with 80 px side gutters at 1440 (frame x 4812 → content x 4892).

**UI primitives**
- `Button` (pill, Inter Semi Bold 16, padding 16, `rounded-full`): `brand` (magenta fill, snow text: "Prendre rendez-vous", "Parlons-en", "Book appointment", "Envoyer la demande", "Rejoignez-nous"), `light` (snow fill, magenta text: "Contactez-nous"), `outline` (black fill, 3 px snow border with a 71 % glow inside: offer cards).
- `IconButton`: round hamburger button (56 px, `brand` at 51 % opacity, backdrop blur `button`).
- `TextLink`: "EN SAVOIR PLUS →" (magenta, Inter Bold, arrow icon).
- `SectionIntro`: big uppercase display heading. Variant `split` (heading left, paragraph right: sections 9, 11, 13, 14) and variant `center` (heading and paragraph centred: sections 6, 8).
- `Watermark`: giant gradient display text ("OFFRE", "LE SAVIEZ-VOUS ?", "REWARDS") or white ("NESSGLASS").
- `Marquee`: infinite ticker with ✱ separators.
- Form: `TextField`, `TextArea`, `Checkbox` (white 5 % fill, `rounded-field`, on black), `Select` (magenta pill, light section).
- `AvatarStack` (section 5).
- `StarRating` (section 11: 4 `star` + 1 `star-off`).

**Cards**
- `OfferCard` (tilted plum card with glow, big price, outline CTA)
- `StepCard` (illustration on a black 4 % tile, title, text)
- `EngagementCard` (white 4 % glass card with glow, gradient icon, title, text)
- `ServiceThumb` (rounded photo + uppercase label)
- `ReviewCard` (`mist`, `rounded-card`)
- `CareerCard` (photo, title, text, button)
- `NewsCard` (photo, title, excerpt, text link)

**Not in the design:** modals, tables, sidebar.

---

## Breakpoints

Figma has the **1440 px desktop frame only** (no mobile or tablet frames in `31:8001`). Responsive decisions as built:
- Breakpoints: Tailwind defaults (`sm` 640, `md` 768, `lg` 1024, `xl` 1280) plus `xs` 360 (header CTA, A17). Pixel-matched at 1440; the content column caps at 1280.
- Display headings scale with `clamp()` tokens (68 → 40 px, 84 → 48 px, 64 → 40 px); watermarks scale with `vw`.
- **Desktop composition from `xl` (1280)** for the sections whose Figma layout needs the full width: hero (title left / text + CTAs right, photo anchored to the bottom, ticker over it), locations (map on the right 48.7 %), "Le saviez-vous" (rotated question mark over the heading, text on the right) and the contact form (photo + form side by side). At 1024 px those layouts overlapped, so below `xl` they stack: hero photo (cropped with `object-cover`) and ticker after the CTAs; map below the text (square, 16:9 from `sm`); question mark centred between heading and text; photo card above the form.
- **From `lg` (1024)**: split headings (title left, text right), offer cards side by side with their tilt, services "car + 5 thumbnails" orbit (positions in % of the 1280 stage), engagements 3 columns, news 3 columns.
- Below `lg`: offer cards straight and stacked; services as a 2/3-column grid under the car; engagements 2 → 1 columns; news 2 → 1; careers 2 → 1 (`md`); steps 3 → 1 (`md`).
- Reviews: a horizontal scroll-snap row at every size (4 cards visible at 1280).
- Buttons use `min-h-14` and can wrap on very narrow phones instead of overflowing.
- Header: logo + hamburger + CTA at all sizes ≥ 360 px.

---

## Ambiguities / decisions

- **A1 · Other Ness Glass pages.** The Figma file also has a page **"nessglass"** (`249:2`) with sections *landing* (`249:7203`), *about us* (`249:7727`), *services page* (`249:2153`), *blogs* (`249:8136`), *contact* (`249:8947`), *career page* (`249:9120`). They are outside the linked section `31:8001`. **Decision (user, 2026-10-26): not built.** Only the landing page.
- **A2 · Hidden / clipped layers.** Confirmed in Phase 1: `31:4567` "did you know" holds an English copy of the hero header and hero text (`31:4570`–`31:4597`) placed above the frame's top edge, so they are clipped and never visible. Ignored.
- **A3 · Placeholder copy.** The 3 step cards share one title and text ("Soumettez votre demande en ligne…"); the 6 engagement cards share one description; the reviews are identical ("Le café est excellent…"); the 3 news cards are identical. Decision: keep the Figma copy verbatim in `src/data` so it is easy to replace.
- **A4 · Menu.** The hamburger has no designed menu. Decision: an accessible slide-in panel (focus trap, Escape closes) listing the page anchors, styled with the site tokens.
- **A5 · English strings on a French site.** Marquee items, "Offer valid throughout France", "Book appointment", "REWARDS", "English(Eng)". Decision: keep as in Figma unless the user asks for translations.
- **A6 · Cut-off heading.** "Vous avez la liberté de choisir votre réparateur." is partly hidden behind the 3D question mark in Figma (the text layer is complete). Decision: same overlap on desktop.
- **A7 · Forced word break.** "VÉHICU / LE." in the form photo is an artefact of the 450 px text box at 84 px. Decision: no hyphen break; the heading wraps naturally.
- **A8 · Map.** The France map is a static image (`Figmap`). Decision: static image; the location select gets mock centres from `src/data`, no backend.
- **A9 · Links.** Footer and menu links point to on-page anchors or `#` until real pages exist (see A1).
- **A10 · Fonts (resolved).** The display face is **Clash Display**, not the GC Epicpro demo used on Oxxoglass, so there is no missing-glyph problem (accents, digits, € all render).
- **A11 · Font licence.** The ITF Free Font License allows self-hosting for the licensee's own website but forbids handing the files to external contractors. The site owner (Ness Glass) should download Clash Display from fontshare.com themselves before launch.
- **A12 · Offer card animation.** The `offer animations` components (`31:1924`, `31:2048`) have prototype interactions. At rest, the banknote / tyre images sit behind the card and the three sparkle groups are at opacity 0, so they are animation states. Decision: build the resting state first; add a hover reveal in Phase 3 if time allows.
- **A13 · Referral spelling.** Figma reads "RECEVEZ 40 € POUR CHAQUE **PARAINAGE** !" (the subtitle says "parrainages"). Decision: correct to "PARRAINAGE".
- **A14 · Reviews carousel.** The review row holds 12 cards in 3 frames of 4 (`31:4771`, `31:4776`, `31:4781`), clipped to the first 4 → a carousel / auto-scroll. Decision: horizontally scrollable track with scroll-snap and no autoplay (accessibility).
- **A15 · Hidden sparkle in referral.** `Component 49` (`31:4792`) has its only image hidden by an override, so it renders nothing. Ignored.
- **A16 · Menu close icon.** Not in Figma. `CloseIcon` is drawn to match `MenuIcon` (2 px strokes, round caps) inside the same 56 px round button.
- **A17 · Header on narrow phones.** Logo + menu + "Parlons-en" need ~322 px, which overflows phones narrower than 360 px. Below the custom `xs` breakpoint (360 px) the header CTA is hidden; it stays in the menu.
- **A18 · Social links.** Facebook / Instagram / YouTube profile URLs are not in the design; `href="#"` in `src/data/site.ts` until they are supplied.
- **A19 · Language switch.** "English(Eng)" in the footer is static text (`lang="en"`): there is no English version to switch to.
- **A20 · Footer "COMMUNAUTÉ" column.** Figma uppercases the title and the first three links only ("Contactez-nous" and "Blog" are in sentence case); reproduced as is.
- **A21 · Careers description overflow.** In Figma the description frame (440 px) sits at x = 960 of the 1280 column, so it runs 120 px past the content edge. Built: the heading keeps its two designed lines (960 px) and the description takes the remaining width, top-aligned.
- **A22 · Fade rectangles.** Several Figma fades are vertically flipped rectangles (e.g. `31:4603`, black at the top fading out by 296 px, drawn *above* the "Le saviez-vous" heading, which is why its first line looks grey). Reproduced; the second, partly hidden fade at 296–592 px is not, as it is invisible at 9 % image opacity.
- **A23 · Offer price box.** Figma reserves a 3-line (183 px) box for the 2-line price in both offer cards; kept on desktop (`lg:min-h`) so the cards have the designed height.
- **A24 · Coloured price runs.** From the text style runs: "200"/"400" and "2"/"4" are brand cyan, the € signs stay white; in the referral heading only "40" is cyan (verified against the render).
- **A25 · Contact form.** No backend: native validation (all fields except the message are required, postal code = 5 digits, consent required), then the form resets and a polite live region confirms. The "[Conditions Générales]" brackets are kept as plain text (no CGU page yet).
- **A26 · Offer hover.** Per A12, the banknote / tyre image slides out from behind its card on hover and keyboard focus (off with reduced motion). The Figma sparkles are not reproduced.
