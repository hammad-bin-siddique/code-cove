# Code Cove — Developer Portfolio

A fast, fully responsive portfolio website built from scratch with vanilla HTML, CSS and JavaScript — no frameworks, no build step. Live at **[code-cove-nine.vercel.app](https://code-cove-nine.vercel.app/)**.

![Made with HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![Made with CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Made with JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)

---

## ✨ Overview

This is my personal developer portfolio, showcasing my work as a WordPress developer and web designer. Beyond the usual "about / projects / contact" pages, it includes a set of interactive tools, an AI chat assistant, and a dedicated services page — all hand coded, all optimized for speed.

## 🔹 Highlights

- **Fully responsive, dark themed design** built from scratch, with a light mode toggle
- **AI chat assistant** (Groq powered) that answers visitor questions about my work, pricing and services in real time — replies in whatever language the visitor types, including Roman Urdu
- **4 free browser based tools** built into the site: image converter, currency converter, QR code generator and a live website analyzer
- **Dedicated Services page** with 10 service categories, each with key features and a clear call to action
- **SEO optimized blog** with real, in depth articles, JSON-LD structured data and a full sitemap
- **Sub 1 second image loads** — every image converted to WebP, cutting total image weight by over 90%
- **Scroll reveal animations, infinite testimonial/services carousels, and custom cursor** — all built with plain JavaScript, no animation libraries


## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom properties for theming, Grid/Flexbox, no framework) |
| Interactivity | Vanilla JavaScript (IntersectionObserver, Canvas API) |
| Serverless backend | Vercel Functions (Node.js) |
| AI chat | Groq API (`openai/gpt-oss-20b`) |
| Forms | Web3Forms |
| Analytics | Google Analytics 4 |
| Currency data | open.er-api.com |
| QR generation | api.qrserver.com |
| Icons & fonts | Font Awesome · Google Fonts (Outfit, Poppins) |
| Hosting | Vercel |

## 📁 Folder Structure

```
Main Portfolio/
├── index.html                        # Home page
├── services.html                     # Services showcase page
├── project.html                      # Full projects gallery
├── tools.html                        # Free tools hub
├── tool-image-converter.html         # Image format converter (Canvas API)
├── tool-currency-converter.html      # Live currency converter
├── tool-qr-generator.html            # QR code generator
├── tool-website-analyzer.html        # Website speed/SEO analyzer
├── blog-*.html                       # Blog articles
│
├── css/
│   ├── global.css                    # Design tokens, resets, base styles
│   ├── main.css                      # Layout & component styles
│   └── responsive.css                # Breakpoints (tablet & mobile)
│
├── script.js                         # Shared JS: nav, theme toggle, carousels,
│                                      #   reveal animations, chat widget, forms
│
├── api/
│   ├── chat.js                       # Serverless proxy for the AI chat widget (Groq)
│   └── analyze.js                    # Serverless proxy for the Website Analyzer tool
│
├── images/
│   ├── services-images/              # Service category illustrations
│   ├── projects-images/               # Project screenshots
│   └── blog/                          # Blog cover images
│
├── sitemap.xml
├── robots.txt
└── .env.example                      # Environment variable template (no real keys)
```

> **Note:** stylesheets are loaded from the `css/` folder. The root level `main.css` / `responsive.css` are legacy files kept for reference and are not linked by any page.

## ⚙️ Environment Variables

The AI chat widget and website analyzer tool run through Vercel serverless functions to keep API keys off the client. Copy `.env.example` to `.env` and fill in:

```
GROQ_API_KEY=your_groq_api_key_here
```

Get a free key at [console.groq.com](https://console.groq.com).

## 🚀 Running Locally

This is a static site with two small serverless functions, so it's built to run on Vercel:

```bash
npm i -g vercel
vercel dev
```

For a quick static preview without the serverless functions (chat widget and analyzer tool won't work), any static server works:

```bash
npx serve .
```

## 📬 Contact

- WhatsApp: [wa.me/923173466213](https://wa.me/923173466213)
- GitHub: [@hammad-bin-siddique](https://github.com/hammad-bin-siddique)
- LinkedIn: [Hammad Siddique](https://www.linkedin.com/in/hammad-siddique-95267a324/)
- Instagram: [@cove.code](https://www.instagram.com/cove.code/)

---

If you're looking for a WordPress developer or a custom frontend web designer for your next project, my inbox is always open.

`#WebDevelopment` `#WordPressDeveloper` `#WebDesign` `#Portfolio` `#FrontendDevelopment` `#UIUX` `#FreelanceDeveloper` `#JavaScript` `#TechPortfolio` `#BuildInPublic` `#Pakistan`
