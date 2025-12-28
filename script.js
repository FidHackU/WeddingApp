// ═══════════════════════════════════════════════════════════════════════════
// 💒 Wedding Website JavaScript - Multi-Page Navigation
// ═══════════════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  initializeContent();
  initializeCountdown();
  initializePageNavigation();
  initializeRSVPForm();
});

// ─────────────────────────────────────────────────────────────────────────────
// Multi-Page Navigation System
// ─────────────────────────────────────────────────────────────────────────────
function initializePageNavigation() {
  // Handle all navigation links with data-target attribute
  document.querySelectorAll('[data-target]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetPage = this.getAttribute('data-target');
      navigateToPage(targetPage);
    });
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', (e) => {
    const page = e.state?.page || 'home';
    navigateToPage(page, false);
  });

  // Set initial state
  history.replaceState({ page: 'home' }, '', '');
}

function navigateToPage(pageName, pushState = true) {
  const currentPage = document.querySelector('.page.active');
  const targetPage = document.querySelector(`.page[data-page="${pageName}"]`);

  if (!targetPage || currentPage === targetPage) return;

  // Add exiting animation to current page
  if (currentPage) {
    currentPage.classList.add('exiting');
    currentPage.classList.remove('active');
  }

  // Scroll to top
  window.scrollTo(0, 0);

  // Show target page after brief delay for transition
  setTimeout(() => {
    if (currentPage) {
      currentPage.classList.remove('exiting');
    }
    targetPage.classList.add('active');

    // Update URL if needed
    if (pushState) {
      const url = pageName === 'home' ? '' : `#${pageName}`;
      history.pushState({ page: pageName }, '', url || window.location.pathname);
    }
  }, 150);
}

// ─────────────────────────────────────────────────────────────────────────────
// Populate Content from Config
// ─────────────────────────────────────────────────────────────────────────────
function initializeContent() {
  // Update page title
  document.title = `${WEDDING.bride} & ${WEDDING.groom} - Wedding`;
  
  // Hero Section
  document.getElementById('brideName').textContent = WEDDING.bride;
  document.getElementById('groomName').textContent = WEDDING.groom;
  document.getElementById('heroDate').textContent = WEDDING.date;
  document.getElementById('heroLocation').textContent = `${WEDDING.city}, ${WEDDING.state}`;
  
  // Welcome Section
  if (WEDDING.welcomeTitle) {
    document.getElementById('welcomeTitle').textContent = WEDDING.welcomeTitle;
  }
  if (WEDDING.welcomeMessage) {
    document.getElementById('welcomeMessage').textContent = WEDDING.welcomeMessage;
  }
  
  // Schedule Section
  const scheduleList = document.getElementById('scheduleList');
  scheduleList.innerHTML = WEDDING.schedule.map(item => `
    <li class="schedule-item">
      <span class="schedule-time">${item.time}</span>
      <div class="schedule-details">
        <h3>${item.event}</h3>
        <p>${item.description}</p>
      </div>
    </li>
  `).join('');
  
  // Accommodations Section
  const accommodationList = document.getElementById('accommodationList');
  accommodationList.innerHTML = WEDDING.accommodations.map(hotel => `
    <div class="accommodation-card">
      <h3 class="accommodation-name">${hotel.name}</h3>
      <p class="accommodation-distance">${hotel.distance}</p>
      <div class="accommodation-details">
        <p>${hotel.address}</p>
        <p>${hotel.phone}</p>
        <p><a href="${hotel.website}" target="_blank">Book Now →</a></p>
      </div>
      <p class="accommodation-note">${hotel.note}</p>
    </div>
  `).join('');
  
  // Location Section
  document.getElementById('venueName').textContent = WEDDING.venueDetails.name;
  document.getElementById('venueAddress').textContent = WEDDING.venueDetails.address;
  document.getElementById('venueDirections').textContent = WEDDING.venueDetails.directions;
  document.getElementById('venueParking').textContent = WEDDING.venueDetails.parking;
  
  // RSVP Section
  if (WEDDING.rsvp.message) {
    document.getElementById('rsvpMessage').textContent = WEDDING.rsvp.message;
  }
  document.getElementById('rsvpDeadline').textContent = WEDDING.rsvp.deadline;
  
  // Footer - Update all footer names
  document.querySelectorAll('.footer-names').forEach(el => {
    el.textContent = `${WEDDING.bride} & ${WEDDING.groom}`;
  });
  const footerDate = document.getElementById('footerDate');
  if (footerDate) {
    footerDate.textContent = WEDDING.date;
  }
  
  // Apply custom theme colors if defined
  if (WEDDING.colors) {
    const root = document.documentElement;
    if (WEDDING.colors.background) root.style.setProperty('--color-bg', WEDDING.colors.background);
    if (WEDDING.colors.text) root.style.setProperty('--color-text', WEDDING.colors.text);
    if (WEDDING.colors.accent) root.style.setProperty('--color-accent', WEDDING.colors.accent);
  }

  // Handle initial page from URL hash
  const hash = window.location.hash.slice(1);
  if (hash && document.querySelector(`.page[data-page="${hash}"]`)) {
    setTimeout(() => navigateToPage(hash, false), 100);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Countdown Timer
// ─────────────────────────────────────────────────────────────────────────────
function initializeCountdown() {
  // Parse the wedding date
  const weddingDateStr = WEDDING.date; // e.g., "August 16, 2025"
  const weddingDate = new Date(weddingDateStr);
  
  // Set to noon on the wedding day
  weddingDate.setHours(12, 0, 0, 0);
  
  function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;
    
    if (diff <= 0) {
      document.getElementById('countdownDays').textContent = '0';
      document.getElementById('countdownHours').textContent = '0';
      document.getElementById('countdownMinutes').textContent = '0';
      document.getElementById('countdownSeconds').textContent = '0';
      return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('countdownDays').textContent = days.toString().padStart(3, '0');
    document.getElementById('countdownHours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('countdownMinutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('countdownSeconds').textContent = seconds.toString().padStart(2, '0');
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// ─────────────────────────────────────────────────────────────────────────────
// RSVP Form
// ─────────────────────────────────────────────────────────────────────────────
function initializeRSVPForm() {
  const form = document.getElementById('rsvpForm');
  const guestCountGroup = document.getElementById('guestCountGroup');
  const attendingRadios = document.querySelectorAll('input[name="attending"]');
  
  // Show/hide guest count based on attending selection
  attendingRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      guestCountGroup.style.display = e.target.value === 'yes' ? 'block' : 'none';
    });
  });
  
  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const rsvpData = {
      name: formData.get('guestName'),
      email: formData.get('guestEmail'),
      attending: formData.get('attending'),
      guestCount: formData.get('guestCount'),
      dietaryRestrictions: formData.get('dietaryRestrictions'),
      songRequest: formData.get('songRequest'),
      submittedAt: new Date().toISOString()
    };
    
    // Store in localStorage
    const existingRSVPs = JSON.parse(localStorage.getItem('weddingRSVPs') || '[]');
    existingRSVPs.push(rsvpData);
    localStorage.setItem('weddingRSVPs', JSON.stringify(existingRSVPs));
    
    // Show success message
    form.style.display = 'none';
    document.getElementById('rsvpSuccess').classList.add('show');
    
    console.log('RSVP submitted:', rsvpData);
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Utility Functions (for viewing RSVPs)
// ─────────────────────────────────────────────────────────────────────────────
function viewAllRSVPs() {
  const rsvps = JSON.parse(localStorage.getItem('weddingRSVPs') || '[]');
  console.table(rsvps);
  return rsvps;
}

function exportRSVPsToCSV() {
  const rsvps = JSON.parse(localStorage.getItem('weddingRSVPs') || '[]');
  if (rsvps.length === 0) {
    console.log('No RSVPs to export');
    return;
  }
  
  const headers = ['Name', 'Email', 'Attending', 'Guests', 'Dietary', 'Song', 'Date'];
  const rows = rsvps.map(r => [
    r.name, r.email, r.attending, r.guestCount || 'N/A',
    r.dietaryRestrictions || 'None', r.songRequest || 'None', r.submittedAt
  ]);
  
  const csvContent = [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'wedding-rsvps.csv';
  a.click();
  URL.revokeObjectURL(url);
}
