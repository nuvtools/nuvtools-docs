# Nuv Tools Framework docs

Source of **[docs.nuvtools.com](https://docs.nuvtools.com/)**, the documentation of the
[Nuv Tools Framework](https://nuvtools.com/framework/): the open source .NET libraries published on
[NuGet](https://www.nuget.org/profiles/NuvTools).

The site is built with [docfx](https://dotnet.github.io/docfx) and its *modern* template, styled after
nuvtools.com, with diagrams written in [Mermaid](https://mermaid.js.org/).

## What is in the site

| Section | Content | Where it comes from |
| --- | --- | --- |
| Home | Landing page with the eight areas | `index.md` (by hand) |
| Getting started | Installation, registering a provider, the result pattern, versions | `articles/getting-started.md` (by hand) |
| Architecture | Areas, contracts and providers, a request through the stack | `articles/architecture.md` (by hand) |
| Guides | One overview per area (package table and dependency diagram), then each repository's README and `docs/*.md` | `guides/` (generated) |
| API reference | Every public type of the published packages, for .NET 10 | `api/` (generated) |

## Repository layout

```text
nuvtools-docs/
├── index.md              landing page
├── toc.yml               top navigation
├── articles/             getting started and architecture
├── guides/               generated: area overviews and the repositories' READMEs
├── api/                  generated: API metadata (YAML) and the API overview page
├── images/               logo and favicon
├── template/public/      main.css (the nuvtools.com look) and main.js (header links, diagram colors)
├── tools/generate.py     writes docfx.json, guides/ and api/toc.yml + api/index.md
├── docfx.json            generated docfx configuration
└── _site/                the built site, committed and published as it is
```

Files under `guides/`, `api/` and `docfx.json` are overwritten by `tools/generate.py`. Change the
`AREAS` table in the script, or the README of the package's own repository, instead of editing them.

## Building

### Prerequisites

- .NET SDK 10
- Python 3.10 or later
- docfx: `dotnet tool install -g docfx`
- The Framework repositories cloned next to this one, since the API reference and the guides are
  read from their sources:

```text
Framework/
├── nuvtools-docs/
├── nuvtools-aspnetcore/
├── nuvtools-blockchain/
├── nuvtools-common/
├── nuvtools-data/
├── nuvtools-notification/
├── nuvtools-payment/
├── nuvtools-report/
├── nuvtools-resources/
├── nuvtools-security/
├── nuvtools-security-identity/
├── nuvtools-storage/
└── nuvtools-validation/
```

### Steps

From this folder:

```bash
# 1. docfx.json, area pages, guides and tables of contents
python tools/generate.py

# 2. API metadata from the projects (net10.0) into api/<area>/
docfx metadata docfx.json

# 3. The site into _site/, served on http://localhost:8080
docfx build docfx.json --serve
```

When a project is removed or renamed, delete `api/` and `_site/` before steps 2 and 3, so its old
pages do not stay in the site.

## Publishing

Commit the regenerated files together with `_site/` and push to `main`. The
[Deploy static content to Pages](.github/workflows/static.yml) workflow publishes `_site/` to
GitHub Pages, served at docs.nuvtools.com.

## Adding a package or an area

1. Publish the package from its repository, with a `<Description>` in its `.csproj` (it becomes the
   package's line in the area table) and a README that explains how to use it.
2. If it lives in a repository the docs do not read yet, add that repository to its area in the
   `AREAS` table of `tools/generate.py`, or add a new area there.
3. Run the three build steps, check the area page and its diagram, and publish.

Projects that are in source but not on NuGet stay out of the docs through the `UNPUBLISHED` list in
the same script.

## Look and diagrams

- `template/public/main.css` applies the nuvtools.com palette, the Plus Jakarta Sans font (served from
  `template/public/fonts`, under the SIL Open Font License), pill buttons and heading rules, in light
  and dark themes.
- `template/public/main.js` sets the header icon links and the Mermaid theme colors.
- Diagrams are ` ```mermaid ` code blocks in any Markdown page; the area diagrams are generated from
  each project's references.
