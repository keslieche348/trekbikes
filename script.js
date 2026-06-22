// ===========================
// TREK BIKES — SCRIPT.JS
// ===========================

// ---- DATA ----
const allCards    = Array.from(document.querySelectorAll('.bike-card'));
const allSections = Array.from(document.querySelectorAll('.category-section'));
const filterBtns  = Array.from(document.querySelectorAll('.filter-btn'));
const searchInput = document.getElementById('search-input');
const noResults   = document.getElementById('no-results');
const resetBtn    = document.getElementById('reset-btn');
const countDisplay = document.getElementById('count-display');

let activeFilter = 'all';
let searchTerm   = '';

// ---- FILTER LOGIC ----
function applyFilter() {
  let visible = 0;

  allCards.forEach(card => {
    const cat   = card.dataset.cat || '';
    const tags  = (card.dataset.tags || '') + ' ' + (card.querySelector('.card-name')?.textContent || '').toLowerCase();
    const name  = (card.querySelector('.card-name')?.textContent || '').toLowerCase();
    const desc  = (card.querySelector('.card-desc')?.textContent || '').toLowerCase();
    const search = searchTerm.toLowerCase();

    const matchesCat    = activeFilter === 'all' || cat === activeFilter;
    const matchesSearch = search === '' ||
      name.includes(search) ||
      tags.includes(search) ||
      desc.includes(search);

    if (matchesCat && matchesSearch) {
      card.classList.remove('hide');
      visible++;
    } else {
      card.classList.add('hide');
    }
  });

  // Show/hide category section headers
  allSections.forEach(section => {
    const sectionCards = section.querySelectorAll('.bike-card:not(.hide)');
    section.style.display = sectionCards.length > 0 ? '' : 'none';
  });

  // Update count
  countDisplay.textContent = visible;

  // No results state
  noResults.style.display = visible === 0 ? 'flex' : 'none';
  noResults.style.flexDirection = 'column';
  noResults.style.alignItems = 'center';
}

// ---- FILTER BUTTONS ----
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    applyFilter();

    // Scroll to first visible section
    if (activeFilter !== 'all') {
      const targetSection = document.getElementById(`cat-${activeFilter}`);
      if (targetSection) {
        setTimeout(() => {
          const offset = 64 + 54 + 16; // navbar + filterbar + gap
          const top = targetSection.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }, 50);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});

// ---- SEARCH ----
searchInput.addEventListener('input', (e) => {
  searchTerm = e.target.value.trim();

  // Auto-switch to "all" when searching
  if (searchTerm && activeFilter !== 'all') {
    filterBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('[data-filter="all"]').classList.add('active');
    activeFilter = 'all';
  }

  applyFilter();
});

// Clear search on Escape
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    searchInput.value = '';
    searchTerm = '';
    applyFilter();
    searchInput.blur();
  }
});

// ---- RESET ----
resetBtn?.addEventListener('click', () => {
  searchInput.value = '';
  searchTerm = '';
  activeFilter = 'all';
  filterBtns.forEach(b => b.classList.remove('active'));
  document.querySelector('[data-filter="all"]').classList.add('active');
  applyFilter();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---- NAVBAR SCROLL SHADOW ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0 2px 16px rgba(0,0,0,0.08)';
  } else {
    navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)';
  }
}, { passive: true });

// ---- CARD ENTRANCE ANIMATION ON SCROLL ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

allCards.forEach((card, i) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = `opacity 0.4s ease ${i * 0.04}s, transform 0.4s ease ${i * 0.04}s, box-shadow 0.22s ease, border-color 0.22s ease`;
  observer.observe(card);
});

// ---- KEYBOARD SHORTCUT: "/" focuses search ----
document.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput.focus();
    searchInput.select();
  }
});

// ---- INIT COUNT ----
countDisplay.textContent = allCards.length;
