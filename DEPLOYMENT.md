# 🚀 DEPLOYMENT GUIDE - CLOVERTECH WEBSITE

## Opsi Deployment Gratis

Dokumen ini menjelaskan berbagai cara untuk men-deploy website CloverTech secara gratis.

---

## 1️⃣ GITHUB PAGES (Recommended)

### Keuntungan
- ✅ Gratis selamanya
- ✅ Domain custom gratis (.github.io)
- ✅ SSL/HTTPS gratis
- ✅ Auto-deploy dari GitHub
- ✅ Unlimited bandwidth

### Langkah-Langkah

#### A. Setup Repository GitHub

1. **Login ke GitHub**
   - Buka https://github.com
   - Login atau buat akun baru

2. **Create New Repository**
   - Click "+" di top right
   - Pilih "New repository"
   - **Nama Repository**: `USERNAME.github.io` 
     - Ganti USERNAME dengan username GitHub Anda
     - Contoh: `rizqi.github.io`
   - Pilih "Public"
   - Jangan tambah README/License (optional)
   - Click "Create repository"

3. **Copy Repository URL**
   - Klik tombol "Code" (hijau)
   - Copy HTTPS URL
   - Contoh: `https://github.com/rizqi/rizqi.github.io.git`

#### B. Push Code via Git

**Option 1: Git Command Line**

```bash
# Navigate ke folder project
cd "d:\CloverTech Post"

# Initialize git
git init

# Add remote repository
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git

# Add all files
git add .

# Commit
git commit -m "Initial CloverTech website"

# Push ke GitHub (pastikan branch adalah main/master)
git branch -M main
git push -u origin main
```

**Option 2: GitHub Desktop (GUI)**

1. Download GitHub Desktop dari https://desktop.github.com
2. Install dan login dengan GitHub account
3. Click "File" → "Clone Repository"
4. Masukkan URL repository
5. Pilih local path
6. Click "Clone"
7. Copy semua file dari project ke folder
8. Di GitHub Desktop: click "Publish branch"

**Option 3: Drag & Drop via GitHub Web**

1. Di GitHub repository page, klik "Add files" → "Upload files"
2. Drag & drop semua file dari folder
3. Tambah commit message
4. Click "Commit changes"

#### C. Enable GitHub Pages

1. Buka GitHub repository
2. Click tab "Settings"
3. Di sidebar kiri, click "Pages"
4. Bagian "Source":
   - Branch: select "main" atau "master"
   - Folder: select "/ (root)"
   - Click "Save"

5. **Website Live di:**
   ```
   https://USERNAME.github.io
   ```
   Contoh: `https://rizqi.github.io`

6. Custom Domain (Optional):
   - Di Pages settings → "Custom domain"
   - Masukkan domain Anda (cth: clovertech.com)
   - Update DNS records di registrar domain
   - Click "Save"

#### D. Update Konten

Setiap kali edit file:
```bash
# Dari folder project
git add .
git commit -m "Update deskripsi perubahan"
git push origin main
```

Website otomatis terupdate dalam beberapa menit!

---

## 2️⃣ VERCEL

### Keuntungan
- ✅ Gratis untuk hobby projects
- ✅ Automatic deployments
- ✅ Preview URLs
- ✅ Custom domain gratis
- ✅ Lightning fast (CDN global)

### Langkah-Langkah

1. **Sign Up**
   - Buka https://vercel.com
   - Click "Sign Up"
   - Pilih "Continue with GitHub"
   - Authorize Vercel

2. **Connect Repository**
   - Click "New Project"
   - Import GitHub repository
   - Klik repository CloverTech
   - Click "Import"

3. **Configure Project**
   - Project name: `clovertech` (atau nama lain)
   - Framework preset: `Other` (karena HTML statis)
   - Build command: (biarkan kosong)
   - Output directory: `.` (dot)
   - Click "Deploy"

4. **Website Live di:**
   ```
   https://clovertech.vercel.app
   ```

5. **Custom Domain:**
   - Di project settings → "Domains"
   - Add custom domain
   - Update DNS records
   - Vercel auto-manages SSL

---

## 3️⃣ NETLIFY

### Keuntungan
- ✅ Very user-friendly
- ✅ Drag & drop deployment
- ✅ Free SSL
- ✅ Good performance

### Langkah-Langkah

#### Method A: Drag & Drop (Termudah)

1. **Buka Netlify**
   - Go to https://netlify.com
   - Signup/Login

2. **Deploy**
   - Cari area "Drag and drop your site output folder here"
   - Drag folder project ke area tersebut
   - Tunggu deploy selesai
   - Website live immediately!

#### Method B: GitHub Integration

1. Click "New site from Git"
2. Connect GitHub account
3. Select CloverTech repository
4. Keep default settings
5. Click "Deploy site"

3. **Website URL:**
   - `https://random-name.netlify.app`
   - Atau custom domain di site settings

---

## 4️⃣ CLOUDFLARE PAGES

### Keuntungan
- ✅ Gratis
- ✅ Super fast (Cloudflare network)
- ✅ Unlimited bandwidth
- ✅ Custom domain

### Langkah-Langkah

1. **Login Cloudflare**
   - Buka https://dash.cloudflare.com
   - Create akun atau login

2. **Create Pages Project**
   - Click "Pages" di sidebar
   - Click "Create a project"
   - "Connect to Git"
   - Select GitHub & authorize
   - Select CloverTech repository

3. **Build Settings**
   - Production branch: `main`
   - Build command: (biarkan kosong)
   - Build output directory: `.` (dot)

4. **Deploy**
   - Click "Save and Deploy"
   - Website live di `https://clovertech.pages.dev`

---

## 5️⃣ GOOGLE FIREBASE HOSTING

### Keuntungan
- ✅ Gratis (dengan quota generous)
- ✅ SSL automatic
- ✅ Global CDN
- ✅ Version management

### Langkah-Langkah

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login**
   ```bash
   firebase login
   ```
   Browser membuka, login dengan Google account

3. **Initialize Project**
   ```bash
   firebase init hosting
   ```
   - Pilih "Create a new Firebase project"
   - Nama project: `clovertech` (atau lainnya)
   - Public directory: `.` (dot/root)
   - Single page app: `No` (statis HTML)

4. **Deploy**
   ```bash
   firebase deploy
   ```

5. **Website Live di:**
   ```
   https://clovertech.firebaseapp.com
   ```

---

## 📝 MAINTENANCE GUIDE

### Update Content Regularly

#### Via GitHub Web UI (Easiest)
```
1. Go to repository
2. Click file to edit
3. Click edit pencil icon
4. Make changes
5. Commit dengan message deskriptif
6. Website auto-update
```

#### Via Git Command
```bash
# Make changes to files
git add .
git commit -m "Fix typo di navbar"
git push origin main
```

### Analytics & Monitoring

**Google Analytics Setup:**
1. Create Google Analytics account
2. Add tracking code ke `<head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## 🚨 TROUBLESHOOTING

### Domain tidak resolve
- **Solution**: DNS propagation membutuhkan 24-48 jam
- Update Nameservers ke hosting provider Anda

### Deploy gagal di GitHub Pages
- Check branch adalah "main" atau "master"
- Pastikan file `index.html` di root folder
- Clear cache: Ctrl+Shift+R di browser

### Website lambat
- Clear browser cache
- Check ke Lighthouse score
- Optimize gambar dengan compress tool

### WhatsApp link tidak kerja
- Verify nomor WhatsApp format correct (62...)
- Test di berbagai browser & device
- Check browser console untuk errors

---

## 📊 RECOMMENDED SETUP

**Best Overall:** GitHub Pages
- Simplest integration
- Best for version control
- No additional service needed

**Best Performance:** Vercel atau Cloudflare Pages
- Fastest global CDN
- Better performance metrics
- Great for high-traffic

**Best User Experience:** Netlify
- Easiest to use
- Great interface
- Good balance semua aspek

---

## 🔐 SECURITY BEST PRACTICES

1. **Never commit sensitive data**
   - WhatsApp number di `.js` file
   - Email di contact form
   - API keys

2. **Keep contact info updated**
   - Edit langsung di file
   - Don't hardcode di `<a>` tag visible

3. **HTTPS always enabled**
   - Semua platform di atas otomatis HTTPS

4. **Regular backups**
   - Push ke GitHub regularly
   - Keep local copy updated

---

**Happy Deploying! 🚀**

Untuk pertanyaan, contact: info@clovertech.com
