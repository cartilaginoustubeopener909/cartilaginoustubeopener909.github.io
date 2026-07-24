# Vedran Ilievski — Portfolio

A personal software-engineering portfolio built to present my professional experience, technical background, active work, and completed projects in one focused, interactive website.

The site is built with [Astro](https://astro.build/) and exported as a static site for GitHub Pages.

## Highlights

- Responsive hero containing career details, skills, and current focus
- Canvas-rendered sorting visualization used as the page background
- Multiple randomized sorting patterns, including a legacy one-by-one bubble sort
- Scroll-driven work and project timeline with animated spine branches
- Dedicated cards for active, public, and proprietary projects
- Project archive covering finished, paused, and cancelled work
- Direct email, phone, GitHub, and LinkedIn contact options
- Build-time “Last updated” timestamp
- Reduced-motion support and inactive-window animation pausing
- Static output with no application server required in production

## Technology

- [Astro 7](https://astro.build/)
- TypeScript
- Semantic HTML
- Modern CSS
- Canvas 2D
- GitHub Pages

No client-side framework is required. Astro generates static HTML, CSS, and JavaScript assets in `dist/`.

## Project structure

```text
.
├── .vscode/
│   ├── launch.json
│   └── tasks.json
├── public/
│   └── styles.css
├── src/
│   ├── components/
│   │   └── SortingBackground.astro
│   └── pages/
│       ├── index.astro
│       └── projects/
│           ├── index.astro
│           └── [slug].astro
├── astro.config.mjs
└── package.json
```

## Local development

Requirements:

- Node.js 22.12 or newer
- npm

Install the dependencies:

```sh
npm install
```

Start Astro in background mode:

```sh
npm run dev -- --background
```

Then visit [http://localhost:4321](http://localhost:4321).

The development server can be managed with:

```sh
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

VS Code users can press `F5` and select **Portfolio: Astro + Edge**. The included launch configuration starts Astro and opens the site through the Edge debugger.

> Do not open `dist/index.html` directly using a `file://` URL. Browsers block the generated JavaScript modules in that context. Use the development server or an HTTP preview server.

## Production build

Generate the static production site:

```sh
npm run build
```

The output is written to `dist/`.

Preview the production output over HTTP:

```sh
npm run preview
```

## GitHub Pages

The generated `dist/` directory can be deployed directly to GitHub Pages.

For a repository site hosted below `https://username.github.io/repository-name/`, configure Astro’s `site` and `base` options in `astro.config.mjs` before deployment:

```js
export default defineConfig({
  site: 'https://username.github.io',
  base: '/repository-name',
});
```

For a user site such as `https://username.github.io/` or a custom domain served from the root, no repository subpath is required.

## Sorting visualization

The animated background is implemented in `src/components/SortingBackground.astro`. Each cycle:

1. Generates a randomized, capacity-safe stack distribution.
2. Animates the grid being filled.
3. Selects a sorting pattern at random.
4. Moves one cube per rendered sorting step.
5. Finishes as an ascending staircase.

The current runtime state is available on the canvas through:

```js
const canvas = document.querySelector('.sorting-background');

console.log(canvas.dataset.sortAlgorithm);
console.log(canvas.dataset.sortStatus);
console.log(canvas.dataset.sortMoves);
```

Diagnostic messages use the `[SortingBackground]` prefix in the browser console.

## Contact

- Email: [ilievskivedran@yahoo.com](mailto:ilievskivedran@yahoo.com)
- GitHub: [githubdood21](https://github.com/githubdood21)
- LinkedIn: [vedran-ilievski](https://www.linkedin.com/in/vedran-ilievski/)

## Ownership

Portfolio content, project descriptions, branding, and proprietary project materials belong to Vedran Ilievski unless otherwise noted. Individual linked repositories retain their own licenses.
