# Maimuna Rahman: Personal Website

The portfolio site of a 2nd-year Applied Statistics and Data Science student at the Institute of Applied Statistics and Data Science (IASDS), University of Dhaka. It collects my projects, my coursework, and the study notes I write for my courses.

**Live site:** [its-maimuna-rahman.github.io](https://its-maimuna-rahman.github.io)

---

## What's on the site

| Page | What you'll find |
| --- | --- |
| **Home** (`index.html`) | Intro, projects, a coursework explorer, an interactive look at how statistics underlies ML and LLMs, and contact links |
| **Academics** (`academics.html`) | The full 140-credit curriculum, year by year, with expandable course cards listing what each course covers |
| **Resources** (`resources.html`) | My course notes and interactive pages, organised by course |

## Interactive pieces

- **Coursework explorer.** Pick a year of the degree, then browse its courses. Each course is tagged as Statistics, Computing, Math, or Other, and selecting one shows what it covers and its credits.
- **Statistics as the base.** Pick a statistical idea and see how it shows up in data science, machine learning, and LLMs.
- **Light and dark mode.** Follows your system setting by default. The toggle remembers your choice and applies it on every page.

## Resources so far

Notes and interactive pages for 2nd-year courses:

- **Sampling Distributions:** probability distributions
- **Statistical Inference I:** point estimation, interval estimation, Bayesian statistics
- **Design and Analysis of Experiments I:** one-way ANOVA and single-factor experiments
- **Sampling Methods I:** SRS estimation, stratified sampling
- **Mathematical Methods:** Laplace and Fourier transformations
- **R courses:** practice code lives in the [practice-codes](https://github.com/its-maimuna-rahman/practice-codes) repository

More courses get added as I go.

## Built with

- Plain **HTML, CSS, and vanilla JavaScript**. No framework, no build step, no dependencies.
- Fonts from Google Fonts: Carlito, Radley, and Playfair Display.
- Hosted on **GitHub Pages**.

The colors are CSS variables at the top of each page, with a warm paper palette for light mode and a dark brown palette for dark mode.

## Run it locally

```bash
git clone https://github.com/its-maimuna-rahman/its-maimuna-rahman.github.io.git
cd its-maimuna-rahman.github.io
python -m http.server 8000
```

Then open <http://localhost:8000>. You can also open `index.html` directly in a browser.

## Repository structure

```text
.
├── index.html          Home page
├── academics.html      Full curriculum
├── resources.html      Index of course notes
└── resources/          One HTML page per topic
    └── <course>_<topic>.html
```

Resource pages follow the pattern `<course number>_<topic>.html`, for example `203_bayesian_statistics.html`.

### Adding a new resource

1. Add the page to `resources/`.
2. Add a link to it under the right course in `resources.html`.

## Links

- GitHub: [@its-maimuna-rahman](https://github.com/its-maimuna-rahman)
- Website: [its-maimuna-rahman.github.io](https://its-maimuna-rahman.github.io)
