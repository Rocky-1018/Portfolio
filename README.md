# Prashanth Bethi — Portfolio

A single-page portfolio site. No build tools, no dependencies — just HTML, CSS, and JavaScript, so it runs anywhere and costs nothing to host.

## View it locally

Just double-click `index.html` to open it in your browser, or run a local server (recommended, avoids browser file-access quirks):

```bash
# from the portfolio/ folder
python -m http.server 8080
# then open http://localhost:8080
```

## Adding a new project (your "upload" workspace)

Open `assets/js/projects-data.js`. Copy the template comment at the top, paste it as a new entry in the `PROJECTS` array, and fill in your details — title, description, tech stack, links, etc. Save the file and refresh the page; the new project card appears automatically. No other code needs to change.

If you want a screenshot on a card, drop the image in `assets/images/projects/` and point `image` at it (e.g. `"assets/images/projects/my-app.png"`).

## Adding a certification or course

Open `assets/js/certifications-data.js`. Copy the template comment at the top, paste it as a new entry in the `CERTIFICATIONS` array, and fill in the title, provider, status (`"In Progress"` or `"Completed"`), period, and an optional credential link. Save and refresh — it appears in the Certifications & Courses section automatically. Replace the placeholder entry that ships in that file with your real ones.

## Deploying for free

Any static host works. Easiest options:

- **GitHub Pages**: push this folder to a GitHub repo, enable Pages in repo settings, point it at the root.
- **Netlify / Vercel**: drag-and-drop the `portfolio` folder into their dashboard, or connect the GitHub repo — auto-deploys on every push.

## Structure

```
portfolio/
├── index.html                  # all page content/sections
├── assets/
│   ├── css/style.css           # all styling
│   ├── js/main.js              # rendering + interactions
│   ├── js/projects-data.js     # <- edit this to add/update projects
│   ├── js/certifications-data.js # <- edit this to add/update certifications
│   └── images/projects/        # project screenshots go here
└── README.md
```
