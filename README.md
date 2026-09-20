# Andy's website

A personal site built with the real [al-folio](https://github.com/alshedivat/al-folio) v1 Jekyll starter and its pinned `al_folio_core` runtime. It includes a custom homepage, light/dark/system themes, responsive navigation, contact links, metadata, a sitemap, and a 404 page.

The content in `_pages/about.md` preserves the wording supplied in `me.MD`, including capitalization, grammar, and visible URLs. Only formatting has changed. The local notes file is untouched, ignored by Git, and excluded from the public site. The older `personalwebsite.MD` is retained from the existing repository as a reference and is also excluded from the public site.

## Preview locally

Ruby 3.3.12 and the gems have been installed on the Mac used for setup. From this folder:

```bash
./bin/serve
```

Open **http://127.0.0.1:4000/andys-website/**. Keep that terminal open; press Ctrl+C to stop. Content and CSS edits rebuild automatically. Restart after changing `_config.yml`.

On another Mac, install the prerequisites first:

```bash
brew install ruby@3.3 node
export PATH="$(brew --prefix ruby@3.3)/bin:$PATH"
bundle config set --local path vendor/bundle
bundle install
./bin/serve
```

On other platforms, install Ruby 3.3 and Node.js 22 or newer, then run the same Bundler commands. Node is used by the template's JavaScript minifier. ImageMagick and Python are not needed for this text-only site; notebook rendering is not installed.

## What to edit

| File                           | Purpose                                              |
| ------------------------------ | ---------------------------------------------------- |
| `_pages/about.md`              | Homepage text, experience, and open-source work      |
| `_config.yml`                  | Site title, URL, feature switches, fonts, and width  |
| `_data/socials.yml`            | Email address and GitHub username                    |
| `assets/css/custom.css`        | Colors, typography, spacing, and mobile styling      |
| `_includes/header.liquid`      | Navigation and the native al-folio theme switch      |
| `_layouts/home.liquid`         | Homepage structure, inside al-folio's default layout |
| `_includes/head.liquid`        | al-folio's head, with the custom stylesheet appended |
| `Gemfile` and `Gemfile.lock`   | Versioned al-folio/Jekyll dependencies               |
| `.github/workflows/deploy.yml` | Build validation and GitHub Pages deployment         |

See [docs/CUSTOMIZING.md](docs/CUSTOMIZING.md) for how to make the site more distinctive or add pages, writing, projects, and publications.

## Commit and push this setup

This working directory already has the existing repository's Git history, a `main` branch, and `origin` set to `https://github.com/axmi-28/andys-website.git`. The conversion is uncommitted. **No `git init`, extra remote, force-push, or replacement repository is needed.**

Before the first push, open the repository's [Pages settings](https://github.com/axmi-28/andys-website/settings/pages) and select **Build and deployment → Source → GitHub Actions**.

```bash
cd "/Users/andyxu/Documents/alfolio website"
git status
git diff --stat
git add -A
git diff --cached --stat
git commit -m "Adapt al-folio for Andy's personal website"
git push origin main
```

`git add -A` includes the new Jekyll files and the removal of the previous Vinext/React implementation. That older implementation remains in Git history. Dependencies, generated site output, and local notes are ignored.

If GitHub has acquired newer commits since setup and rejects the push, run `git pull --rebase origin main`, resolve any reported conflicts, and retry `git push origin main`. Do not force-push.

After a successful push, check the [Actions tab](https://github.com/axmi-28/andys-website/actions). The workflow builds pull requests without deploying, and deploys pushes to `main`. The expected public URL is **https://axmi-28.github.io/andys-website/** once Pages is enabled and deployment succeeds. No personal access token needs to be added as a repository secret; the workflow uses GitHub's built-in token.

The existing `.openai/hosting.json` is retained from the previous site. This migration targets GitHub Pages; it has not changed or redeployed the earlier Sites deployment, and that metadata is excluded from Jekyll output.

## Validate changes

```bash
export PATH="$(brew --prefix ruby@3.3)/bin:$PATH"
JEKYLL_ENV=production bundle exec jekyll build --trace
bundle exec al-folio upgrade audit
bundle exec al-folio upgrade overrides audit
```

Optional formatting tools:

```bash
npm ci
npm run lint:prettier
npm run format
```

The supplied homepage text and original notes are excluded from automatic formatting. Do not edit files under `vendor/` or `_site/`: they are generated.

## Upstream and attribution

- Based on [al-folio](https://github.com/alshedivat/al-folio), starter commit `8ec1f3608d997491e0206c4e7a9368547a5ef255`, with `al_folio_core` pinned to `1.0.15`.
- [Ali Emre Narin's website repository](https://github.com/AliEmreNarin/personal-website) was the reference for adapting al-folio. Its biography and assets are not part of this site.
- al-folio's original MIT [LICENSE](LICENSE) is retained. Dependencies retain their own licenses.
