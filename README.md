# Westwood Institute Website

This is a static public website for Westwood Institute for Anxiety Disorders.

## Run Locally

```bash
npm install
npm run dev
```

## Contact Form

The contact form is prepared for Formspree without redirecting visitors away from the website.

In `src/main.js`, replace:

```js
https://formspree.io/f/YOUR_FORM_ID
```

with the Formspree endpoint from the Formspree form settings.

After submission, the page shows a thank-you message with buttons to Research and Educational Resources.

## Publish

Build the static site:

```bash
npm run build
```

The deployable website will be in the `dist` folder.
