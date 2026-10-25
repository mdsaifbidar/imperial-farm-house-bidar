## Real venue photography — `gallery/real/`

Actual stills of Imperial Farm House, extracted from a walkthrough video of the estate
(provided by the proprietor over WhatsApp) and lightly upscaled/sharpened for web use.
These are the venue's own photography, not stock — no license needed. Source frames are
low resolution (the original video is 464×832, WhatsApp-compressed), so these read best at
gallery/card sizes rather than full-bleed hero size.

- `pool-day.jpg` — the pool, late afternoon
- `pool-night.jpg` — the pool deck, lit at night
- `big-pool.jpg` — the pool, evening lighting (venue's own "BIG POOL" caption baked in)
- `rooftop-glass-house.jpg` — the rooftop glass house at dusk (venue's own caption baked in)
- `master-bedroom.jpg` — one of the master bedrooms (venue's own caption baked in)
- `function-deck.jpg` — the covered deck used for big functions (venue's own caption baked in)
- `lounge.jpg` — the indoor lounge

Used in `lib/content.ts` (`spaces`, `galleryItems`) and the `amenities` list, which was
transcribed from this same video's on-screen captions (pool, rooftop glass house, 3 BHK
stay, kitchen appliances, children's play area, function deck).

## Stock placeholders — remaining assets

The rest of the media below is stock, used as a placeholder pending further real
photography/video of Imperial Farm House.

All Pixabay assets are used under the Pixabay Content License — free for commercial use,
no attribution required. Source URLs recorded below for reference.

## Video — `video/`

- `hero-loop.mp4` / `hero-poster.jpg` — derived from https://pixabay.com/videos/grass-meadow-field-pasture-214752/
- `events-loop.mp4` — derived from https://pixabay.com/videos/grass-wind-green-sways-landscape-111512/
- `bokeh-loop.mp4` — derived from https://pixabay.com/videos/particles-bokeh-lights-abstract-53005/

All three were trimmed, downscaled, color-graded and re-encoded for web delivery; originals
are unmodified on Pixabay.

## Photos — `gallery/`

- `ceremony-lawn.jpg` — https://pixabay.com/photos/ceremony-garden-wedding-963048/
- `floral-aisle.jpg` — https://pixabay.com/photos/chairs-yard-wedding-ornament-2010263/
- `string-lights.jpg` — https://pixabay.com/photos/chain-of-lights-light-outdoor-party-385238/
- `reception-tables.jpg` — https://pixabay.com/photos/wedding-table-ballroom-1174141/
- `cocktail-lawn.jpg` — https://pixabay.com/photos/standing-tables-tables-decorated-590833/
- `banquet-hall.jpg` — https://pixabay.com/photos/ballroom-room-1178449/
- `marquee-lawn.jpg` — https://pixabay.com/photos/event-tent-time-419285/
- `garden-night.jpg` — https://pixabay.com/photos/marriage-field-2278309/

None of these depict Imperial Farm House itself — swap them for real photography/video of the
venue as soon as it's available.

## Hotlinked media (not stored locally)

Two assets are served directly from Pexels' CDN (`images.pexels.com`, `videos.pexels.com`
— allow-listed in `next.config.ts`) rather than copied into this repo, under the Pexels
License (free for commercial use, no attribution required):

- https://www.pexels.com/photo/8143668/ — manicured lawn/garden estate, used as the Hero background (`components/Hero.tsx`)
- https://www.pexels.com/video/a-push-in-shot-through-the-trellis-arches-4328491/ — wisteria garden archway, used in the cinematic break section (`cinematicClip` in `lib/content.ts`)

Neither depicts Imperial Farm House itself — swap them out once higher-resolution real
photography/video of the venue is available (the real stills above are currently capped at
WhatsApp-compression resolution). Hotlinking means no local re-encoding, but also means
these depend on Pexels staying up; if that's a concern, download and serve them from
`public/assets/` instead.
