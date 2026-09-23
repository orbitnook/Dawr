# DAWR hosting handoff

The private `artifacts/website` directory remains the source of truth. The
existing GitHub Actions workflow mirrors this directory to `orbitnook/Dawr`.
Netlify should deploy that public repository without a build step.

## Netlify settings

- Repository: `orbitnook/Dawr`
- Production branch: `main`
- Build command: leave empty
- Publish directory: `.`
- Environment variables: none
- Pretty URLs: `netlify.toml` explicitly disables rewriting during migration so
  `privacy.html` and `terms.html` remain the policy URLs used by store metadata

GitHub Pages can remain live while the Netlify deployment is reviewed.

## Primary hostname switch

The current primary origin is `https://orbitnook.github.io/Dawr/`. After the
final Netlify hostname is confirmed and the site is approved, replace that
origin in these locations in one publication change:

1. `index.html`: canonical URL, `og:url`, `og:image` and `twitter:image`
2. `robots.txt`: `Sitemap` URL
3. `sitemap.xml`: all three `<loc>` values

The social image path remains `/assets/social-preview.png` beneath whichever
origin becomes primary. Do not change the current URLs before Netlify is ready.
