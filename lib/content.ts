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

// Representative stock photography — swap for real photography of Imperial
// Farm House as soon as it is supplied. Local clips live in /public/assets;
// hotlinked ones are served directly from their CDN (no local copy needed).
export const galleryItems = [
  {
    src: "/assets/gallery/ceremony-lawn.jpg",
    caption: "Rows set on the lawn for a ceremony",
    size: "wide",
  },
  {
    src: "/assets/gallery/floral-aisle.jpg",
    caption: "Floral detail along the aisle",
    size: "tall",
  },
  {
    src: "/assets/gallery/string-lights.jpg",
    caption: "String lighting across the garden at dusk",
    size: "square",
  },
  {
    src: "/assets/gallery/reception-tables.jpg",
    caption: "Tables set for the reception",
    size: "square",
  },
  {
    src: "https://images.pexels.com/photos/32179374/pexels-photo-32179374.jpeg",
    caption: "A long table set the length of the garden",
    size: "wide",
  },
  {
    src: "/assets/gallery/garden-night.jpg",
    caption: "The garden after dark",
    size: "wide",
  },
  {
    src: "https://images.pexels.com/photos/36305352/pexels-photo-36305352.jpeg",
    caption: "A couple, golden hour, somewhere on the lawn",
    size: "tall",
  },
  {
    src: "/assets/gallery/cocktail-lawn.jpg",
    caption: "Cocktail tables on the open lawn",
    size: "square",
  },
  {
    src: "https://images.pexels.com/photos/32859443/pexels-photo-32859443.jpeg",
    caption: "Seating ready in the green of the garden",
    size: "square",
  },
  {
    src: "https://images.pexels.com/photos/38758629/pexels-photo-38758629.jpeg",
    caption: "The first dance, outdoors at twilight",
    size: "square",
  },
  {
    src: "/assets/gallery/banquet-hall.jpg",
    caption: "The banquet hall, ready for guests",
    size: "tall",
  },
  {
    src: "/assets/gallery/marquee-lawn.jpg",
    caption: "A marquee set on the front lawn",
    size: "square",
  },
];

export const cinematicClip = {
  src: "https://videos.pexels.com/video-files/4328491/4328491-hd_1920_1080_30fps.mp4",
  line: "Every celebration here starts the same way — two families, one garden.",
};

export const spaces = [
  {
    id: "lawn",
    title: "The Front Lawn",
    description:
      "Two acres of landscaped lawn for a baraat, a mandap, or a thousand chairs under open sky.",
    image: "/assets/gallery/ceremony-lawn.jpg",
    stat: "1,000 guests",
  },
  {
    id: "hall",
    title: "The Banquet Hall",
    description:
      "An air-conditioned hall for the reception once the sun goes down, or for the whole event during the day.",
    image: "/assets/gallery/banquet-hall.jpg",
    stat: "Climate controlled",
  },
  {
    id: "garden",
    title: "The Night Garden",
    description:
      "String lights and uplit trees carry the lawn into the evening — the estate's most photographed hour.",
    image: "/assets/gallery/garden-night.jpg",
    stat: "Golden hour onward",
  },
];

export const stats = [
  { value: 1985, suffix: "", label: "Established", prefix: "Est. " },
  { value: 40, suffix: "+", label: "Years hosting celebrations" },
  { value: 1000, suffix: "+", label: "Guests at full capacity" },
  { value: 2, suffix: "", label: "Lawns & one banquet hall" },
];

export const amenities = [
  { label: "Guest capacity", value: "Up to 1,000 guests", note: "lawn + hall combined — confirm exact figure" },
  { label: "Banquet hall", value: "Air-conditioned indoor hall" },
  { label: "Open lawns", value: "Landscaped front & rear lawns" },
  { label: "Parking", value: "On-site parking for cars & buses" },
  { label: "Catering", value: "In-house catering, multi-cuisine" },
  { label: "Decor", value: "Mandap, stage & floral decor on request" },
  { label: "Power backup", value: "Full-capacity generator backup" },
  { label: "Guest rooms", value: "Rooms available for family stay" },
  { label: "Sound & DJ", value: "In-house sound system, DJ on request" },
  { label: "Changing rooms", value: "Separate bridal & groom suites" },
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
