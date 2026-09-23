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

## Production hosts

- Primary canonical host: `https://dawrapp.netlify.app/`
- Fallback and legacy GitHub Pages host: `https://orbitnook.github.io/Dawr/`

Netlify is now the canonical public host. GitHub Pages can remain available as
a fallback.

## Canonical hostname locations

The canonical Netlify origin is recorded in these locations:

1. `index.html`: canonical URL, `og:url`, `og:image` and `twitter:image`
2. `robots.txt`: `Sitemap` URL
3. `sitemap.xml`: all three `<loc>` values

The canonical social image is
`https://dawrapp.netlify.app/assets/social-preview.png`.
