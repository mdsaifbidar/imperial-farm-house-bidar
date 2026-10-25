export const venue = {
  group: "Danish Group",
  established: "Estd. 1985",
  name: "Imperial Farm House",
  tagline: "An editorial garden estate for weddings & celebrations in Bidar",
  addressLine: "Near KP News Gunalli Road, Bidar, Karnataka",
  proprietor: "Syed Babar Hussain",
  phonePrimary: "9036741660",
  phoneSecondary: "8310504033",
  // Digits-only, with country code, for WhatsApp deep links — confirm with proprietor before launch.
  whatsappNumber: "919036741660",
  mapsQuery: "Imperial Farm House, KP News Gunalli Road, Bidar, Karnataka",
};

export const navLinks = [
  { id: "spaces", label: "Spaces" },
  { id: "gallery", label: "Gallery" },
  { id: "celebrations", label: "Celebrations" },
  { id: "amenities", label: "Amenities" },
  { id: "location", label: "Location" },
];

// Real stills of Imperial Farm House, pulled from the venue's own walkthrough
// video (see public/assets/gallery/real/ and ASSET_LICENSES.md).
export const galleryItems = [
  {
    src: "/assets/gallery/real/pool-day.jpg",
    caption: "The pool, late afternoon",
    size: "wide",
  },
  {
    src: "/assets/gallery/real/rooftop-glass-house.jpg",
    caption: "The rooftop glass house, after dark",
    size: "tall",
  },
  {
    src: "/assets/gallery/real/master-bedroom.jpg",
    caption: "One of the master bedrooms",
    size: "square",
  },
  {
    src: "/assets/gallery/real/function-deck.jpg",
    caption: "The covered deck, also set up for big functions",
    size: "square",
  },
  {
    src: "/assets/gallery/real/pool-night.jpg",
    caption: "The pool deck, lit up at night",
    size: "wide",
  },
  {
    src: "/assets/gallery/real/lounge.jpg",
    caption: "The lounge",
    size: "square",
  },
  {
    src: "/assets/gallery/real/big-pool.jpg",
    caption: "The pool, evening lighting",
    size: "tall",
  },
];

export const cinematicClip = {
  src: "https://videos.pexels.com/video-files/4328491/4328491-hd_1920_1080_30fps.mp4",
  line: "Every celebration here starts the same way — two families, one garden.",
};

export const spaces = [
  {
    id: "pool",
    title: "The Pool",
    description:
      "A big outdoor pool with its own deck — open to guests during a stay, lit up after dark.",
    image: "/assets/gallery/real/pool-day.jpg",
    stat: "Big pool",
  },
  {
    id: "rooftop",
    title: "Rooftop Glass House",
    description:
      "A glass-walled room on the roof, open sky above and the skyline on every side — the estate's signature space.",
    image: "/assets/gallery/real/rooftop-glass-house.jpg",
    stat: "Beautiful view",
  },
  {
    id: "function",
    title: "The Function Deck",
    description:
      "A covered, planted deck for seating and staging — also available on its own for big functions.",
    image: "/assets/gallery/real/function-deck.jpg",
    stat: "Also hosts big functions",
  },
];

export const stats = [
  { value: 1985, suffix: "", label: "Established", prefix: "Est. " },
  { value: 40, suffix: "+", label: "Years hosting celebrations" },
  { value: 1000, suffix: "+", label: "Guests at full capacity" },
  { value: 2, suffix: "", label: "Lawns & one banquet hall" },
];

// Pulled from the venue's own walkthrough video and its on-screen captions —
// see public/assets/gallery/real/. Anything not shown there is still marked
// for confirmation with the proprietor before publishing.
export const amenities = [
  { label: "Swimming pool", value: "Big outdoor pool", note: "lit for evening use" },
  { label: "Rooftop glass house", value: "Glass-walled rooftop room", note: "open skyline views" },
  { label: "Stay accommodation", value: "Premium 3 BHK", note: "master bedrooms with attached bath" },
  { label: "Kitchen", value: "Cooking utensils, fridge & oven" },
  { label: "Lounge", value: "AC lounge with TV & speakers" },
  { label: "Function deck", value: "Covered deck", note: "also available on its own for big functions" },
  { label: "Children's play area", value: "Dedicated outdoor play area" },
  { label: "Parking", value: "On-site parking for cars & buses", note: "confirm capacity with proprietor" },
  { label: "Power backup", value: "Generator backup", note: "confirm with proprietor before publishing" },
  { label: "Getting there", value: "3km from Bidar", note: "near Shahpur Gate, Gunalli Road" },
];

export const eventTypes = [
  {
    title: "Weddings & Receptions",
    description:
      "The lawn and hall together host the full arc of a wedding — baraat, nikah or pheras, and a reception for up to a thousand guests.",
  },
  {
    title: "Engagements & Sangeet",
    description:
      "Smaller gatherings sit comfortably in the garden or hall, with staging and lighting set up for an evening of music and dance.",
  },
  {
    title: "Corporate & Private Events",
    description:
      "Conferences, product launches and family celebrations are hosted with dedicated catering, seating and AV support.",
  },
];

export const testimonials = [
  {
    quote:
      "The lawn at golden hour did half the decorator's job for us. Guests were still talking about the string lights a month later.",
    name: "Ayesha & Imran",
    detail: "Wedding reception, 600 guests",
  },
  {
    quote:
      "In-house catering and the backup generator meant we never once had to think about logistics on the day.",
    name: "Fatima S.",
    detail: "Sangeet & engagement",
  },
  {
    quote:
      "Four decades of experience shows — the staff anticipated things we hadn't even thought to ask for.",
    name: "Danish R.",
    detail: "Corporate gala",
  },
];

export const faqs = [
  {
    q: "How do I check a date's availability?",
    a: "Send your event date and guest count on WhatsApp or call the proprietor directly — availability is confirmed the same day in most cases.",
  },
  {
    q: "Is outside catering or decor permitted?",
    a: "Danish Group offers in-house catering and decor; outside vendors can be discussed at the time of booking.",
  },
  {
    q: "Is accommodation available for the family?",
    a: "Yes, a limited number of guest rooms are available on-site for the hosting family — reserve these when you confirm your date.",
  },
];
