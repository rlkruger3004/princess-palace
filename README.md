# 👸✨ Princess Learning Palace

An interactive educational web app for pre-kindergarten children (ages 3–5), built as a single HTML file with zero dependencies.

## 🎮 Live Game
**Play it here:** `https://YOUR-GITHUB-USERNAME.github.io/princess-palace/`

---

## 🌟 What's Inside

### 📚 Learning Games (10 games)
| Game | Skills Taught |
|------|--------------|
| ➕ Math Magic | Picture addition (1–8) |
| ➖ Take Away! | Picture subtraction with visual cross-outs |
| 🔮 Patterns | AB/ABC sequence recognition |
| 🎨 Color Sort | Drag & tap to sort into color buckets |
| 🌈 Mix Colors | Color science (red + blue = purple, etc.) |
| 🔍 Odd One Out | Visual categorization & reasoning |
| 🎵 Rhyme Time | Phonemic awareness |
| 🔷 Shapes | Shape identification |
| 🔤 Letters | Letter-to-word matching |
| 🐾 Animal Sounds | Sound recognition |

### 🎮 Fun Games (4 games)
| Game | Description |
|------|-------------|
| 🔎 Find the Princess! | "Where's Waldo" style – find hidden items in a busy scene |
| ❎ Tic Tac Toe | vs. computer AI |
| 🧠 Memory Match | 8-pair card flip game |
| 🫧 Bubble Pop! | 30-second timed tapping game |

### 🏰 Castle Progress System
Earn stars ⭐ to unlock **7 levels** of Cinderella's Castle — from the moat all the way to the Princess herself!

---

## 🚀 Deploying to GitHub Pages

### Step 1 — Create the repository
1. Go to [github.com](https://github.com) and sign in
2. Click **"New repository"**
3. Name it `princess-palace` (or anything you like)
4. Set it to **Public**
5. Click **Create repository**

### Step 2 — Upload the files
**Option A — Drag & drop (easiest):**
1. On the repository page, click **"uploading an existing file"**
2. Drag `index.html` and `README.md` into the upload area
3. Click **"Commit changes"**

**Option B — Git command line:**
```bash
git init
git add .
git commit -m "Princess Palace launch 👸"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/princess-palace.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repository → **Settings** → **Pages** (left sidebar)
2. Under **"Source"**, select **"Deploy from a branch"**
3. Choose branch: `main`, folder: `/ (root)`
4. Click **Save**
5. Wait ~60 seconds, then visit:
   `https://YOUR-GITHUB-USERNAME.github.io/princess-palace/`

---

## 📱 Amazon Fire Tablet Setup

### Playing in the browser
1. Open the **Silk browser** on the Fire tablet
2. Go to: `https://YOUR-GITHUB-USERNAME.github.io/princess-palace/`
3. Tap the **menu (⋮)** → **"Add to Home Screen"** for quick access

### Recommended Fire tablet settings
- **Orientation:** Works in both portrait and landscape — landscape recommended
- **Brightness:** Set to comfortable level for child
- **Parental controls:** The game has no ads, no links, no external navigation
- **WiFi:** Required to load (for fonts from Google). Game logic works offline once loaded.

### Tip: Bookmark it!
In Silk browser, tap ☆ to bookmark the page so your daughter can tap it directly from the browser homepage.

---

## 🛠 Technical Notes

- **Zero dependencies** — pure HTML, CSS, and vanilla JavaScript
- **Single file** — everything is in `index.html`
- **~72 KB** total size — loads fast even on slower connections
- **Tested for:** Chromium-based browsers, Amazon Silk (Fire HD 8/10, 2019+)
- **Fonts:** Fredoka One + Nunito loaded from Google Fonts (falls back to Trebuchet MS / Arial if offline)
- **No data collected** — no analytics, no cookies, no external requests except fonts

---

## 🎨 Customization

To change the point thresholds for castle levels, edit the `LEVELS` array in the `<script>` section of `index.html`:

```javascript
const LEVELS = [
  { n:'Moat & Gate',    e:'🌊', pts:0,   msg:'...' },
  { n:'Castle Walls',   e:'🧱', pts:25,  msg:'...' },
  // etc.
];
```

---

*Made with 💜 for little princesses everywhere!*
