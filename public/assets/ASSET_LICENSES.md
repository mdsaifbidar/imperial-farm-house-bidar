Stock media used as placeholders, pending real photography/video of Imperial Farm House.

All assets are from Pixabay (pixabay.com), used under the Pixabay Content License — free for
commercial use, no attribution required. Source URLs recorded below for reference.

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

A handful of additional photos and one video are served directly from Pexels' CDN
(`images.pexels.com`, `videos.pexels.com` — allow-listed in `next.config.ts`) rather than
copied into this repo, under the Pexels License (free for commercial use, no attribution
required). Referenced from `lib/content.ts` (`galleryItems`, `cinematicClip`):

- https://www.pexels.com/photo/32179374/ — long table set in a garden
- https://www.pexels.com/photo/36305352/ — couple embracing in a garden, golden hour
- https://www.pexels.com/photo/32859443/ — seating set in a green garden
- https://www.pexels.com/photo/38758629/ — couple dancing outdoors at twilight
- https://www.pexels.com/video/a-drone-footage-of-a-couple-kissing-each-other-15201674/ — aerial clip used in the cinematic break section

As with the Pixabay assets above, none of these depict Imperial Farm House itself — swap
them out once real photography/video is available. Hotlinking means no local re-encoding,
but also means these depend on Pexels staying up; if that's a concern, download and serve
them from `public/assets/` instead.
