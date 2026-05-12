# William "Liam" Lokaisingh Portfolio

Personal portfolio for William "Liam" Lokaisingh, a full-stack developer focused on reliable backend systems, polished frontend experiences, test coverage, and practical product delivery.

The site is built as a lightweight static portfolio and deployed with GitHub Pages.

## Live Site

https://llokai.github.io

## Highlights

- Animated hero section with resume-aligned impact metrics
- Project showcase featuring full-stack apps, automation tools, and capstone work
- Experience timeline for Cloud2 Software, Sheridan College, and HSRA
- Skills section covering Java, Spring Boot, React, TypeScript, Python, SQL, CI/CD, testing, and cloud platforms
- Responsive layout with scroll reveals, hover interactions, animated counters, and mobile navigation
- Static HTML/CSS/JavaScript deployment compatible with GitHub Pages

## Featured Projects

- **FindIT - Indoor Navigation Platform**: Capstone project built with Spring Boot, React, SQL, and REST APIs.
- **Job Tracker App**: React, Express, and PostgreSQL full-stack job application tracker.
- **Google Forms Quiz Builder**: Google Apps Script automation for Forms quizzes and Classroom posting.
- **SpeakingBuddy**: Pronunciation trainer using recording workflows and Praat acoustic analysis.
- **BookReviews Application**: Spring Boot and Thymeleaf app with authentication, authorization, CRUD, and REST APIs.
- **Sanskrit Assets Dashboard**: React/Vite dashboard for managing GitHub-backed flashcard assets and metadata.

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
