# Deployment Guide - TravelBloom

## GitHub Pages Deployment

GitHub Pages automatically deploys your website from your GitHub repository. Follow these steps:

### Prerequisites
- GitHub account
- Repository pushed to GitHub (already done ✓)

### Automatic Deployment (GitHub Pages)

GitHub Pages should automatically detect and deploy your site. The website will be available at:

**https://falodunvo.github.io/Myproject/**

### Manual Configuration (if needed)

If the site isn't live yet, follow these steps:

1. Go to your GitHub repository: https://github.com/Falodunvo/Myproject

2. Click on **Settings** (gear icon)

3. Scroll down to **Pages** section

4. Under "Build and deployment":
   - Source: Select **Deploy from a branch**
   - Branch: Select **main**
   - Folder: Select **/ (root)**

5. Click **Save**

6. GitHub will build and deploy your site (usually takes 1-2 minutes)

7. Once deployment is complete, you'll see:
   "Your site is published at https://falodunvo.github.io/Myproject/"

### Verify Deployment

Once deployed, test these URLs:

- **Home Page**: https://falodunvo.github.io/Myproject/
- **Home (index.html)**: https://falodunvo.github.io/Myproject/index.html
- **About Page**: https://falodunvo.github.io/Myproject/about.html
- **Contact Page**: https://falodunvo.github.io/Myproject/contact.html

### Local Testing

To test locally before deploying:

1. Open `index.html` directly in your browser
2. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if installed)
   npx http-server
   ```
3. Visit `http://localhost:8000` in your browser

### Troubleshooting Deployment

**Site not showing?**
- Wait 1-2 minutes for deployment to complete
- Check GitHub Actions tab for build status
- Ensure main branch has index.html in root directory

**Images not loading?**
- External images from Unsplash require internet connection
- Check browser developer tools (F12) for 404 errors

**CSS/JS not loading?**
- Clear browser cache (Ctrl+Shift+Del)
- Check file paths in HTML files
- Ensure all files are committed and pushed to GitHub

### Git Commands for Updates

After making changes locally:

```bash
# Stage all changes
git add .

# Commit with message
git commit -m "Describe your changes here"

# Push to GitHub
git push origin2 main
```

The website will automatically update within 1-2 minutes.

### Update Website Content

To update content:

1. Edit HTML files for structure/content
2. Edit `css/style.css` for styling
3. Edit `js/script.js` for functionality
4. Run git commands above
5. Changes appear automatically on GitHub Pages

### Environment Variables & Secrets

If you need to add sensitive information later:

1. Go to Settings → Secrets and variables → Actions
2. Add new repository secrets
3. Reference in environment files (not tracked by git)

### Custom Domain (Optional)

To use a custom domain:

1. Settings → Pages
2. Under "Custom domain", enter your domain
3. Follow GitHub's DNS configuration instructions
4. Update domain registrar settings

---

**Website Status**: Ready for Deployment

Your TravelBloom website is ready to go live. The repository is already configured for GitHub Pages automatic deployment.

For any issues, check the repository's Actions tab for deployment logs.
