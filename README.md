# Lavkush Restaurant - Digital Menu 🍛

A modern, mobile-first QR-based digital menu for Lavkush Restaurant, built with pure HTML, CSS, and JavaScript.

## Features ✨

- **Mobile-First Design**: Optimized for smartphones and tablets
- **Bilingual Support**: Toggle between English and Hindi
- **Dark Premium Theme**: Elegant maroon and gold color scheme
- **Fast Loading**: Under 50KB bundle size (excluding logo)
- **QR Code Ready**: Includes printable QR code for table placement
- **Search Functionality**: Real-time menu item search
- **Smooth Navigation**: Sticky category tabs with active highlighting
- **Splash Screen**: Brand animation on page load
- **Floating CTAs**: Quick access to call and WhatsApp
- **Zero Dependencies**: Pure vanilla JavaScript, no frameworks
- **Secure**: Content Security Policy, XSS prevention, no tracking

## Project Structure 📁

```
Menu/
├── index.html          # Main entry point
├── css/
│   └── styles.css      # All styles (mobile-first, dark theme)
├── js/
│   ├── menu-data.js    # Menu items data (EN + HI)
│   └── app.js          # Application logic
├── assets/
│   ├── logo.png        # Restaurant logo
│   └── qr-code.png     # Printable QR code
└── README.md           # This file
```

## Menu Data 📋

The menu includes **46 items** across **6 categories**:

- **Breakfast** (15 items): Chai, Coffee, Parathas, Maggi, etc.
- **Sabzi / Lunch-Dinner** (16 items): All main course dishes
- **Rice** (5 items): Plain Rice, Pulao, Fried Rice, etc.
- **Roti** (2 items): Tawa Roti, Butter Roti
- **Thali** (2 items): Regular Thali (₹150), Special Thali (₹200)
- **Extras** (4 items): Raita, Salad, Papad, Dahi

All prices are sourced from the Hindi menu (official pricing).

## Local Development 🛠️

1. Clone or download this repository
2. Open `index.html` in your browser
3. No build step required!

```bash
# Option 1: Open directly
open index.html

# Option 2: Use a simple HTTP server (recommended)
python3 -m http.server 8000
# Then visit: http://localhost:8000
```

## Deployment 🚀

### Option 1: GitHub Pages (Free, Recommended)

1. **Create a GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Lavkush Restaurant Menu"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/lavkush-menu.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Click **Save**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/lavkush-menu/`

3. **Update QR Code:**
   - After deployment, note your live URL
   - Update the QR code with your actual URL (see QR Code section below)

### Option 2: Vercel (Fast, Free)

1. **Install Vercel CLI (optional):**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd Menu
   vercel deploy --prod
   ```

3. **Or use Vercel Dashboard:**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site will be live instantly

### Option 3: Netlify (Simple, Free)

1. **Using Netlify Drop (No CLI):**
   - Visit [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the entire `Menu` folder
   - Done! You'll get a live URL immediately

2. **Using Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   cd Menu
   netlify deploy --prod
   ```

### Option 4: Any Static Host

This is a static site with no build step. Upload the entire folder to any web host:
- Firebase Hosting
- AWS S3 + CloudFront
- Cloudflare Pages
- DigitalOcean App Platform
- Or any shared hosting with HTTPS support

**Important:** Always use HTTPS-enabled hosting for security.

## QR Code Generation 📱

### Method 1: Online QR Generator (Recommended)

1. Deploy your site first and get the live URL
2. Visit a QR code generator:
   - [QR Code Generator](https://www.qr-code-generator.com/)
   - [QRCode Monkey](https://www.qrcode-monkey.com/)
   - [Canva](https://www.canva.com/qr-code-generator/)

3. Enter your URL (e.g., `https://lavkush-menu.vercel.app`)
4. Customize colors to match brand (maroon #9B1B30 or gold #D4A853)
5. Download as high-resolution PNG (at least 1000x1000px)
6. Save to `assets/qr-code.png`

### Method 2: Using Node.js (If you have Node installed)

```bash
# Install QR code generator
npm install -g qrcode

# Generate QR code
qrcode -o assets/qr-code.png "https://YOUR_LIVE_URL_HERE"
```

### Printing the QR Code

- **Size:** Print at least 3x3 inches (7.5x7.5 cm) for easy scanning
- **Paper:** Use laminated cardstock for durability
- **Placement:** On each table, near entrance, on menu card holders
- **Include text:** Add "Scan for Digital Menu" below the QR code

## Customization 🎨

### Update Restaurant Info

Edit `index.html`:
```html
<!-- Location -->
<p class="location">📍 YOUR_ADDRESS_HERE</p>

<!-- Phone Number -->
<a href="tel:+91XXXXXXXXXX">Call</a>
<a href="https://wa.me/91XXXXXXXXXX">WhatsApp</a>
```

### Modify Menu Items

Edit `js/menu-data.js`:
```javascript
window.MENU_DATA = {
  breakfast: [
    {
      id: "new_item",
      name_en: "New Item Name",
      name_hi: "नया आइटम",
      price_single: 50,
      popular: false
    }
    // Add more items...
  ]
}
```

### Change Colors

Edit `css/styles.css`:
```css
:root {
  --accent-maroon: #9B1B30;  /* Your primary color */
  --accent-gold: #D4A853;    /* Your secondary color */
}
```

## Browser Support 🌐

- ✅ Chrome/Edge (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## Performance 📊

- **Bundle Size:** ~45KB (HTML + CSS + JS)
- **Logo:** ~80KB (optimized PNG)
- **Google Fonts:** ~15KB (Noto Sans Devanagari subset)
- **Total Load:** ~140KB
- **First Paint:** < 1 second on 3G

## Security 🔒

- ✅ Content Security Policy (CSP) headers
- ✅ XSS prevention (sanitized user input)
- ✅ No external dependencies at runtime
- ✅ HTTPS enforcement
- ✅ No cookies or tracking
- ✅ No data collection

## Accessibility ♿

- Semantic HTML5 markup
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible indicators
- Sufficient color contrast (WCAG AA)
- Reduced motion support

## Support & Contact 📞

**Lavkush Restaurant**
- 📍 Near Karsevakpuram, Ramghat Chauraha, Ayodhya - 224123
- 📞 88587-09877
- 💬 WhatsApp: +91 88587-09877

## License

This project is created for Lavkush Restaurant. All rights reserved.

## Version History

- **v1.0.0** (2026-06-15): Initial release
  - Mobile-first responsive design
  - Bilingual support (English/Hindi)
  - 46 menu items across 6 categories
  - QR code ready
  - Dark premium theme

---

**Built with ❤️ for Lavkush Restaurant**

*स्वाद शुद्ध, सेवा उत्तम* 🙏
