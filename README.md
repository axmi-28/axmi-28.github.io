# Andy's website

A personal site built with the real [al-folio](https://github.com/alshedivat/al-folio) v1 Jekyll starter and its pinned `al_folio_core` runtime. It includes a custom homepage, light/dark/system themes, responsive navigation, contact links, metadata, a sitemap, and a 404 page.

The content in `_pages/about.md` preserves the wording supplied in `me.MD`, including capitalization, grammar, and visible URLs. Only formatting has changed. The local notes file is untouched, ignored by Git, and excluded from the public site. The older `personalwebsite.MD` is retained from the existing repository as a reference and is also excluded from the public site.

## Preview locally

Ruby 3.3.12 and the gems have been installed on the Mac used for setup. From this folder:

```bash
./bin/serve
```

Open **http://127.0.0.1:4000/**. Keep that terminal open; press Ctrl+C to stop. Content and CSS edits rebuild automatically. Restart after changing `_config.yml`.

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

## GitHub Pages at your personal address

The site is configured for **https://axmi-28.github.io/**. Visiting **https://axmi-28.github.io/index.html** serves the same homepage. A root user site requires a repository named **`axmi-28.github.io`**, with these settings:

```yaml
url: https://axmi-28.github.io
baseurl: ""
```

The original deployment from `andys-website` built successfully but failed in the deploy job because Pages was not enabled. The original repository is private and the account uses GitHub Free; Pages on that plan requires a public repository.

### Repository and deployment

The repository has been renamed to **[axmi-28/axmi-28.github.io](https://github.com/axmi-28/axmi-28.github.io)** and made public with Andy's approval. The existing Git history is preserved, and the local `origin` points to the new URL. The earlier `andys-website` repository URL redirects to the renamed repository.

The [Pages publishing source](https://github.com/axmi-28/axmi-28.github.io/settings/pages) is **GitHub Actions**. Do not switch to branch-based Jekyll publishing; this al-folio setup needs its custom build workflow. No custom domain, paid host, or additional repository secret is needed.

Watch the [Actions tab](https://github.com/axmi-28/axmi-28.github.io/actions) after pushing changes. The workflow builds pull requests without deploying and publishes pushes to `main`. Share **https://axmi-28.github.io/** after a successful deployment.

Dependencies, generated output, and local `me.MD` notes remain ignored by Git. The older tracked `personalwebsite.MD` remains in the public repository and its history but is excluded from the generated website.

### Future updates

Edit your homepage or styles, preview locally with `./bin/serve`, and then:

```bash
git add -A
git commit -m "Update personal website"
git push origin main
```

GitHub Actions rebuilds and publishes the update automatically. If GitHub has newer commits and rejects a push, run `git pull --rebase origin main`, resolve any reported conflicts, and retry. Do not force-push.

The existing `.openai/hosting.json` is retained from the earlier site and excluded from Jekyll output. GitHub Pages is this site's deployment target; the earlier Sites deployment is not involved.

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
