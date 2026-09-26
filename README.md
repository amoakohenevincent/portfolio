# Vince.dev — Personal Portfolio

The personal portfolio of **Amoakohene Vincent**, a full-stack developer and Information Technology Education scholar based in Kumasi, Ghana.

The site presents selected projects, technical skills, education, leadership experience, and ways to get in touch.

## Live site

- **Website:** [https://vince.is-a.dev](https://vince.is-a.dev)
- **GitHub Pages:** [https://amoakohenevincent.github.io/portfolio/](https://amoakohenevincent.github.io/portfolio/)
- **GitHub:** [amoakohenevincent](https://github.com/amoakohenevincent)
- **LinkedIn:** [Vincent Amoakohene](https://www.linkedin.com/in/vincent-amoakohene-b54a24437)

## Features

- Responsive portfolio experience for desktop and mobile
- Project listings with individual project detail pages
- Sections for skills, services, education, leadership, and contact information
- Downloadable résumé
- Direct email, LinkedIn, GitHub, and WhatsApp links
- GitHub Pages deployment with route entry points for project pages
- HTTPS enforcement, Content Security Policy metadata, Referrer Policy metadata, and a `security.txt` contact file

## Technology

- React
- Vite
- React Router
- Tailwind CSS
- Framer Motion
- Lucide React
- GitHub Pages and GitHub Actions

## Run locally

### Serve the published static site

The local server serves files from `public/`, which is also the source used by the GitHub Pages deployment workflow.

```bash
npm install
npm start
```

Then open [http://localhost:5173](http://localhost:5173).

### Build the React source

The repository also contains the React/Vite source under `src/`. Build it with:

```bash
npm install
npm run build
```

Vite writes its output to `dist/`. The current Pages workflow publishes `public/` rather than this Vite build.

## Repository structure

```text
.
├── .github/workflows/deploy.yml  # GitHub Pages deployment
├── public/                       # Published site, assets, and résumé
├── src/                          # React/Vite application source
├── dev-server.cjs                # Local server for public/
├── index.html                    # Vite application entry point
└── package.json
```

## Deployment

Pushing to `main` triggers the **Deploy to GitHub Pages** workflow. It prepares the static site from `public/`, adds the route entry points required by GitHub Pages, and deploys the result.

The custom domain is configured in the repository's GitHub Pages settings. To update the deployed portfolio, edit the files under `public/` and push the changes to `main`.

## Contact

- **Email:** [amoakohenevincent4148@gmail.com](mailto:amoakohenevincent4148@gmail.com)
- **Location:** Kumasi, Ashanti Region, Ghana
