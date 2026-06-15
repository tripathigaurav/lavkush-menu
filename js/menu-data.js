// Lavkush Restaurant Menu Data
// All prices from Hindi menu (source of truth)
// Popular badge on all Paneer items, Thalis, and Paneer Chowmein
//
// Menu Item Schema:
// - id, name_en, name_hi, desc_en, desc_hi
// - price_half, price_full, price_single (use null if not applicable)
// - popular: boolean (show popular badge)
// - image_url: string|null (item photo URL, for future use)

window.MENU_DATA = {
  breakfast: [
    {
      id: "chai",
      name_en: "Chai",
      name_hi: "चाय",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: null,
      price_single: 20,
      popular: false,
      image_url: null  // For future food photos
    },
    {
      id: "coffee",
      name_en: "Coffee",
      name_hi: "कॉफ़ी",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: null,
      price_single: 30,
      popular: false
    },
    {
      id: "milk",
      name_en: "Milk",
      name_hi: "दूध",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: null,
      price_single: 50,
      popular: false
    },
    {
      id: "plain_maggi",
      name_en: "Plain Maggi",
      name_hi: "बेज मैगी",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: null,
      price_single: 40,
      popular: false
    },
    {
      id: "veg_maggi",
      name_en: "Vegetable Maggi",
      name_hi: "वेज मैगी",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: null,
      price_single: 60,
      popular: false
    },
    {
      id: "bun_makhhan",
      name_en: "Bun Makhhan",
      name_hi: "बन मक्खन",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: null,
      price_single: 40,
      popular: false
    },
    {
      id: "paneer_pakoda",
      name_en: "Paneer Pakoda (6 pieces)",
      name_hi: "पनीर पकौड़ा (6 पीस)",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: null,
      price_single: 100,
      popular: true
    },
    {
      id: "aloo_paratha",
      name_en: "Aloo Paratha (2 piece, dahi, achar)",
      name_hi: "आलू पराठा (2 पीस + दही, अचार)",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: null,
      price_single: 120,
      popular: false
    },
    {
      id: "aloo_pyaaj_paratha",
      name_en: "Aloo Pyaaj Paratha (2 piece, dahi, achar)",
      name_hi: "आलू प्याज पराठा (2 पीस + दही, अचार)",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: null,
      price_single: 140,
      popular: false
    },
    {
      id: "paneer_paratha",
      name_en: "Paneer Paratha (2 piece, dahi, achar)",
      name_hi: "पनीर पराठा (2 पीस + दही, अचार)",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: null,
      price_single: 160,
      popular: true
    },
    {
      id: "poha",
      name_en: "Poha",
      name_hi: "पोहा",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: null,
      price_single: 80,
      popular: false
    },
    {
      id: "puri_sabzi",
      name_en: "Puri Sabzi (5 puri pieces)",
      name_hi: "पूरी सब्जी (5 पूरी पीस)",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: null,
      price_single: 80,
      popular: false
    },
    {
      id: "chowmein",
      name_en: "Chowmein",
      name_hi: "चाउमीन",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: null,
      price_single: 80,
      popular: false
    },
    {
      id: "paneer_chowmein",
      name_en: "Paneer Chowmein",
      name_hi: "पनीर चाउमीन",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: null,
      price_single: 120,
      popular: true
    },
    {
      id: "french_fries",
      name_en: "French Fries",
      name_hi: "फ्रेंच फ्राइज़न",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: null,
      price_single: 80,
      popular: false
    }
  ],

  sabzi: [
    {
      id: "aloo_matar",
      name_en: "Aloo Matar",
      name_hi: "आलू मटर",
      desc_en: "",
      desc_hi: "",
      price_half: 90,
      price_full: 150,
      price_single: null,
      popular: false
    },
    {
      id: "gobhi_masala",
      name_en: "Gobhi Masala",
      name_hi: "गोभी मसाला",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: 250,
      price_single: null,
      popular: false
    },
    {
      id: "matar_masala",
      name_en: "Matar Masala",
      name_hi: "मटर मसाला",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: 250,
      price_single: null,
      popular: false
    },
    {
      id: "shahi_paneer",
      name_en: "Shahi Paneer",
      name_hi: "शाही पनीर",
      desc_en: "",
      desc_hi: "",
      price_half: 160,
      price_full: 280,
      price_single: null,
      popular: true
    },
    {
      id: "matar_paneer",
      name_en: "Matar Paneer",
      name_hi: "मटर पनीर",
      desc_en: "",
      desc_hi: "",
      price_half: 170,
      price_full: 300,
      price_single: null,
      popular: true
    },
    {
      id: "kadhai_paneer",
      name_en: "Kadhai Paneer",
      name_hi: "कढ़ाई पनीर",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: 320,
      price_single: null,
      popular: true
    },
    {
      id: "chilli_paneer_gravy",
      name_en: "Chilli Paneer Gravy",
      name_hi: "चिल्ली पनीर ग्रेवी",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: 300,
      price_single: null,
      popular: true
    },
    {
      id: "chilli_paneer_dry",
      name_en: "Chilli Paneer Dry",
      name_hi: "चिल्ली पनीर ड्राई",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: 320,
      price_single: null,
      popular: true
    },
    {
      id: "paneer_butter_masala",
      name_en: "Paneer Butter Masala",
      name_hi: "पनीर बटर मसाला",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: 300,
      price_single: null,
      popular: true
    },
    {
      id: "paneer_do_pyaaza",
      name_en: "Paneer Do Pyaaza",
      name_hi: "पनीर दो प्याजा",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: 290,
      price_single: null,
      popular: true
    },
    {
      id: "paneer_bhurji",
      name_en: "Paneer Bhurji",
      name_hi: "पनीर भुर्जी",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: 350,
      price_single: null,
      popular: true
    },
    {
      id: "mix_veg",
      name_en: "Mix Veg",
      name_hi: "मिक्स वेज",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: 300,
      price_single: null,
      popular: false
    },
    {
      id: "dam_aloo",
      name_en: "Dam Aloo",
      name_hi: "दम आलू",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: 250,
      price_single: null,
      popular: false
    },
    {
      id: "aloo_jeera",
      name_en: "Aloo Jeera",
      name_hi: "आलू जीरा",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: 150,
      price_single: null,
      popular: false
    },
    {
      id: "dal_fry",
      name_en: "Dal Fry",
      name_hi: "दाल फ्राई",
      desc_en: "",
      desc_hi: "",
      price_half: 90,
      price_full: 150,
      price_single: null,
      popular: false
    },
    {
      id: "dal_tadka",
      name_en: "Dal Tadka",
      name_hi: "दाल तड़का",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: 200,
      price_single: null,
      popular: false
    }
  ],

  rice: [
    {
      id: "plain_rice",
      name_en: "Plain Rice",
      name_hi: "सादा चावल",
      desc_en: "",
      desc_hi: "",
      price_half: 50,
      price_full: 90,
      price_single: null,
      popular: false
    },
    {
      id: "jeera_rice",
      name_en: "Jeera Rice",
      name_hi: "जीरा राइस",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: 100,
      price_single: null,
      popular: false
    },
    {
      id: "veg_pulao",
      name_en: "Veg Pulao",
      name_hi: "वेज पुलाव",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: 180,
      price_single: null,
      popular: false
    },
    {
      id: "fried_rice",
      name_en: "Fried Rice",
      name_hi: "फ्राइड राइस",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: 180,
      price_single: null,
      popular: false
    },
    {
      id: "matar_pulao",
      name_en: "Matar Pulao",
      name_hi: "मटर पुलाव",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: 150,
      price_single: null,
      popular: false
    }
  ],

  roti: [
    {
      id: "tawa_roti",
      name_en: "Tawa Roti",
      name_hi: "सादी तवा रोटी",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: null,
      price_single: 12,
      popular: false
    },
    {
      id: "tawa_butter_roti",
      name_en: "Tawa Butter Roti",
      name_hi: "बटर तवा रोटी",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: null,
      price_single: 15,
      popular: false
    }
  ],

  thali: [
    {
      id: "regular_thali",
      name_en: "Regular Thali",
      name_hi: "रेगुलर थाली",
      desc_en: "4 Tawa Roti • Sabzi • Dal Fry • Chawal • Salad",
      desc_hi: "4 तवा रोटी • सब्जी • दाल फ्राई • चावल • सलाद",
      price_half: null,
      price_full: null,
      price_single: 150,
      popular: true
    },
    {
      id: "special_thali",
      name_en: "Special Thali",
      name_hi: "स्पेशल थाली",
      desc_en: "Shahi Paneer • Dal Fry • Sabzi • 4 Butter Roti • Chawal • Papad • Salad",
      desc_hi: "शाही पनीर • दाल फ्राई • सब्जी • 4 बटर रोटी • चावल • पापड़ • सलाद",
      price_half: null,
      price_full: null,
      price_single: 200,
      popular: true
    }
  ],

  extras: [
    {
      id: "raita",
      name_en: "Raita",
      name_hi: "रायता",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: null,
      price_single: 50,
      popular: false
    },
    {
      id: "green_salad",
      name_en: "Green Salad",
      name_hi: "हरा सलाद",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: null,
      price_single: 70,
      popular: false
    },
    {
      id: "papad",
      name_en: "Papad",
      name_hi: "पापड़",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: null,
      price_single: 15,
      popular: false
    },
    {
      id: "dahi",
      name_en: "Dahi",
      name_hi: "दही",
      desc_en: "",
      desc_hi: "",
      price_half: null,
      price_full: null,
      price_single: 70,
      popular: false
    }
  ]
};

// Category metadata for navigation
window.MENU_CATEGORIES = {
  breakfast: {
    id: "breakfast",
    name_en: "Breakfast",
    name_hi: "नाश्ता",
    icon: "☀️",
    desc_en: "Morning 7 AM - 11 AM",
    desc_hi: "सुबह 7 बजे - 11 बजे तक"
  },
  sabzi: {
    id: "sabzi",
    name_en: "Lunch / Dinner",
    name_hi: "सब्जियाँ",
    icon: "🍛",
    desc_en: "Main Course",
    desc_hi: "मुख्य व्यंजन"
  },
  rice: {
    id: "rice",
    name_en: "Rice",
    name_hi: "चावल",
    icon: "🍚",
    desc_en: "Rice Varieties",
    desc_hi: "चावल किस्में"
  },
  roti: {
    id: "roti",
    name_en: "Roti",
    name_hi: "रोटी",
    icon: "🫓",
    desc_en: "Breads",
    desc_hi: "रोटी"
  },
  thali: {
    id: "thali",
    name_en: "Thali",
    name_hi: "थाली",
    icon: "🍱",
    desc_en: "Complete Meals",
    desc_hi: "पूर्ण भोजन"
  },
  extras: {
    id: "extras",
    name_en: "Extras",
    name_hi: "अतिरिक्त",
    icon: "🥗",
    desc_en: "Sides & Accompaniments",
    desc_hi: "साइड डिश"
  }
};
