# Lavkush Restaurant - Digital Menu

A modern, mobile-first QR-based digital menu for Lavkush Restaurant, built with pure HTML, CSS, and JavaScript.

## Features

- Mobile-first responsive design optimized for smartphones
- Bilingual support (English/Hindi toggle)
- Dark premium theme with maroon and gold colors
- Real-time search functionality
- Fast loading with zero dependencies
- QR code ready for easy access

## Project Structure

```
├── index.html          # Main entry point
├── css/
│   └── styles.css      # Styles
├── js/
│   ├── menu-data.js    # Menu items data
│   └── app.js          # Application logic
├── assets/
│   └── logo.png        # Restaurant logo
└── branding/           # Design assets
```

## Menu Contents

46 items across 6 categories: Breakfast, Sabzi/Lunch-Dinner, Rice, Roti, Thali, and Extras.

## Local Development

Open `index.html` directly in a browser, or use a local server:

```bash
python3 -m http.server 8000
```

## Deployment

Deploy as a static site to any hosting platform:
- **GitHub Pages**: Enable in repo Settings → Pages
- **Vercel**: `vercel deploy --prod`
- **Netlify**: Drag and drop to [netlify.com/drop](https://app.netlify.com/drop)

Generate a QR code with your live URL using [qr-code-generator.com](https://www.qr-code-generator.com/)

## Customization

**Update contact info** in `index.html`:
- Phone numbers in `tel:` and `wa.me` links
- Location address

**Modify menu items** in `js/menu-data.js`

**Change colors** in `css/styles.css`:
```css
:root {
  --accent-maroon: #9B1B30;
  --accent-gold: #D4A853;
}
```

## Contact

**Lavkush Restaurant**  
Near Karsevakpuram, Ramghat Chauraha, Ayodhya - 224123  
Phone: 88587-09877

---

*स्वाद शुद्ध, सेवा उत्तम*
