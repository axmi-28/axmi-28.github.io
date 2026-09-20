# Making al-folio your own

al-folio gives you a starting design and academic-site features. You can change the entire visual design, page structure, and content. There is no fixed layout you are locked into.

The current v1 release keeps the shared layouts, styles, and features in Ruby packages (gems). Your repository contains your content and deliberate customizations; Jekyll combines them into a static website. That is why this checkout is much smaller than older al-folio forks full of copied theme files.

## This site's starting design

The homepage keeps your words intact. It uses a Source Serif 4 greeting, DM Sans body text, a 760px outer column, blue links, subtle dividers, and matching light/dark palettes. The header links directly to your work and open-source sections. There are no invented affiliations, sample papers, stock headshots, placeholder CVs, or empty blog pages.

The fonts and icon stylesheet load from Google Fonts and jsDelivr. System fonts are included as fallbacks. The theme switch stores only a theme preference in the visitor's browser; analytics and comments are disabled.

## Three levels of customization

1. **Content and settings.** Change `_pages/about.md`, `_data/socials.yml`, and `_config.yml`. You can update text, links, the site name, width, fonts, and optional features without changing templates.
2. **Visual identity.** Edit `assets/css/custom.css`. The variables at the top define the light palette and the following block defines dark mode. The remaining selectors control typography, margins, navigation, and mobile spacing. This is a good place to give the site a personal identity while retaining al-folio's features.
3. **Structure and behavior.** Edit `_layouts/home.liquid` or `_includes/header.liquid`, or add your own layouts and scripts. You can create a sidebar, a different homepage composition, a project gallery, or custom research pages. A site-local file with the same path as a gem file overrides the gem's version.

For future iterations, a distinctive research-project page with real diagrams or screenshots would communicate your work more clearly than generic decorative imagery. A portrait, short research notes, and a custom domain can be added when you have the content and want those features.

## Add a page

Create `_pages/research.md`:

```markdown
---
layout: home
title: Research
permalink: /research/
nav: true
nav_order: 1
---

Your research page content goes here.
```

The custom header discovers `nav: true` pages automatically. Use `layout: page` for al-folio's standard page structure instead. For internal links, use Jekyll's baseurl-aware filter:

```liquid
[Research]({{ '/research/' | relative_url }})
```

Do not hardcode `/research/` when the site lives under `/andys-website/`.

## Add writing, projects, publications, or a CV

- **Writing:** add Markdown files under `_posts/` using `YYYY-MM-DD-title.md` filenames and `layout: post`. Add a blog index page when you have posts to show. Enable pagination or search only if useful.
- **Projects:** add `_projects/` entries and a project index page. The projects collection is already configured.
- **Publications:** add your own BibTeX to `_bibliography/papers.bib`, then create a page with `{% bibliography %}`. The bibliography plugins are installed; the example papers were omitted.
- **CV:** supply your CV data and a `layout: cv` page, then enable `al_folio.features.cv.enabled` in `_config.yml`. No CV content has been fabricated.
- **Jupyter notebooks:** this optional dependency is omitted. If needed, add `jekyll-jupyter-notebook` to both `Gemfile` and the config's `plugins` list, install Python/Jupyter/nbconvert locally and in CI, then rebuild.

The [upstream customization guide](https://github.com/alshedivat/al-folio/blob/main/docs/CUSTOMIZE.md) contains complete examples. Feature plugins need to be both installed in `Gemfile` and listed in `_config.yml`; some also require a site flag and page-level opt-in.

## Custom domain

With this repository name, GitHub Pages uses:

```yaml
url: https://axmi-28.github.io
baseurl: /andys-website
```

For a custom domain, set `url` to that domain and `baseurl: ""`, configure the domain and DNS in GitHub Pages, and rebuild. If you instead rename the repository to `axmi-28.github.io`, keep the GitHub URL but set `baseurl: ""`.

## Keeping al-folio up to date

Dependency versions are locked. Upgrade deliberately, then run the production build and upgrade audits from the README. Two files intentionally override `al_folio_core`:

- `_includes/head.liquid`: upstream head plus the custom stylesheet link.
- `_includes/header.liquid`: this site's compact navigation, preserving al-folio's theme-toggle IDs.

`.al-folio-overrides.yml` records the versions and checksums you reviewed. After a gem update:

```bash
bundle exec al-folio upgrade overrides audit
bundle exec al-folio upgrade overrides diff _includes/head.liquid
bundle exec al-folio upgrade overrides diff _includes/header.liquid
```

Review and incorporate relevant upstream changes, then acknowledge the updated versions:

```bash
bundle exec al-folio upgrade overrides accept _includes/head.liquid
bundle exec al-folio upgrade overrides accept _includes/header.liquid
```

`_layouts/home.liquid` and `assets/css/custom.css` are new site-owned files, so they do not shadow upstream files. Keeping custom changes concentrated here makes future updates easier than rewriting the entire core.
