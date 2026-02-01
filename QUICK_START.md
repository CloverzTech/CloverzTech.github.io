# 🚀 QUICK START GUIDE - 5 MINUTES

Panduan cepat untuk mulai menggunakan website CloverTech.

---

## ⏱️ 5 MENIT SETUP

### 1️⃣ DOWNLOAD & BUKA (1 menit)

```
✅ File sudah siap di folder: d:\CloverTech Post\
✅ Cukup double-click index.html
✅ Website terbuka di browser default
```

### 2️⃣ UPDATE KONTAK ANDA (2 menit)

Buka `index.html` dengan text editor (VS Code / Notepad):

```html
🔴 CARI & GANTI:
62xxxxxxxxxx  →  6281234567890 (nomor WhatsApp Anda)
info@clovertech.com  →  email@anda.com
Jl. Teknologi No. 123  →  Alamat Anda
```

**Lokasi penting:**
- Line ~450: WhatsApp button
- Line ~800: Contact form
- Line ~900-1000: Address & maps
- Line ~1100: Footer links

### 3️⃣ TEST DI BROWSER (1 menit)

```
✅ Dark mode: Click moon icon
✅ Booking: Isi form & submit ke WhatsApp
✅ Mobile: Resize window untuk test responsif
✅ Links: Click semua tombol & links
```

### 4️⃣ DEPLOY KE GITHUB PAGES (1 menit)

```bash
# Buka Terminal/PowerShell di folder project

git init
git add .
git commit -m "CloverTech website"
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
git push -u origin main
```

**🎉 LIVE**: https://USERNAME.github.io

---

## 📝 ESSENTIAL EDITS

### Edit 1: Update WhatsApp Number
**File**: `index.html`

Find & Replace ALL instances:
```
❌ 62xxxxxxxxxx
✅ 6281234567890
```

Search for:
- Line 432: WhatsApp button
- Line 835: Contact card
- Line 1160: Footer links
- Line 1545: Booking submission
- `assets/js/booking.js` line 250

### Edit 2: Update Email
**File**: `index.html`

```html
❌ info@clovertech.com
✅ youremail@example.com
```

### Edit 3: Update Address
**File**: `index.html`

```html
❌ Jl. Teknologi No. 123, Bandung, Indonesia
✅ Jl. Alamat Anda No. XX, Kota, Indonesia
```

### Edit 4: Update Maps
**File**: `index.html` (Line ~900)

1. Buka Google Maps
2. Search alamat Anda
3. Click Share → Embed
4. Copy `<iframe>` code
5. Paste ke `index.html` di contact section

---

## 🎨 QUICK CUSTOMIZATIONS

### Change Color Theme
**File**: `assets/css/style.css` (Line 8-20)

```css
--color-primary: #2ecc71;        /* Warna hijau */
--color-secondary: #2c3e50;      /* Warna abu-abu */
--color-white: #ffffff;          /* Warna putih */
```

### Change Logo Text
**File**: `index.html` (Line ~80)

```html
❌ CloverTech
✅ Nama Bisnis Anda
```

### Add Your Photo
```
1. Create folder: assets/images/
2. Copy your photo ke folder
3. Update di HTML: <img src="assets/images/photo.jpg">
```

---

## ✅ VERIFICATION CHECKLIST

Before deploying, verify:

- [ ] WhatsApp number updated (all locations)
- [ ] Email updated
- [ ] Address updated
- [ ] All links working
- [ ] Dark mode works
- [ ] Booking form works
- [ ] Mobile responsive
- [ ] No console errors

---

## 🚀 DEPLOYMENT URLS

Choose one platform:

| Platform | URL Format | Setup Time |
|----------|-----------|-----------|
| **GitHub Pages** | https://USERNAME.github.io | 5 min ⭐ |
| **Vercel** | https://clovertech.vercel.app | 5 min |
| **Netlify** | https://clovertech.netlify.app | 3 min |
| **Cloudflare** | https://clovertech.pages.dev | 5 min |

**Recommended**: GitHub Pages (simplest)

---

## 📱 TEST RESPONSIVE

Check different screen sizes:

```
Desktop:   1920px  ✅ Full width
Tablet:    768px   ✅ 2-column layout
Mobile:    375px   ✅ Stacked layout
```

Resize browser window atau use DevTools (F12):
- Chrome: Right-click → Inspect → Toggle device toolbar

---

## 🔗 IMPORTANT FILES

| File | Purpose | Edit? |
|------|---------|-------|
| `index.html` | Main content | ✏️ YES |
| `assets/css/style.css` | Styling | ⚠️ Only colors |
| `assets/js/main.js` | Functionality | ❌ No |
| `README.md` | Documentation | ℹ️ Optional |
| `DEPLOYMENT.md` | Deploy guide | ℹ️ Reference |
| `CHECKLIST.md` | Launch checklist | ✅ Use it |

---

## 🎯 WHAT YOU GET

✅ **Complete Website with:**
- Modern, responsive design
- 10+ sections (hero, services, booking, etc)
- Dark mode toggle
- Mobile-first responsive
- Smooth animations
- WhatsApp integration
- Booking form system
- Contact & maps
- Footer with links

✅ **All code:**
- Pure HTML/CSS/JavaScript
- No frameworks needed
- No server required
- Works everywhere

✅ **Free hosting:**
- GitHub Pages
- Vercel
- Netlify
- Cloudflare
- Pick any!

✅ **Free SSL:**
- All platforms provide HTTPS
- No extra cost

---

## 💡 PRO TIPS

### Tip 1: Use VS Code
Better editor = easier edits
- Download: https://code.visualstudio.com
- Install "Live Server" extension
- Right-click → Open with Live Server
- Auto-refresh on save

### Tip 2: Test WhatsApp Link
```
https://wa.me/62xxxxxxxxxx?text=Hello%20CloverTech
```
Click to test sebelum deploy

### Tip 3: Backup Your Work
```bash
# Initialize git (even if not deploying)
git init
git add .
git commit -m "Backup 1"
```

### Tip 4: Use Browser DevTools
Press `F12` to:
- Test responsive design
- Check console for errors
- Debug JavaScript
- Edit live (temporary)

### Tip 5: Keep Original Backed Up
- Save copy before major edits
- Use version control (git)
- Test changes locally first

---

## ⚠️ COMMON MISTAKES

❌ **DON'T:**
- Edit `.js` files unless you know JavaScript
- Change folder structure
- Delete required files
- Hardcode personal data in JavaScript

✅ **DO:**
- Only edit `index.html` & CSS colors
- Keep file structure intact
- Use git for version control
- Update config variables in one place

---

## 🆘 NEED HELP?

### If Website Won't Open
```
1. Check: Did you double-click index.html?
2. Try: Open in different browser
3. Check: Is file in correct location?
4. Clear: Browser cache (Ctrl+Shift+Del)
```

### If WhatsApp Not Working
```
1. Check: Is number correct format? (62...)
2. Check: Browser console (F12) for errors
3. Try: Click WhatsApp floating button
4. Test: https://wa.me/62xxxxxxxxxx
```

### If Styling Looks Wrong
```
1. Hard refresh: Ctrl+Shift+R
2. Clear: Browser cache
3. Check: CSS file loaded (F12 Network)
4. Try: Different browser
```

### If Responsive Not Working
```
1. Check: Meta viewport tag exists
2. Resize: Browser window to test
3. Use: DevTools device toolbar
4. Clear: Cache and reload
```

---

## 📚 DOCUMENTATION

Full guides available:

| Document | Contents |
|----------|----------|
| `README.md` | Features & overview |
| `DEPLOYMENT.md` | Detailed deploy guide (5 platforms) |
| `CHECKLIST.md` | Pre/post launch checklist |
| This file | Quick 5-min setup |

---

## 🎉 YOU'RE READY!

```
✅ Website ready
✅ Free forever
✅ Fully customizable  
✅ Mobile responsive
✅ Professional design
✅ Booking system included
✅ No coding knowledge required (except few edits)

🚀 Go live today!
```

---

## 📞 SUPPORT

For detailed help:
- Read: `README.md` & `DEPLOYMENT.md`
- Check: `CHECKLIST.md` for step-by-step
- Search: Google "how to deploy HTML to GitHub Pages"
- Ask: ChatGPT "how to edit HTML file"

---

**Next Step**: ➡️ Go deploy your website! 🚀

**Questions?** Check the full documentation in README.md

---

*Created: January 31, 2026*  
*CloverTech - Solusi Lengkap Komputer & Teknologi Anda* 🍀
