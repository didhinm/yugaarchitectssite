// Single source of truth for firm facts. Never hard-code these in components.

export const site = {
  name: 'Yuga Architects',
  subline: 'Ar. Reshmi Ravindran',
  founder: 'Ar. Reshmi Ravindran',
  tagline: 'Unearthing your dreams',
  url: 'https://yugaarchitects.in',
  description:
    'Yuga Architects is an architecture and interiors studio in Palakkad, Kerala, designing calm, carefully detailed homes and workplaces across India and the UAE.',
  practiceArea: 'Projects across India and the UAE',
  locale: 'en_IN',
} as const;

export const contact = {
  email: 'yugaarchitects01@gmail.com',
  whatsapp: {
    display: '+91 73059 92045',
    href: 'https://wa.me/917305992045',
  },
  phoneIndia: {
    display: '+91 62382 82925',
    href: 'tel:+916238282925',
    e164: '+916238282925',
  },
  phoneUae: {
    display: '+971 56 593 9195',
    href: 'tel:+971565939195',
    e164: '+971565939195',
  },
  instagram: {
    handle: '@yuga.architects',
    href: 'https://www.instagram.com/yuga.architects',
  },
  visits: 'Studio visits by appointment only.',
} as const;

export const address = {
  street: '20/160, Edayar Street 3',
  locality: 'Palakkad',
  region: 'Kerala',
  postalCode: '678001',
  country: 'India',
  countryCode: 'IN',
  // Approximate centre of Palakkad town; refine when the exact pin is confirmed.
  geo: { latitude: 10.7867, longitude: 76.6548 },
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=20%2F160%2C+Edayar+Street+3%2C+Palakkad%2C+Kerala+678001',
} as const;

export const hours = {
  display: 'Mon–Sat, 9:00–17:00 IST',
  days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  opens: '09:00',
  closes: '17:00',
} as const;

export type NavItem = { label: string; href: string; draft?: boolean };

export const nav: NavItem[] = [
  { label: 'Projects', href: '/projects/' },
  { label: 'Studio', href: '/studio/' },
  { label: 'Founder', href: '/founder/' },
  { label: 'Services', href: '/services/' },
  { label: 'Contact', href: '/contact/' },
];

export const visibleNav = nav.filter((item) => !item.draft);

export const founderPublished = true;

export const form = {
  endpoint: 'https://api.web3forms.com/submit',
  // Web3Forms access key. Public-safe by design: it only lets people send enquiries to the studio inbox.
  accessKey: 'e8d15d37-7ddf-4ce0-90fc-dd1a12ae6e0e',
  // Path only; ContactForm turns it into an absolute URL on the deployed site.
  redirectPath: '/contact/thanks/',
  subject: 'New enquiry from the Yuga Architects website',
  projectTypes: [
    'Residential / Villa',
    'Commercial / Office',
    'Interiors',
    'Hospitality / Retail',
    'Renovation',
    'Other',
  ],
  /** Project types that show the "Approx. area (sq ft)" field. */
  areaForTypes: ['Residential / Villa', 'Interiors', 'Renovation'],
  timelines: [
    'As soon as possible',
    'Within 3 months',
    '3–6 months',
    '6–12 months',
    'More than a year',
    'Not sure yet',
  ],
} as const;

export const services = [
  {
    slug: 'architecture',
    title: 'Architectural design',
    description:
      'Homes, villas and workplaces designed from the first site visit to a complete set of drawings. Every design begins with how you live and work, and responds to the site, the climate and the way light and air move through it.',
  },
  {
    slug: 'interiors',
    title: 'Interior design',
    description:
      'Interiors conceived together with the architecture, so layouts, joinery, materials and lighting feel part of one idea. The result is a space that is functional, comfortable and beautiful to live in, with every detail considered.',
  },
  {
    slug: 'renovation',
    title: 'Renovation & adaptive reuse',
    description:
      'New life for existing homes and buildings, from reworking layouts to opening rooms up to daylight and natural ventilation. We look carefully at what is worth keeping, and design around it.',
  },
  {
    slug: 'landscape',
    title: 'Landscape design',
    description:
      'Courtyards, gardens, terraces and verandahs that extend the home outdoors. Planting and outdoor spaces are designed with the building, bringing greenery, shade and breeze into everyday life.',
  },
  {
    slug: 'consultation',
    title: 'Design consultation',
    description:
      'Focused advice when you need a clear direction: a review of your site, a plan or an idea before you commit. It is also a simple way to begin a conversation with the studio.',
  },
  {
    slug: 'visualisation',
    title: '3D visualisation',
    description:
      'Realistic 3D views of the design, so you can see the spaces, materials and light before anything is built. They make decisions easier and help everyone involved share the same picture.',
  },
] as const;

export const process = [
  {
    title: 'Consultation',
    description: 'We meet to understand your brief, your site and how you want to live or work in the space.',
  },
  {
    title: 'Concept',
    description: 'First design ideas, from layout to overall character, developed and refined together with you.',
  },
  {
    title: 'Design development',
    description: 'Plans, elevations, materials, light and ventilation worked through in detail until everything fits together.',
  },
  { title: 'Drawings', description: 'A clear, complete set of drawings to build the design from.' },
  {
    title: 'Through construction',
    description: 'Design supervision on site as the building takes shape, so it is built the way it was designed.',
  },
] as const;
