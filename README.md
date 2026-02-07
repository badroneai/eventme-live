# EventMe

Interactive event timeline — shows attendees what's happening **NOW**, what's **NEXT**, and what's **DONE**.

## File Structure

```
/
├── index.html              # Landing page
├── 404.html                # Custom 404
├── robots.txt              # Search engine directives
├── timeline/
│   └── index.html          # Demo timeline page
├── assets/
│   ├── styles.css          # All styles (RTL-ready)
│   ├── app.js              # Application logic
│   ├── i18n.js             # Bilingual dictionary (AR/EN)
│   ├── data.js             # Sample event data
│   ├── favicon.svg         # Favicon
│   ├── og.png              # Open Graph image
│   └── site.webmanifest    # Web app manifest
└── README.md
```

## Run Locally

**Option 1 — Direct file open:**
Open `index.html` in a browser. Note: root-relative paths (`/assets/...`) require a local server.

**Option 2 — Local server (recommended):**

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve .

# Then open http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a GitHub repository (e.g., `eventme-site`).
2. Push all files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial EventMe site"
   git remote add origin https://github.com/YOUR_USERNAME/eventme-site.git
   git push -u origin main
   ```
3. Go to **Settings → Pages** in your repository.
4. Under **Source**, select `main` branch, root `/`, and click **Save**.
5. Your site will be live at `https://YOUR_USERNAME.github.io/eventme-site/`.

## Set Custom Domain: eventme.live

### DNS Configuration

Add these DNS records at your domain registrar (e.g., Cloudflare, Namecheap):

**A Records (for apex domain `eventme.live`):**

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**CNAME Record (for `www.eventme.live`):**

| Type | Name | Value |
|------|------|-------|
| CNAME | www | YOUR_USERNAME.github.io |

### GitHub Pages Configuration

1. Go to **Settings → Pages**.
2. Under **Custom domain**, enter `eventme.live` and click **Save**.
3. GitHub will create a `CNAME` file automatically.
4. Check **Enforce HTTPS** (may take a few minutes for SSL provisioning).

### Notes

- SSL certificate provisioning can take up to 24 hours.
- Both `eventme.live` and `www.eventme.live` will work after DNS propagation.
- The `CNAME` file created by GitHub should contain only `eventme.live`.

## Bilingual Support

- Default language is detected from the browser (`ar` prefix → Arabic, else English).
- Language choice is persisted in `localStorage`.
- Toggle via the language button in the header.
- All strings are managed in `/assets/i18n.js`.

## Timeline Demo

The timeline at `/timeline/` uses dynamically generated session times relative to the current time, so there will always be NOW, NEXT, and DONE sessions visible. Times are calculated in the **Asia/Riyadh (UTC+3)** timezone.
