# Research Consent Page

Static consent page for CSU Protocol #8482. "I agree" redirects to the study app (`STUDY_URL` in `script.js`); "I don't want to be in this study" shows a thank-you message.

No build step. To preview locally, open `index.html` in a browser.

## Deploy to Vercel

- **CLI:** run `vercel` in this folder (then `vercel --prod`).
- **Git:** push this repo to GitHub, then import it at vercel.com/new. Framework preset: "Other", no build command, output directory left blank.
