# Arun Nehra — Personal Portfolio & Interactive Cover Letter

Welcome to my personal portfolio repository. This is a fast, responsive, and modern website showcasing my software engineering work, projects, skills, and interactive resume/cover letters.

## 🚀 Live Site
The site is configured to deploy automatically via GitHub Actions to GitHub Pages.

---

## 🛠️ Technology Stack
* **Frontend:** React 19, Vanilla CSS
* **Build Tool:** Vite 8
* **Deployment:** GitHub Actions & GitHub Pages
* **Design Systems:** Modern typography, dynamic grid animations, print-ready CSS stylesheets for resume/cover letter generation

---

## 📂 Core Features
1. **Interactive Portfolio Grid:** Displays key engineering projects (including SchemaPulse, User Directory systems, and AI workflows) with tech tags and freelance/company metadata.
2. **Work Journey Timeline:** A complete interactive experience tracker detailing key roles and achievements.
3. **Print-Ready Cover Letter:** Equipped with responsive styling and a custom print stylesheet (`CoverLetterPrint.css`) optimized for standard A4/Letter PDF print/export format.
4. **CI/CD Pipeline:** Fully automated deployment to GitHub Pages via Git hooks in [.github/workflows/deploy.yml](file://./.github/workflows/deploy.yml).

---

## 💻 Local Development

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v20+ recommended).

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
To build and verify the optimized output assets locally:
```bash
npm run build
```

---

## 🚀 Deployment Config
The site runs on GitHub Pages. If your repository name is `portfolio` (hosted at `https://ArunNehra.github.io/portfolio/`), make sure to configure the `base` path in `vite.config.js` to enable correct asset resolution:

```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Replace with your repository name if different
})
```
