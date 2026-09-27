# Publishing essays and notes

Your blog lives at **https://axmi-28.github.io/blog/**. The homepage links to it beside your contact details. Published posts appear automatically, newest first. There are no sample essays on the live site.

## Write an essay locally

1. Copy the template into `_posts/`, using a filename of the form `YYYY-MM-DD-short-title.md`:

   ```bash
   cp docs/templates/essay.md _posts/2026-09-26-my-first-essay.md
   ```

2. Open the new file in VS Code. Replace the title, summary, and example text. Use the actual publication date in the filename. The header looks like this:

   ```yaml
   ---
   layout: essay
   title: "My first essay"
   description: "A short description for the blog index."
   published: false
   ---
   ```

   Write your essay after the second `---`. Do not repeat its title as an `# H1`; the layout already renders it. `## Section heading`, `**bold**`, `*italics*`, `[link text](https://example.com)`, and ordinary paragraphs all work. The summary is optional.

3. Preview unpublished posts locally:

   ```bash
   ./bin/serve --unpublished
   ```

   Open **http://127.0.0.1:4000/blog/**. Stop the server with Ctrl+C before starting another preview. If you use a future date, also add `--future` to preview it.

4. When ready, change `published: false` to `published: true`, save, and publish:

   ```bash
   git add _posts/
   git commit -m "Publish my first essay"
   git push origin main
   ```

   GitHub Actions rebuilds the blog, article pages, sitemap, and RSS feed. The example filename becomes **https://axmi-28.github.io/blog/2026/my-first-essay/**. Keep the filename stable after sharing a link; changing the year or slug changes the URL.

## Publish through GitHub without a terminal

Open [the `_posts` folder](https://github.com/axmi-28/axmi-28.github.io/tree/main/_posts), choose **Add file → Create new file**, and name the file `YYYY-MM-DD-short-title.md`. Paste the header and your essay, set `published: true`, then commit to `main`. You can also use **Upload files** for a Markdown file you already prepared with that filename and header. Deployment runs automatically after the commit.

## Upload an existing PDF

1. Put the PDF in `assets/pdf/`, for example `assets/pdf/my-essay.pdf`. You can create that folder locally or upload the file through GitHub.
2. Create a short Markdown post in `_posts/` with a title, a summary, and the PDF path in its header:

   ```yaml
   ---
   layout: essay
   title: "My essay"
   description: "What this essay is about."
   published: true
   pdf: /assets/pdf/my-essay.pdf
   ---
   ```

   Add a short introduction below the header if you want. The article automatically displays a **Read the PDF →** link, and the essay appears on the blog index. The PDF alone does not create a blog entry.

3. Commit both files:

   ```bash
   git add _posts/ assets/pdf/
   git commit -m "Publish essay and PDF"
   git push origin main
   ```

For Word or Google Docs essays, either copy the text into Markdown or export a PDF and follow the steps above. This site does not automatically convert `.docx` files.

## Images, code, and links

Put images in `assets/img/` and reference them with alt text:

```liquid
![Description of the figure]({{ '/assets/img/your-figure.png' | relative_url }})
```

Use fenced code blocks with a language name for code examples. Use `relative_url` for site-local downloads and links:

```liquid
[Download accompanying notes]({{ '/assets/pdf/notes.pdf' | relative_url }})
```

## Drafts and dates

- `published: false` hides a post from the generated website, blog index, and RSS feed. It does **not** make the Markdown private: this repository is public. Keep private unfinished writing outside Git, or in a local folder excluded by Git, until ready to share its source.
- Future-dated posts are omitted from ordinary builds. There is no scheduled publishing job: run the deployment workflow or push a change after the date arrives.
- A normal `./bin/serve` preview matches the published site; `--unpublished` is for reviewing unfinished posts.
- The template stays in the excluded `docs/` folder, so it never becomes an essay itself.

This uses Jekyll's standard [post format](https://jekyllrb.com/docs/posts/) and [published setting](https://jekyllrb.com/docs/front-matter/), with your site's custom `essay` layout.
