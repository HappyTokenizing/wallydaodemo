# WALLY WORLD

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

## Development

```bash
npm install
npm run dev
npm run build
```

The supplied Wally sunglasses texture under `public/assets` is treated as an immutable character layer.
