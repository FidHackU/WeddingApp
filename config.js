// ═══════════════════════════════════════════════════════════════════════════
// 💒 WEDDING CONFIGURATION - Edit all your wedding details here!
// ═══════════════════════════════════════════════════════════════════════════

const WEDDING = {
  // ─────────────────────────────────────────────────────────────────────────
  // 👫 COUPLE DETAILS
  // ─────────────────────────────────────────────────────────────────────────
  bride: "Sarah",
  groom: "Michael",

  // ─────────────────────────────────────────────────────────────────────────
  // 📅 DATE & LOCATION
  // ─────────────────────────────────────────────────────────────────────────
  date: "August 16, 2025",
  dayOfWeek: "Saturday",
  venue: "The Grand Estate",
  city: "Napa Valley",
  state: "California",

  // ─────────────────────────────────────────────────────────────────────────
  // 💌 WELCOME MESSAGE
  // ─────────────────────────────────────────────────────────────────────────
  welcomeTitle: "Welcome",
  welcomeMessage: `We are so excited to celebrate our special day with you! 
After years of love and adventure together, we're finally tying the knot 
and we can't imagine doing it without the people we love most.`,

  // ─────────────────────────────────────────────────────────────────────────
  // 📋 SCHEDULE OF EVENTS
  // ─────────────────────────────────────────────────────────────────────────
  schedule: [
    { time: "3:30 PM", event: "Guest Arrival", description: "Please arrive and find your seats" },
    { time: "4:00 PM", event: "Ceremony", description: "The Garden Pavilion" },
    { time: "5:00 PM", event: "Cocktail Hour", description: "The Terrace" },
    { time: "6:30 PM", event: "Reception", description: "The Grand Ballroom" },
    { time: "7:30 PM", event: "Dinner", description: "Followed by toasts" },
    { time: "9:00 PM", event: "Dancing", description: "Let's celebrate!" },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // 🏨 ACCOMMODATIONS
  // ─────────────────────────────────────────────────────────────────────────
  accommodations: [
    {
      name: "The Vintage Inn",
      address: "123 Wine Country Road, Napa Valley, CA",
      phone: "(707) 555-0100",
      website: "https://example.com",
      note: "Use code WEDDING2025 for special rate",
      distance: "5 minutes from venue"
    },
    {
      name: "Meadowbrook Hotel",
      address: "456 Valley View Drive, Napa Valley, CA",
      phone: "(707) 555-0200",
      website: "https://example.com",
      note: "Complimentary breakfast included",
      distance: "10 minutes from venue"
    }
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // 📍 VENUE DETAILS
  // ─────────────────────────────────────────────────────────────────────────
  venueDetails: {
    name: "The Grand Estate",
    address: "789 Vineyard Lane, Napa Valley, CA 94558",
    mapLink: "https://maps.google.com",
    directions: "From Highway 29, take the Oakville exit and continue east for 2 miles.",
    parking: "Complimentary valet parking will be available for all guests."
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 🎉 RSVP SETTINGS
  // ─────────────────────────────────────────────────────────────────────────
  rsvp: {
    deadline: "March 28, 2026",
    contactEmail: "hello@maybellineanddarrell.com",
    message: "We can't wait to celebrate with you!"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 🎨 THEME COLORS (Optional - modify to match your style)
  // ─────────────────────────────────────────────────────────────────────────
  colors: {
    primary: "#c9a87c",      // Gold/champagne
    secondary: "#8b7355",    // Warm brown
    accent: "#e8b4a0",       // Soft coral/peach
    background: "#faf8f5",   // Cream
    text: "#3d3d3d",         // Dark gray
    textLight: "#666666"     // Medium gray
  }
};
