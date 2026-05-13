# William "Liam" Lokaisingh Portfolio

Personal portfolio for William "Liam" Lokaisingh, a full-stack developer focused on reliable backend systems, polished frontend experiences, test coverage, and practical product delivery.

The site is built as a lightweight static portfolio and deployed with GitHub Pages.

## Live Site

https://llokai.github.io

## Highlights

- Animated hero section with resume-aligned impact metrics
- Project showcase featuring current full-stack apps, AI tooling, automation, and capstone work
- Experience timeline for Cloud2 Software, Sheridan College, and HSRA
- Skills section covering Java, Spring Boot, React, TypeScript, Python, SQL, CI/CD, testing, and cloud platforms
- Responsive layout with scroll reveals, hover interactions, animated counters, and mobile navigation
- Static HTML/CSS/JavaScript deployment compatible with GitHub Pages

## Featured Projects

- **ShelfAware**: Spring Boot and React reading journal with JWT auth, Open Library import, PostgreSQL/Flyway persistence, and reading analytics.
- **FindIT - Indoor Navigation Platform**: Capstone project built with Spring Boot, React, SQL, and REST APIs.
- **RAG Codebase Assistant**: Local Python RAG chatbot for codebase and documentation Q&A using Ollama and Weaviate.
- **Image Hosting Solution**: React and Express dashboard for GitHub-backed image/audio asset management.
- **Job Tracker App**: React, Express, and PostgreSQL full-stack job application tracker.
- **Google Forms Quiz Builder**: Google Apps Script automation for Forms quizzes, scoring, and shareable student links.

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Boxicons
- Google Fonts
- GitHub Pages

## Project Structure

```text
.
|-- assets/
|   `-- Resume_WilliamLokaisingh.pdf
|-- css/
|   `-- styles.css
|-- images/
|   `-- profile and technology images
|-- js/
|   `-- script.js
|-- index.html
`-- README.md
```

## Run Locally

Because this is a static site, you can open `index.html` directly in a browser.

For a local server, use any simple static server, for example:

```powershell
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Deploy

This repository is designed for GitHub Pages. After making changes:

```powershell
git add .
git commit -m "Update portfolio"
git push origin main
```

GitHub Pages will redeploy from the configured branch.

## Customization Notes

- Update portfolio content in `index.html`.
- Adjust colors, layout, animations, and responsive behavior in `css/styles.css`.
- Update menu, counters, scroll progress, reveal animations, and tilt interactions in `js/script.js`.
- Replace the resume at `assets/Resume_WilliamLokaisingh.pdf`.
