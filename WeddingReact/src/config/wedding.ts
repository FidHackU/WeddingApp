// ═══════════════════════════════════════════════════════════════════════════
// 💒 WEDDING CONFIGURATION - Edit all your wedding details here!
// ═══════════════════════════════════════════════════════════════════════════

export const WEDDING = {
  // 👫 COUPLE DETAILS
  bride: "Maybelline",
  groom: "Darrell",

  // 📅 DATE & LOCATION
  date: "May 02, 2026",
  dayOfWeek: "Saturday",
  venue: "Hilton Hotel, KK, Sabah",
  city: "Kota Kinabalu",
  state: "Sabah",

  // 💌 WELCOME MESSAGE & OUR STORY
  welcomeTitle: "Our Story",
  welcomeMessage: `We met during a summer internship in San Francisco back in 2019. 
What started as coffee runs and late-night coding sessions turned into something 
much more special. After years of adventures across the globe, countless 
inside jokes, and unwavering support for each other's dreams, we're ready 
to start our greatest adventure yet - marriage!`,

  // 📋 SCHEDULE OF EVENTS
  schedule: [
    { time: "3:30 PM", event: "Guest Arrival", description: "Please arrive and find your seats" },
    { time: "4:00 PM", event: "Ceremony", description: "The Garden Pavilion" },
    { time: "5:00 PM", event: "Cocktail Hour", description: "The Terrace" },
    { time: "6:30 PM", event: "Reception", description: "The Grand Ballroom" },
    { time: "7:30 PM", event: "Dinner", description: "Followed by toasts" },
    { time: "9:00 PM", event: "Dancing", description: "Let's celebrate!" },
  ],

  // 👰🤵 WEDDING PARTY
  weddingParty: {
    bridesmaids: [
      { name: "Jessica Chen", role: "Maid of Honor", relation: "Bride's Sister" },
      { name: "Emily Rodriguez", role: "Bridesmaid", relation: "College Friend" },
      { name: "Sarah Kim", role: "Bridesmaid", relation: "Childhood Friend" },
    ],
    groomsmen: [
      { name: "Michael Wong", role: "Best Man", relation: "Groom's Brother" },
      { name: "David Park", role: "Groomsman", relation: "College Roommate" },
      { name: "James Liu", role: "Groomsman", relation: "Work Friend" },
    ],
  },

  // � REGISTRY
  registry: {
    message: "Your presence at our wedding is the greatest gift. However, if you wish to honor us with a gift, we've registered at the following places.",
    honeymoonFund: {
      title: "Wedding Gift",
      description: "Help us create unforgettable memories on our honeymoon to Japan!",
      goal: 5000,
    },
    items: [],
    externalLinks: []
  },

  // �🏨 ACCOMMODATIONS
  accommodations: [
    {
      name: "The Vintage Inn",
      address: "123 Wine Country Road, Napa Valley, CA",
      phone: "(707) 555-0100",
      website: "https://example.com",
      note: "Use code WEDDING2026 for special rate",
      distance: "5 minutes from venue",
      priceRange: "$200-300/night"
    },
    {
      name: "Meadowbrook Hotel",
      address: "456 Valley View Drive, Napa Valley, CA",
      phone: "(707) 555-0200",
      website: "https://example.com",
      note: "Complimentary breakfast included",
      distance: "10 minutes from venue",
      priceRange: "$150-250/night"
    },
    {
      name: "Napa Valley Lodge",
      address: "789 Vineyard Blvd, Napa Valley, CA",
      phone: "(707) 555-0300",
      website: "https://example.com",
      note: "Spa and pool on-site",
      distance: "15 minutes from venue",
      priceRange: "$180-280/night"
    }
  ],

  // ✈️ TRAVEL OPTIONS
  travel: {
    fly: [
      { name: "San Francisco International (SFO)", distance: "1 hour drive", description: "Major hub with most flight options" },
      { name: "Oakland International (OAK)", distance: "1 hour drive", description: "Often has cheaper flights" },
      { name: "Sacramento International (SMF)", distance: "1.5 hour drive", description: "Alternative option" },
    ],
    drive: {
      description: "Napa Valley is approximately 1 hour north of San Francisco via Highway 29.",
      mapLink: "https://maps.google.com"
    },
    train: {
      description: "Take BART to Richmond, then transfer to the Amtrak Capitol Corridor to Martinez, followed by a 45-minute drive.",
      scheduleLink: "https://www.amtrak.com"
    },
    shuttle: {
      description: "We're providing complimentary shuttles from downtown San Francisco on the wedding day.",
      pickupLocation: "Union Square, San Francisco",
      departureTime: "1:00 PM"
    }
  },

  // 📍 VENUE DETAILS & LOCAL RECOMMENDATIONS
  venueDetails: {
    name: "The Grand Estate",
    address: "789 Vineyard Lane, Napa Valley, CA 94558",
    mapLink: "https://maps.google.com",
    directions: "From Highway 29, take the Oakville exit and continue east for 2 miles.",
    parking: "Complimentary valet parking will be available for all guests.",
    description: "A stunning 100-acre estate nestled in the heart of wine country."
  },

  // 🍽️ LOCAL RECOMMENDATIONS
  recommendations: {
    eat: [
      { name: "The French Laundry", type: "Fine Dining", description: "World-renowned Michelin-star restaurant" },
      { name: "Bottega", type: "Italian", description: "Authentic Italian in beautiful courtyard setting" },
      { name: "Gott's Roadside", type: "Casual", description: "Classic American burgers and shakes" },
    ],
    drink: [
      { name: "Opus One Winery", type: "Wine Tasting", description: "Iconic Napa winery experience" },
      { name: "Castello di Amorosa", type: "Wine Tasting", description: "Medieval castle winery" },
      { name: "Be Bubbly", type: "Champagne Bar", description: "Sparkling wines and small bites" },
    ],
    do: [
      { name: "Hot Air Balloon Ride", type: "Adventure", description: "Sunrise flights over the valley" },
      { name: "Napa Valley Wine Train", type: "Experience", description: "Scenic train ride with wine tasting" },
      { name: "Oxbow Public Market", type: "Food Hall", description: "Local artisan food and crafts" },
    ],
    shop: [
      { name: "V Marketplace", type: "Boutiques", description: "Local shops and galleries" },
      { name: "Napa Premium Outlets", type: "Outlet Mall", description: "Designer brands at discount prices" },
      { name: "Yountville Art Walk", type: "Galleries", description: "Local artist galleries" },
    ]
  },

  // 🎉 RSVP SETTINGS
  rsvp: {
    deadline: "March 08, 2026",
    contactEmail: "darrell.maybelline.2026@email.com",
    message: "Please let us know if you'll be joining us for our special day!",
    rsvpEvents: ["Church", "Dinner Reception"],
    googleSheetsUrl: "https://script.google.com/macros/s/AKfycbyfuLntHMfXoj-Vqfgj-W2sDmScDL70CE6vqmJbEh6TEwy2jjsR4-Fbb6Dib92gTuid/exec"
  },

  // 🎨 THEME COLORS
  colors: {
    primary: "#c9a87c",
    secondary: "#8b7355",
    accent: "#e8b4a0",
    background: "#faf8f5",
    text: "#3d3d3d",
    textLight: "#666666"
  }
};
