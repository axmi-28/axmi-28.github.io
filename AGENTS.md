# Andy's personal al-folio site

- This is a user's customized site, not the upstream al-folio starter. Local layout/include/style customizations are intentional and supported.
- Preserve the exact wording in `_pages/about.md` unless Andy requests text edits. `me.MD` is the original local reference; do not modify it or publish raw notes.
- The existing repository is `axmi-28/andys-website`; its production baseurl is `/andys-website`. Use `relative_url` for internal URLs.
- Content lives in `_pages/`; site styling lives in `assets/css/custom.css`. Keep gem-managed source under `vendor/` unchanged.
- `Gemfile` and `_config.yml` must agree on enabled plugin dependencies.
- After editing, run the Jekyll production build and relevant al-folio audits from `README.md`. For an intentional shadowed gem file, review and accept the change using the override audit tool and retain `.al-folio-overrides.yml`.
- Do not copy upstream demo biographies, publications, photos, or third-party analytics IDs into the site.
- `.openai/hosting.json` belongs to the earlier deployment and is retained for reference. GitHub Pages is the configured deployment target for this migration.
