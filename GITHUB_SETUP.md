# 🐙 GITHUB SETUP GUIDE

Panduan step-by-step untuk deploy ke GitHub Pages.

---

## 📋 PREREQUISITES

✅ Create GitHub account (free): https://github.com/signup

---

## 🚀 STEP-BY-STEP DEPLOYMENT

### STEP 1: Create GitHub Repository (5 min)

1. **Login ke GitHub**
   - Buka https://github.com
   - Login dengan akun Anda

2. **Create New Repository**
   - Click "+" icon di top right
   - Pilih "New repository"
   - Atau langsung: https://github.com/new

3. **Configure Repository**
   ```
   Repository name: USERNAME.github.io
   
   ⚠️ IMPORTANT: Harus USERNAME.github.io
   Ganti "USERNAME" dengan GitHub username Anda
   
   Contoh:
   - Jika username: rizqi → rizqi.github.io
   - Jika username: john_tech → john_tech.github.io
   ```

4. **Settings**
   - [x] Public (HARUS PUBLIC!)
   - [ ] Add README.md (skip - kita sudah punya)
   - [ ] Add .gitignore (skip - kita sudah punya)
   - [ ] Choose a license (skip)

5. **Create Repository**
   - Click "Create repository"
   - Repository sudah dibuat! ✅

6. **Copy Repository URL**
   - Click "Code" button (hijau)
   - Copy HTTPS URL
   - Contoh: `https://github.com/rizqi/rizqi.github.io.git`

---

### STEP 2: Push Code to GitHub (10 min)

#### Option A: Using Git Command Line (Recommended)

**1. Install Git** (if not installed)
   - Download: https://git-scm.com
   - Install with default settings
   - Restart computer

**2. Open Terminal/PowerShell**
   - Windows: Right-click folder → "Open PowerShell here"
   - Mac: Command + Space → Terminal
   - Linux: Open Terminal application

**3. Navigate to Project**
   ```powershell
   cd "d:\CloverTech Post"
   ```

**4. Configure Git** (first time only)
   ```powershell
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```
   
   Replace dengan nama & email Anda

**5. Initialize Repository**
   ```powershell
   git init
   git add .
   git commit -m "Initial CloverTech website"
   ```

**6. Add Remote**
   ```powershell
   git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
   ```
   
   Replace:
   - `USERNAME`: GitHub username Anda (2 kali)
   - `https://github.com/USERNAME/USERNAME.github.io.git`: URL dari Step 1.6

**7. Push to GitHub**
   ```powershell
   git branch -M main
   git push -u origin main
   ```

   - Akan diminta login GitHub
   - Masukkan username & password (atau use GitHub token)
   - Files diupload ke GitHub ✅

---

#### Option B: Using GitHub Desktop (GUI)

**1. Download GitHub Desktop**
   - https://desktop.github.com
   - Install & restart

**2. Login to GitHub**
   - Open GitHub Desktop
   - Click "File" → "Options"
   - Login dengan GitHub account
   - Click "Sign In"

**3. Clone Repository**
   - Click "File" → "Clone Repository"
   - Paste repository URL dari Step 1.6
   - Contoh: `https://github.com/username/username.github.io.git`
   - Choose local path (di mana folder akan disimpan)
   - Click "Clone"

**4. Copy Project Files**
   - Open File Explorer
   - Navigate ke folder repository yang baru dibuat
   - Copy semua files dari `d:\CloverTech Post` ke folder tersebut
   - Folder sudah siap dengan files!

**5. Publish Repository**
   - Di GitHub Desktop, akan see "Publish repository" button
   - Click "Publish repository"
   - Confirm settings
   - Click "Publish"
   - Files terupload! ✅

---

#### Option C: Upload via GitHub Web Interface

**1. Open GitHub Repository**
   - Go ke: https://github.com/USERNAME/USERNAME.github.io
   - Replace USERNAME dengan akun Anda

**2. Upload Files**
   - Click "Add files" dropdown
   - Click "Upload files"
   - Drag & drop semua files dari `d:\CloverTech Post`
   - Atau click "choose your files" dan select

**3. Commit Upload**
   - Add commit message: "Initial CloverTech website"
   - Click "Commit changes"
   - Files terupload! ✅

---

### STEP 3: Enable GitHub Pages (5 min)

1. **Go to Repository Settings**
   - Repository page → Click "Settings" tab
   - Atau langsung: https://github.com/USERNAME/USERNAME.github.io/settings

2. **Navigate to Pages**
   - Left sidebar → Click "Pages"
   - URL: `/settings/pages`

3. **Configure Source**
   - Section "Source" → Branch dropdown
   - Select: `main` (atau `master`)
   - Select: `/ (root)` folder
   - Click "Save"

4. **Wait for Deployment**
   - GitHub otomatis deploy
   - Lihat status di Pages section
   - Biasanya live dalam 1-2 menit
   - Akan muncul URL: `https://USERNAME.github.io`

5. **Test Website**
   - Copy URL
   - Paste ke browser
   - Website live! 🎉

---

## ✅ VERIFICATION CHECKLIST

- [ ] Repository created with correct name (`USERNAME.github.io`)
- [ ] All files uploaded (index.html, assets folder, etc)
- [ ] GitHub Pages enabled
- [ ] Branch set to `main`
- [ ] Website live at `https://USERNAME.github.io`
- [ ] All pages loading correctly
- [ ] Dark mode works
- [ ] Booking form functional
- [ ] Responsive on mobile
- [ ] WhatsApp button working

---

## 🔄 UPDATING YOUR WEBSITE

### Via Git Command Line

```powershell
cd "d:\CloverTech Post"

# Edit files as needed

git add .
git commit -m "Update WhatsApp number and address"
git push origin main
```

Website auto-updates dalam 1-2 menit! ✅

### Via GitHub Web

1. Go to repository
2. Click file to edit
3. Click pencil icon
4. Make changes
5. Commit dengan message
6. Auto-deploy! ✅

### Via GitHub Desktop

1. Make changes locally
2. Commit di GitHub Desktop
3. Click "Push origin"
4. Auto-deploy! ✅

---

## 🌐 CUSTOM DOMAIN (Optional)

Jika punya domain sendiri (cth: clovertech.com):

### Step 1: Add Domain to GitHub Pages

1. Repository → Settings → Pages
2. "Custom domain" field
3. Masukkan domain: `clovertech.com`
4. Click "Save"
5. GitHub creates CNAME file

### Step 2: Update DNS Records

Go to domain registrar (GoDaddy, Namecheap, etc):

```
Record Type: CNAME
Name: www
Value: USERNAME.github.io

Record Type: A
Name: @
Value: See GitHub Pages docs for IP addresses
```

### Step 3: Verify

- Wait 24 hours for DNS propagation
- Visit: `https://clovertech.com`
- Website live with custom domain! ✅

---

## 🆘 TROUBLESHOOTING

### "Repository name must be USERNAME.github.io"

**Solution**: Repository name HARUS format `USERNAME.github.io`
- Go to Settings → General
- Rename repository ke format yang benar

### "Website not loading after push"

**Solutions**:
1. Clear browser cache: Ctrl+Shift+Del
2. Hard refresh: Ctrl+Shift+R
3. Wait 2-3 minutes (GitHub deploy takes time)
4. Check GitHub Pages settings
5. Verify branch is `main`

### "404 error on website"

**Solutions**:
1. Verify index.html in root folder
2. Check file paths relative to index.html
3. Verify no typos in filenames
4. Check GitHub Pages enabled
5. Wait for deploy to complete

### "Git push requires authentication"

**Solutions**:
1. Use GitHub token (recommended):
   - GitHub Settings → Developer settings → Personal access tokens
   - Create token with repo access
   - Use token as password when git asks

2. Or use SSH key:
   - GitHub Settings → SSH and GPG keys
   - Generate SSH key
   - Add to GitHub

### "Files not uploading"

**Solutions**:
1. Check file paths: `git status`
2. Verify .gitignore not blocking files
3. Check folder structure
4. Try drag & drop upload on GitHub web

---

## 📊 GITHUB PAGES STATUS

Check deployment status:

1. Go to repository
2. Click "Deployments" tab
3. See all deployments & status
4. Click for detailed logs
5. Troubleshoot if needed

---

## 🔐 GITHUB SECURITY

### Best Practices

1. **Use Personal Access Token** instead of password
   - Safer than password
   - Can be revoked anytime
   - Limited scope

2. **Keep Credentials Secret**
   - Don't share token with anyone
   - Don't commit token to repo
   - Use .gitignore for sensitive files

3. **Regular Backups**
   - Commit regularly
   - Keep local copy
   - GitHub is your backup

4. **Two-Factor Authentication**
   - Settings → Security
   - Enable 2FA for extra security

---

## 📈 MONITORING YOUR SITE

### GitHub Analytics

1. Repository → Insights tab
2. View:
   - Network graph
   - Traffic statistics
   - Commits history
   - Contributor stats

### Google Analytics (Optional)

Add to track visitor stats:

```html
<!-- Add to <head> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Replace `GA_ID` dengan tracking ID dari Google Analytics

---

## 🎉 SUCCESS!

**🎊 Selamat! Website Anda sudah live di GitHub Pages!**

### Next Steps:

1. ✅ Share link website ke customers
2. ✅ Add website link di social media bios
3. ✅ Monitor traffic & bookings
4. ✅ Update content regularly
5. ✅ Gather feedback & improve

---

## 📞 NEED HELP?

### Common Questions

**Q: Bagaimana jika lupa repository URL?**
A: Di GitHub repository page, klik "Code" button untuk copy URL lagi

**Q: Bisa pakai HTTPS?**
A: Ya, GitHub Pages otomatis provide HTTPS gratis dengan SSL cert

**Q: Berapa lama deploy take?**
A: Usually 1-3 minutes. Max 10 minutes untuk first deploy

**Q: Bisa pakai private repository?**
A: No, GitHub Pages hanya untuk public repositories

**Q: Punya bandwidth limit?**
A: Tidak, unlimited bandwidth di GitHub Pages

---

## 🚀 QUICK REFERENCE

```bash
# Full deployment command (copy-paste):

cd "d:\CloverTech Post"
git init
git add .
git commit -m "Initial CloverTech website"
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
git branch -M main
git push -u origin main
```

Replace `USERNAME` dengan GitHub username Anda (2 kali)

---

## 📚 RESOURCES

- GitHub Pages Docs: https://pages.github.com
- Git Documentation: https://git-scm.com/doc
- GitHub Guides: https://guides.github.com
- GitHub Help: https://help.github.com

---

**🎉 Your website is live! Happy hosting!**

Contact: info@clovertech.com
