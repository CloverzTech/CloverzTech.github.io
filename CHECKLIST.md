# ✅ CLOVERTECH WEBSITE - SETUP CHECKLIST

Panduan lengkap untuk setup dan launch website CloverTech.

---

## 📋 PRE-LAUNCH CHECKLIST

### Content & Information
- [ ] Update nomor WhatsApp Anda
  - Cari `62xxxxxxxxxx` di files:
    - `index.html` (multiple locations)
    - `assets/js/booking.js` (line ~250)
  - Replace dengan nomor Anda: contoh `6281234567890`

- [ ] Update email
  - Cari `info@clovertech.com` di `index.html`
  - Replace dengan email bisnis Anda

- [ ] Update alamat workshop
  - Cari "Jl. Teknologi No. 123" di `index.html`
  - Ganti dengan alamat asli Anda

- [ ] Update Google Maps embed
  - Cari di section Contact
  - Buat embed baru: https://maps.google.com → Share → Embed
  - Replace `<iframe>` di `index.html` line ~900

- [ ] Update jam operasional
  - Default: Senin-Sabtu, 09:00-17:00
  - Edit di `index.html` line ~1100

- [ ] Update nama founder
  - Default: Mochammad Rizqi Dirgantoro
  - Edit di `index.html` line ~1200
  - Edit di `assets/css/style.css` jika ada

- [ ] Add your photo/avatar
  - Create folder `assets/images/`
  - Add profile photo
  - Update img src di `index.html`

### Branding & Customization
- [ ] Verify warna tema (hijau #2ecc71)
  - Edit di `assets/css/style.css` line 8-20 jika perlu
  
- [ ] Verify logo/icon
  - Menggunakan Font Awesome clover icon
  - Ganti dengan custom logo jika ada

- [ ] Check all fonts
  - Menggunakan Poppins & Inter
  - Sudah import via Google Fonts

### Features Testing
- [ ] Test dark mode toggle
  - Click moon icon di navbar
  - Check localStorage persists

- [ ] Test booking form
  - Step 1: Select services
  - Step 2: Choose date/time/location
  - Step 3: Enter customer data
  - Step 4: Review & submit to WhatsApp

- [ ] Test responsive design
  - Desktop (1920px, 1440px)
  - Tablet (768px, 1024px)
  - Mobile (375px, 480px)

- [ ] Test all links
  - Navigation links
  - Internal anchors (#)
  - External links (WhatsApp, Maps, etc)

- [ ] Test WhatsApp integration
  - Click WhatsApp floating button
  - Try booking submission
  - Verify message format correct

- [ ] Test contact form
  - Fill form
  - Submit
  - Check notification appears

- [ ] Test testimonial carousel
  - Click prev/next buttons
  - Check dots navigation
  - Verify auto-slide every 5 seconds

- [ ] Test FAQ accordion
  - Click items to expand/collapse
  - Check smooth animation

### Performance & Optimization
- [ ] Check page load speed
  - Use: https://pagespeed.web.dev
  - Target: Lighthouse score > 85

- [ ] Minimize assets
  - CSS files minified
  - JS files minified
  - Images compressed

- [ ] Check browser console
  - No errors
  - No warnings
  - Smooth animations

### SEO & Meta
- [ ] Update meta title
  - Edit di `index.html` `<title>` tag
  - Default: "CloverTech - Solusi Komputer & Teknologi"

- [ ] Update meta description
  - Edit di `index.html` meta description
  - Max 160 characters

- [ ] Add favicon (optional)
  - Create favicon.ico
  - Add link to `<head>`
  ```html
  <link rel="icon" href="favicon.ico">
  ```

- [ ] Update social media links
  - Edit di footer section
  - Add Facebook, Instagram, YouTube links

### Security & Privacy
- [ ] Check for hardcoded sensitive data
  - WhatsApp: visible but intentional
  - Email: visible but intentional
  - API keys: none (no backend needed)

- [ ] HTTPS enabled (automatic for GitHub Pages)

- [ ] Privacy statement (optional)
  - Add di footer atau separate page

### Accessibility
- [ ] All images have alt text
- [ ] Form labels accessible
- [ ] Color contrast sufficient
- [ ] Keyboard navigation works
- [ ] Screen reader friendly

---

## 🚀 DEPLOYMENT CHECKLIST

### GitHub Pages Setup
- [ ] Create GitHub account (if not exist)
- [ ] Create repository `USERNAME.github.io`
- [ ] Push code to repository
- [ ] Enable GitHub Pages in settings
- [ ] Verify website live at `https://USERNAME.github.io`

### Alternative Hosting (Pick One)
- [ ] **Vercel**: Deploy via GitHub integration
- [ ] **Netlify**: Drag & drop atau GitHub integration
- [ ] **Cloudflare Pages**: Connect GitHub repo

### Domain Setup (Optional)
- [ ] Purchase domain (optional)
- [ ] Update DNS records
- [ ] Configure custom domain in hosting
- [ ] Verify SSL certificate

### Email Configuration
- [ ] Setup forwarding for contact form (optional)
- [ ] Test contact form submission
- [ ] Verify emails received

---

## 📈 POST-LAUNCH CHECKLIST

### Monitoring
- [ ] Setup Google Analytics
- [ ] Monitor traffic daily first week
- [ ] Track booking submissions
- [ ] Monitor page performance

### Marketing
- [ ] Share link di social media
- [ ] Add website link di bio
- [ ] Share dengan clients/network
- [ ] Ask for testimonials

### Maintenance
- [ ] Update testimonials regularly
- [ ] Check for broken links monthly
- [ ] Update pricing if needed
- [ ] Monitor for errors
- [ ] Backup website regularly (git commits)

### Engagement
- [ ] Respond to booking inquiries quickly
- [ ] Update FAQ with new questions
- [ ] Add blog posts (optional)
- [ ] Update portfolio with new work

---

## 📱 DEVICE TESTING MATRIX

| Device | Tested | Notes |
|--------|--------|-------|
| iPhone 12 (375px) | [ ] | |
| iPhone 14 Pro Max (430px) | [ ] | |
| iPad (768px) | [ ] | |
| iPad Pro (1024px) | [ ] | |
| Desktop 1920px | [ ] | |
| Desktop 2560px | [ ] | |

---

## 🔧 FINAL CHECKS

### Before Going Live
- [ ] All WhatsApp numbers correct
- [ ] All email addresses correct
- [ ] All links working
- [ ] All images loading
- [ ] Mobile responsive verified
- [ ] Dark mode working
- [ ] Animations smooth
- [ ] Forms submitting
- [ ] No console errors

### File Checklist
```
✅ index.html (Main file)
✅ assets/css/style.css (Main styles)
✅ assets/css/responsive.css (Mobile styles)
✅ assets/js/main.js (Main JS)
✅ assets/js/booking.js (Booking logic)
✅ assets/js/animations.js (Animations)
✅ README.md (Documentation)
✅ DEPLOYMENT.md (Deployment guide)
✅ package.json (Metadata)
✅ .gitignore (Git ignore)
```

---

## 🎯 SUCCESS METRICS

Track setelah launch:

**Traffic Metrics**
- Unique visitors per month: ___
- Page views: ___
- Average session duration: ___
- Bounce rate: ___

**Conversion Metrics**
- Booking submissions per month: ___
- Contact form submissions: ___
- WhatsApp clicks: ___
- Conversion rate: ___

**Technical Metrics**
- Page load time: ___ ms
- Lighthouse score: ___
- Mobile usability: ___
- Core Web Vitals: ___

---

## 📞 SUPPORT & HELP

### Common Issues & Solutions

**Booking form not sending to WhatsApp**
- [ ] Check WhatsApp number format (62...)
- [ ] Test on different browser
- [ ] Clear cache & refresh
- [ ] Check internet connection

**Dark mode not persisting**
- [ ] Check browser allows localStorage
- [ ] Clear browser storage & reload
- [ ] Try different browser

**Images not showing**
- [ ] Check file paths relative to index.html
- [ ] Check image files exist in folders
- [ ] Check console for 404 errors

**Website slow**
- [ ] Check Lighthouse report
- [ ] Compress images
- [ ] Minimize CSS/JS
- [ ] Use CDN for large files

---

## 🎉 LAUNCH TEMPLATE

Siap untuk announce launch? Gunakan template ini:

```
🎉 EXCITED TO ANNOUNCE! 🎉

CloverTech Website is now LIVE! ✨

Solusi Lengkap Komputer & Teknologi Anda
🔧 Service & Repair
💻 Rakit PC Custom  
📸 Instalasi CCTV
🌐 Instalasi Jaringan
... dan banyak lagi!

✨ FITUR WEBSITE:
✅ Booking Online 24/7
✅ Showcase Layanan & Harga
✅ Testimoni Pelanggan
✅ FAQ & Informasi Lengkap
✅ Contact & Maps

🌐 Kunjungi: https://USERNAME.github.io
📱 Booking: https://wa.me/62xxxxxxxxxx

Terima kasih atas dukungan Anda! 🙏
```

---

**Version**: 1.0  
**Last Updated**: January 31, 2026  
**Status**: ✅ Ready for Launch

Good luck with your CloverTech website! 🚀
