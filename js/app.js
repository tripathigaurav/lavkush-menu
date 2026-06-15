// Lavkush Restaurant - Digital Menu App
// Pure vanilla JavaScript - no dependencies

(function() {
  'use strict';

  // ================================
  // State Management
  // ================================
  
  const state = {
    currentLang: localStorage.getItem('menu-lang') || 'en',
    searchQuery: '',
    activeCategory: 'breakfast'
  };

  // ================================
  // Translation Dictionary
  // ================================
  
  const translations = {
    en: {
      restaurant_name: 'Lavkush Restaurant',
      location: '📍 Near Karsevakpuram, Ramghat Chauraha, Parikrama Marg, Ayodhya - 224123',
      search_placeholder: 'Search menu...',
      cat_breakfast: 'Breakfast',
      cat_sabzi: 'Lunch / Dinner',
      cat_rice: 'Rice',
      cat_roti: 'Roti',
      cat_thali: 'Thali',
      cat_extras: 'Extras',
      cat_breakfast_desc: 'Morning 7 AM - 11 AM',
      cat_sabzi_desc: 'Main Course',
      cat_rice_desc: 'Rice Varieties',
      cat_roti_desc: 'Breads',
      cat_thali_desc: 'Complete Meals',
      cat_extras_desc: 'Sides & Accompaniments',
      no_results_title: 'No items found',
      no_results_desc: 'Try a different search term',
      footer_pure_veg: 'Pure Veg Family Restaurant',
      footer_taste: 'Pure Taste, Excellent Service',
      half: 'Half',
      full: 'Full',
      popular: 'Popular',
      pure_veg_badge: '100% Pure Vegetarian',
      family_restaurant: 'Family Restaurant',
      opening_hours: '🕐 Open Daily: 7:00 AM - 11:00 PM'
    },
    hi: {
      restaurant_name: 'लवकुश रेस्टोरेंट',
      location: '📍 कर्सेवकपुरम, रामघाट चौराहा, परिक्रमा मार्ग, अयोध्या धाम - 224123 के पास',
      search_placeholder: 'मेन्यू खोजें...',
      cat_breakfast: 'नाश्ता',
      cat_sabzi: 'सब्जियाँ',
      cat_rice: 'चावल',
      cat_roti: 'रोटी',
      cat_thali: 'थाली',
      cat_extras: 'अतिरिक्त',
      cat_breakfast_desc: 'सुबह 7 बजे - 11 बजे तक',
      cat_sabzi_desc: 'मुख्य व्यंजन',
      cat_rice_desc: 'चावल किस्में',
      cat_roti_desc: 'रोटी',
      cat_thali_desc: 'पूर्ण भोजन',
      cat_extras_desc: 'साइड डिश',
      no_results_title: 'कोई आइटम नहीं मिला',
      no_results_desc: 'अलग खोज शब्द आज़माएं',
      footer_pure_veg: 'शुद्ध शाकाहारी पारिवारिक रेस्टोरेंट',
      footer_taste: 'स्वाद शुद्ध, सेवा उत्तम',
      half: 'हाफ',
      full: 'फुल',
      popular: 'लोकप्रिय',
      pure_veg_badge: '१००% शुद्ध शाकाहारी',
      family_restaurant: 'पारिवारिक रेस्टोरेंट',
      opening_hours: '🕐 प्रतिदिन खुला: सुबह 7:00 - रात 11:00'
    }
  };

  // ================================
  // DOM Elements
  // ================================
  
  const elements = {
    searchInput: document.getElementById('search-input'),
    searchClear: document.getElementById('search-clear'),
    noResults: document.getElementById('no-results'),
    langButtons: document.querySelectorAll('.lang-btn'),
    navTabs: document.querySelectorAll('.nav-tab'),
    menuSections: document.querySelectorAll('.menu-section')
  };

  // ================================
  // Utility Functions
  // ================================
  
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  function sanitizeText(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // ================================
  // Menu Rendering
  // ================================
  
  function renderMenuItem(item, category) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'menu-item';
    itemDiv.dataset.itemId = item.id;
    itemDiv.dataset.searchable = `${item.name_en.toLowerCase()} ${item.name_hi} ${item.desc_en?.toLowerCase() || ''} ${item.desc_hi || ''}`;
    
    // Add thali class for special styling
    if (category === 'thali') {
      itemDiv.classList.add('thali-item');
    }

    const name = state.currentLang === 'hi' ? item.name_hi : item.name_en;
    const desc = state.currentLang === 'hi' ? item.desc_hi : item.desc_en;
    
    let html = `
      <div class="menu-item-header">
        <h3 class="menu-item-title">${sanitizeText(name)}</h3>
        ${item.popular ? `<span class="popular-badge">${translations[state.currentLang].popular}</span>` : ''}
      </div>
    `;
    
    if (desc) {
      html += `<p class="menu-item-desc">${sanitizeText(desc)}</p>`;
    }
    
    html += '<div class="menu-item-prices">';
    
    if (item.price_single !== null) {
      html += `<span class="price-pill">₹${item.price_single}</span>`;
    } else {
      if (item.price_half !== null) {
        const halfLabel = translations[state.currentLang].half;
        html += `
          <span class="price-pill">
            <span class="price-label">${halfLabel}</span>
            ₹${item.price_half}
          </span>
        `;
      }
      if (item.price_full !== null) {
        const fullLabel = translations[state.currentLang].full;
        html += `
          <span class="price-pill">
            <span class="price-label">${fullLabel}</span>
            ₹${item.price_full}
          </span>
        `;
      }
    }
    
    html += '</div>';
    
    itemDiv.innerHTML = html;
    return itemDiv;
  }

  function renderCategory(categoryId) {
    const grid = document.getElementById(`${categoryId}-grid`);
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const items = window.MENU_DATA[categoryId];
    if (!items || items.length === 0) return;
    
    items.forEach((item, index) => {
      const itemElement = renderMenuItem(item, categoryId);
      // Stagger animation
      itemElement.style.animationDelay = `${index * 0.05}s`;
      grid.appendChild(itemElement);
    });
  }

  function renderAllCategories() {
    Object.keys(window.MENU_DATA).forEach(categoryId => {
      renderCategory(categoryId);
    });
  }

  // ================================
  // Language Toggle
  // ================================
  
  function updateTranslations() {
    const lang = state.currentLang;
    document.documentElement.lang = lang;
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
    
    // Update placeholder
    if (elements.searchInput) {
      elements.searchInput.placeholder = translations[lang].search_placeholder;
    }
    
    // Re-render menu to update item names
    renderAllCategories();
    
    // Re-apply search filter if active
    if (state.searchQuery) {
      filterMenu(state.searchQuery);
    }
  }

  function setLanguage(lang) {
    if (lang === state.currentLang) return;
    
    state.currentLang = lang;
    localStorage.setItem('menu-lang', lang);
    
    // Update active button
    elements.langButtons.forEach(btn => {
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    updateTranslations();
  }

  // ================================
  // Search & Filter
  // ================================
  
  function filterMenu(query) {
    state.searchQuery = query.toLowerCase().trim();
    
    // Show/hide clear button
    if (elements.searchClear) {
      if (state.searchQuery) {
        elements.searchClear.classList.add('visible');
      } else {
        elements.searchClear.classList.remove('visible');
      }
    }
    
    if (!state.searchQuery) {
      // Show all items and sections
      document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('hidden');
      });
      elements.menuSections.forEach(section => {
        section.classList.remove('hidden');
      });
      elements.noResults.style.display = 'none';
      return;
    }
    
    let hasVisibleItems = false;
    
    elements.menuSections.forEach(section => {
      const items = section.querySelectorAll('.menu-item');
      let sectionHasVisible = false;
      
      items.forEach(item => {
        const searchable = item.dataset.searchable || '';
        const matches = searchable.includes(state.searchQuery);
        
        if (matches) {
          item.classList.remove('hidden');
          sectionHasVisible = true;
          hasVisibleItems = true;
        } else {
          item.classList.add('hidden');
        }
      });
      
      // Show/hide section based on whether it has visible items
      if (sectionHasVisible) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }
    });
    
    // Show no results message
    if (elements.noResults) {
      elements.noResults.style.display = hasVisibleItems ? 'none' : 'block';
    }
  }

  const debouncedFilter = debounce(filterMenu, 200);

  // ================================
  // Navigation & Scroll
  // ================================
  
  function scrollToSection(categoryId) {
    const section = document.getElementById(`section-${categoryId}`);
    if (!section) return;
    
    const navEl = document.getElementById('category-nav');
    const searchEl = document.getElementById('search-container');
    const navHeight = (navEl?.offsetHeight || 0) + (searchEl?.offsetHeight || 0) + 8;
    const sectionTop = section.offsetTop - navHeight;
    
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  }

  function setActiveTab(categoryId) {
    state.activeCategory = categoryId;
    
    elements.navTabs.forEach(tab => {
      if (tab.dataset.category === categoryId) {
        tab.classList.add('active');
        // Scroll tab into view
        tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        tab.classList.remove('active');
      }
    });
  }

  // ================================
  // Intersection Observer for Nav
  // ================================
  
  function setupIntersectionObserver() {
    const observerOptions = {
      root: null,
      rootMargin: '-160px 0px -60% 0px',
      threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const categoryId = entry.target.dataset.category;
          if (categoryId) {
            setActiveTab(categoryId);
          }
        }
      });
    }, observerOptions);
    
    elements.menuSections.forEach(section => {
      observer.observe(section);
    });
  }

  // ================================
  // Event Listeners
  // ================================
  
  function setupEventListeners() {
    // Language toggle
    elements.langButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
      });
    });
    
    // Navigation tabs
    elements.navTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const categoryId = tab.dataset.category;
        scrollToSection(categoryId);
      });
    });
    
    // Search input
    if (elements.searchInput) {
      elements.searchInput.addEventListener('input', (e) => {
        debouncedFilter(e.target.value);
      });
    }
    
    // Search clear button
    if (elements.searchClear) {
      elements.searchClear.addEventListener('click', () => {
        if (elements.searchInput) {
          elements.searchInput.value = '';
          filterMenu('');
          elements.searchInput.focus();
        }
      });
    }
    
    // Smooth scroll for hero CTA
    const viewMenuBtn = document.querySelector('a[href="#menu"]');
    if (viewMenuBtn) {
      viewMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const menuSection = document.getElementById('menu');
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  // ================================
  // Initialization
  // ================================
  
  function init() {
    // Check if menu data is loaded
    if (!window.MENU_DATA) {
      console.error('Menu data not loaded!');
      return;
    }
    
    // Set initial language
    const initialLang = state.currentLang;
    elements.langButtons.forEach(btn => {
      if (btn.dataset.lang === initialLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    // Render all menu items
    renderAllCategories();
    
    // Update translations
    updateTranslations();
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup intersection observer for nav highlighting
    setupIntersectionObserver();
    
    // Show main content after render (splash handled by CSS animation)
    document.getElementById('main-content').style.opacity = '1';
  }

  // ================================
  // Start App
  // ================================
  
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
