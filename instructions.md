How docs.nuvtools.com is built

The site is generated locally and the built `_site` folder is committed; a push to `main` runs the
"Deploy static content to Pages" workflow, which publishes `_site` as it is.

Prerequisites

- The Framework repositories checked out next to this one (`../nuvtools-common`, `../nuvtools-data`, ...).
- docfx: `dotnet tool install -g docfx`

Steps, from this folder

1. `python tools/generate.py`
   Rewrites docfx.json, the area pages and tables of contents under `guides/` and `api/toc.yml`,
   and copies each repository's README.md and docs/*.md into `guides/`. Edit the AREAS table in
   the script to add a package or an area; never edit the generated files by hand.
2. `docfx metadata docfx.json`
   Builds the API reference (net10.0) from the projects into `api/<area>/`.
3. `docfx build docfx.json --serve`
   Builds `_site` and serves it on http://localhost:8080 to check before committing.

Written by hand: `index.md` (landing page), `articles/` (getting started, architecture),
`template/public/main.css` and `main.js` (the nuvtools.com look and the diagram colors).
Diagrams are Mermaid code blocks, rendered by docfx's modern template.

When a project is removed or renamed, delete `api/` and `_site/` before steps 2 and 3 so its old
pages do not linger.
