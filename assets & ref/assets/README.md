# Assets

Artwork, logo, fonts and video links for the Grand Theft Developer portfolio. All artwork is our own (AI-generated); nothing here is Rockstar's.

`site/` holds every image the page loads, already cut to size. `source/` and `brand/` hold the originals they were cut from, and `hosted-media.json` points at the videos on Cloudinary. Folders are named after the page section they belong to.

```
assets/
├── brand/
│   ├── logo-poster.png       full logo (gradient VI + "grand theft developer"); the hero logo layers and the footer logo are cut from it
│   └── loader-logo.svg       the loading screen's shape: the wordmark's letters in one colour
├── fonts/                    Outfit (variable) + Barlow Condensed 700/900, SIL Open Font License, latin subset
├── hosted-media.json         Cloudinary links to the two scroll-scrubbed videos (services, city)
├── source/                   originals, before they were cut to size
│   ├── posters/      941×1672   full-stack-developer, off-the-clock, sunset-codeposter, the-heist-case-study
│   ├── squares/      ~1254²     achievements, beachfront-classic-car, performance-speedboat, supercar-projects-tower, supercar-tech-stack
│   ├── scenes/       ~16:9      after-hours-nightclub (1024×572), code-master-supercar, projects-developer-supercar, rooftop-full-stack, site-glow-hotel-sign (2:1), sportbike-rider
│   ├── banners/      ~5:2       alligator-float (2:1), sunset-coast, vault-heist
│   ├── projects/     1254²      3d-basketball-website, ai-book-assistant, react-native-language-app
│   ├── clients/      1254²      happy-clients-key-rack, miami-postcard-testimonial
│   ├── blog/         1672×941   agentic-engineering-2026, ai-agents-escaped, system-design-architecture
│   └── hero-masks/   desktop/ and mobile/: the outline of each of the hero intro's 10 pieces
└── site/                     every image the page loads, ready to use
    ├── hero/                 desktop/ and mobile/: shard-01…10, poster, logo-vi, logo-gta, poster-logo
    ├── meet-the-developer/   scene, featured-desktop, featured-mobile, card-1…3
    ├── services/             card-tall-desktop, card-tall-mobile, card-short
    ├── highlights/           open-to-work, after-hours, the-heist, off-the-clock (the four wide cards under Miami, USA.)
    ├── clients/              clients, testimonial
    ├── blog/                 post-1…3
    └── footer/               logo
```

## What goes where

| Section | Art |
|---|---|
| Loader | `brand/loader-logo.svg` |
| Hero | `site/hero/`: one intro piece per shard (cut from the posters, squares and scenes), the logo layers and the poster |
| Meet the Developer | scene: `site/meet-the-developer/scene` (projects-developer-supercar); featured card: `featured-desktop` (5:2) and `featured-mobile` (2:3, phones in portrait), both sportbike-rider; project cards: `card-1…3` (the three projects) |
| Services | backdrop: the neck-rotation video (`hosted-media.json` → `services`); big card: `card-tall-desktop` / `card-tall-mobile` (site-glow-hotel-sign); wide card: `card-short` (rooftop-full-stack) |
| Miami, USA. | backdrop: the city video (`hosted-media.json` → `city`) |
| Wide cards under Miami | `site/highlights/`: `open-to-work` (sunset-coast), `after-hours` (after-hours-nightclub), `the-heist` (vault-heist), `off-the-clock` (alligator-float) |
| Clients | `site/clients/`: `clients` (happy-clients-key-rack), `testimonial` (miami-postcard-testimonial) |
| Blog | `site/blog/post-1…3` (the three blog covers) |
| Footer | `site/footer/logo` |

## Notes

- `site/` images are cut to the live site's slot sizes. Square art that fills a wide or tall slot is placed whole, with the rest of the slot filled by a blurred extension of it, so titles baked into the art stay readable. Nothing is upscaled.
- To change a picture, replace its original in `source/` and re-cut it to the same size and name in `site/`.
- To change a video, put its Cloudinary URL in `hosted-media.json`.
- Some artwork shows real company logos (the clients key rack, "certified" badges, product names). Label that content as sample, or replace the art, before publishing a real portfolio.
