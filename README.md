# WALLY WORLD — Vercel Edition

A peaceful, mobile-first town-building adventure rendered as a hand-painted 2D world with Three.js.

Wally wanders through a calm crowd, discovers tokenized projects, and watches a living neighborhood grow one gentle construction piece at a time. The game contains no combat, failure state, wallet, login, or real-money mechanics.

## Play

- On touch devices, drag the faint joystick or tap a destination.
- On desktop, use WASD, the arrow keys, or click a destination.
- Tokens collect automatically when Wally approaches.
- Progress, budget, purchases, and Wally’s position are saved on the device.

## Game systems

- Exactly 80 data-driven town assets across eight categories
- A dense, pooled crowd that calmly parts and reforms around Wally
- Category-specific pulses, particles, construction stages, and soft synthesized audio
- Progressive paths, foliage, public spaces, and ambient residents
- A hidden stock exchange with deterministic real-world daily prices for fictional companies
- Passive budget generation and modest offline accrual
- Portrait-mobile, landscape, and desktop layouts

## Deploy to Vercel

1. Create a new Vercel project and import this folder from GitHub, GitLab, or
   Bitbucket, or upload it with the Vercel CLI.
2. Leave the framework preset as **Next.js**.
3. Leave the build command as `npm run build`.
4. Leave the output directory blank; Vercel handles the Next.js output.
5. Deploy.

No database, API keys, server-side accounts, or storage services are required.
Player progress is stored in each player's browser.

For canonical social links, optionally set:

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

## Local development

```bash
npm ci
npm run dev
npm run build
```

Use Node.js 22.13 or newer. The supplied Wally art under `public/assets` is
treated as an immutable character layer.
