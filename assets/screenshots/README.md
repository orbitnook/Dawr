# Website screenshot refresh

The existing JPG and framed WebP screenshots in this directory were captured
from an older DAWR interface. They are retained for reference but must not be
presented as current production UI.

The September 2026 product captures under `assets/screenshots/current/` are the
current homepage source images. The retained JPEG originals are direct 1080 by
2340 device captures. The homepage serves optimized 540 by 1170 WebP fallbacks
plus true-source 1080 by 2340 WebP variants for high-density screens:

- `home.webp`: full Home screen, used once in the hero and as calendar crops.
- `calendar-qadha.webp`: calendar and expanded qadha card.
- `life-stage.webp`: Regular cycle, Pregnancy and Postpartum / nifas selector.
- `guidance-overview.webp`: cycle-aware Guidance overview.
- `guidance-fasting.webp`: fasting Guidance tab.
- `guidance-worship.webp`: worship Guidance tab.
- `settings-top.webp`: profile, cycle, Hijri calendar and reminder settings.
- `settings-backup-data.webp`: cloud backup and local data controls.
- `google-drive-backup.webp`: optional Google Drive connection and local restore
  choices shown during backup setup.

The homepage crops these original images with CSS. Before final publication,
review those crop positions at common phone, tablet and desktop widths. Refined
WebP exports of the same regions would improve compression and give tighter
art direction, but must not alter or invent app UI. The hero should continue to
use a complete current Home screen rather than a cropped interface fragment.

Use platform-accurate captures. Do not place iPhone UI in an Android frame or
Android UI in an iPhone frame. Use neutral sample data and review the status bar
and all visible personal information before publishing.

All visible sample names, dates, status bars and notification icons must receive
a final publication review. The supplied feedback/chat screenshots are source
material only. They must never be copied here or published.

Each approved capture has a 540 by 1170 standard WebP and an `@2x.webp` variant
at the original 1080 by 2340 resolution. The 2x files are encoded directly from
the original device captures and are never enlarged from website derivatives.
The homepage uses width-based `srcset` and `sizes` values with 540 by 1170
intrinsic dimensions, `loading="lazy"` and `decoding="async"` in the markup.
The hero remains high priority rather than lazy loaded.

Future refreshes must begin with original device screenshots or original export
files. Do not build production assets from images downloaded from WhatsApp or
another messaging service, and do not create high-density variants by enlarging
compressed 1x website assets.

The reviewed 1200 by 630 social preview is stored at
`assets/social-preview.png`. Its absolute metadata URL must move from the
current GitHub Pages host to the final Netlify hostname only when Netlify becomes
the confirmed primary host.
