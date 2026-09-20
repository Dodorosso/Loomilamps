# 💡 Loomilamps — Upcycled Space-Age Lighting

Welcome to **Loomilamps**, a modern, high-end single-page e-commerce website showcasing handcrafted, retro-futuristic lamps. Loomilamps merges precision 3D-printing with rescued daily readymade objects (upcycling) to create unique, nostalgic pop lighting.

---

## 🎨 Design System & Aesthetic Guidelines

- **Base Theme:** Modern 1960s Pop / Space-Age aesthetic with a friendly, cartoonish, and tactile paper-cutout feel.
- **Global Canvas:** A very calm and warm buttery light yellow (`#fffbe8`).
- **Tactile Cardboard Texture:** Selective high-fidelity corrugated line rendering and SVG procedural fiber-grain noise restricted *specifically* to the product cards (ensuring zero wide-viewport repeating/tiling patterns).
- **Block Structure:** Thick, uniform solid borders with prominent, offset hard drop-shadows (no blurs or gradients) to make components look like layered chunks of heavy colored paper.
- **Typography:**
  - **Headings & Accents:** Playful, rounded, and expressive bold headers carrying a striking high-contrast soft pink drop-shadow (`var(--color-pink)`).
  - **Body & Technical Text:** Clean, geometric sans-serif stack (`Plus Jakarta Sans` / `Inter`) for absolute legibility.

---

## 📂 Project Structure

- `index.html` — The main single-page e-commerce storefront (Hero, Porthole CSS-lamp illustration, Product Showcase, Philosophy, and Contact form).
- `product-loom1.html` — Detailed product specs, story, care guides, and interactive CSS photo-gallery for the flagship **Loom1** lamp.
- `style.css` — Core responsive styling, custom design tokens, animations, and the pure-CSS space-age lamp illustrations.
- `script.js` — Core interactions (floating navigation bar, porthole parallax hover effect, detail gallery tab-switching, and reactive form feedback).
- `versions/` — Standalone historical snapshots of our previous design iterations (`v1` to `v4`) for easy rollbacks and visual comparisons.

---

## 🚀 How to Publish to GitHub Pages

We have pre-configured a **GitHub Actions CI/CD pipeline** inside `.github/workflows/static.yml`. This workflow will automatically deploy your static files to GitHub Pages as soon as you push your code to GitHub.

To launch your website live in 30 seconds, follow these simple steps:

### Step 1: Create a Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Enter the repository name: `Loomilamps`.
3. Set the repository to **Public** (required for free GitHub Pages).
4. Leave "Add a README", "Add .gitignore", and "Choose a license" **unchecked** (since we already have local files).
5. Click **Create repository**.

### Step 2: Push your local code to GitHub
Open your terminal (PowerShell or Command Prompt) in the project folder and run the following commands (replace `your-username` with your real GitHub username):

```bash
# 1. Add your new GitHub repository as the remote
git remote add origin https://github.com/your-username/Loomilamps.git

# 2. Push your files up to the main branch
git push -u origin main -f
```

### Step 3: Enable GitHub Actions for Pages (if needed)
Once pushed, GitHub Actions will automatically start building.
1. In your GitHub repository, go to **Settings** (top navigation tab).
2. Click **Pages** in the left sidebar (under "Code and automation").
3. Under **Build and deployment** -> **Source**, select **GitHub Actions** from the dropdown menu (instead of "Deploy from a branch").
4. Go to the **Actions** tab to see your deployment progress. Within ~30 seconds, your site will be live at `https://your-username.github.io/Loomilamps/`!

---

## 🛠️ Offline Preview & Visual Comparison
You can open `index.html` directly in any web browser to preview the live site. To explore and compare earlier stages of our design system, simply navigate to the `versions/` folder and open the `index.html` file inside any iteration:
- `versions/v1-kraft-bg-green-shadow/` — Saturated kraft paper aesthetic with deep-ink shadows.
- `versions/v2-white-cardboard-no-shadow/` — Clean paper experiment with flat headers.
- `versions/v3-white-bg-no-pattern-colored-shadows/` — Flat off-white canvas with contrasting colored accents.
- `versions/v4-light-yellow-bg-cardboard-cards-pink-shadows/` — The current elegant, high-contrast buttery yellow build with cardboard-textured product cards.

---

*Handcrafted in 2026 by Loomilamps. All rights re-wired.* 💡
