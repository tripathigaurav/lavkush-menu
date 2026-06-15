# QR Code Guide for Lavkush Menu

## 📱 Your Menu URL

After deployment, your digital menu will be live at:

**`https://tripathigaurav.github.io/lavkush-menu/`**

This is the URL you'll use for your QR code!

## 🎯 How to Generate Your QR Code

### Option 1: Online QR Code Generator (Recommended - Free & Easy)

1. **Go to**: https://www.qr-code-generator.com/
2. **Select**: URL
3. **Enter URL**: `https://tripathigaurav.github.io/lavkush-menu/`
4. **Customize** (optional):
   - Add your logo in the center
   - Change colors to match your branding (green/gold theme)
   - Add frame with text like "Scan for Menu"
5. **Download**: High resolution (PNG or SVG)
6. **Save as**: `assets/qr-code-final.png`

### Option 2: Using QR Code Monkey (More Customization)

1. **Go to**: https://www.qrcode-monkey.com/
2. **Enter URL**: `https://tripathigaurav.github.io/lavkush-menu/`
3. **Customize Design**:
   - Logo: Upload `branding/lavkush-restaurant-logo.png`
   - Colors: Use your restaurant colors
   - Shape: Choose eye style and pattern
4. **Download**: 300 DPI minimum for printing

### Option 3: Command Line (If you have qrencode installed)

```bash
# Install qrencode (macOS)
brew install qrencode

# Generate QR code
qrencode -s 10 -l H -o assets/qr-code-final.png "https://tripathigaurav.github.io/lavkush-menu/"
```

## 📐 Recommended QR Code Specifications

For printing and display:

- **Size**: At least 2 inches × 2 inches (5cm × 5cm)
- **Resolution**: 300 DPI minimum
- **Format**: PNG or SVG (vector is better for printing)
- **Error Correction**: High (Level H) - allows logo in center
- **Color**: High contrast - dark QR on light background

## 🖨️ Where to Place Your QR Code

1. **Table Tents**: Print on folded cards on each table
2. **Wall Posters**: A4/Letter size at entrance and dining area
3. **Menu Cards**: Traditional menu with QR code
4. **Receipts**: Small QR at bottom
5. **Social Media**: Share digital version online

## 📱 Testing Your QR Code

Before printing, test with multiple devices:
- ✅ iPhone Camera app
- ✅ Android Camera app
- ✅ Different QR scanner apps
- ✅ From different distances (3-6 feet)

## 🎨 Design Template Ideas

**Table Tent Example:**
```
┌─────────────────────────┐
│                         │
│   LAVKUSH RESTAURANT    │
│   लवकुश रेस्टोरेंट      │
│                         │
│   [QR CODE HERE]        │
│                         │
│  📱 Scan for Digital    │
│      Menu               │
│                         │
│  100% Pure Veg          │
│                         │
└─────────────────────────┘
```

## 🔄 Updating Your QR Code

Your QR code URL **never changes** because it always points to:
`https://tripathigaurav.github.io/lavkush-menu/`

When you update your menu:
1. Push changes to GitHub
2. Site auto-deploys in 1-2 minutes
3. **Same QR code keeps working** - no need to reprint!

## 💡 Pro Tips

1. **Add a call-to-action**: "Scan for Menu" text near QR
2. **Test before mass printing**: Always test first!
3. **Keep it accessible**: Place at eye level, good lighting
4. **Provide alternatives**: Have a short link too (like bit.ly)
5. **Monitor usage**: Use URL shortener with analytics if needed

## 🆘 Troubleshooting

**QR code not scanning?**
- Ensure good lighting
- Try from 1-2 feet away
- Make sure QR is at least 2"×2"
- Check contrast (dark on light background)
- Verify URL is correct and site is live

**Need to change URL later?**
- Generate new QR code with new URL
- Update printed materials

---

## ✅ Quick Checklist

- [ ] Website deployed and live
- [ ] QR code generated with correct URL
- [ ] QR code tested on multiple devices
- [ ] Design includes restaurant branding
- [ ] Printed at correct size (min 2"×2")
- [ ] Placed in visible, well-lit locations
- [ ] Backup short URL created (optional)

---

**Your Live Menu**: https://tripathigaurav.github.io/lavkush-menu/

Happy serving! 🍽️
