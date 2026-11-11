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
  // Hidden until the founder bio arrives (brief §5.5).
  { label: 'Founder', href: '/founder/', draft: true },
  { label: 'Services', href: '/services/' },
  { label: 'Contact', href: '/contact/' },
];

export const visibleNav = nav.filter((item) => !item.draft);

export const founderPublished = false;

export const form = {
  endpoint: 'https://api.web3forms.com/submit',
  // Public-safe Web3Forms key. Replace before launch.
  accessKey: '[TBC: WEB3FORMS_ACCESS_KEY]',
  redirect: 'https://yugaarchitects.in/contact/thanks/',
  subject: 'New enquiry from yugaarchitects.in',
  projectTypes: [
    'Residential / Villa',
    'Commercial / Office',
    'Interiors',
    'Hospitality / Retail',
    'Renovation',
    'Other',
  ],
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
      '[TBC: Two or three sentences on architectural design: new homes, villas and workplaces, from first sketch to construction drawings.]',
  },
  {
    slug: 'interiors',
    title: 'Interior design',
    description:
      '[TBC: Two or three sentences on interior design: layouts, joinery, materials, lighting and furnishing.]',
  },
  {
    slug: 'renovation',
    title: 'Renovation & adaptive reuse',
    description:
      '[TBC: Two or three sentences on renovating and reworking existing buildings.]',
  },
  {
    slug: 'landscape',
    title: 'Landscape design',
    description:
      '[TBC: Two or three sentences on landscape design: courtyards, gardens and outdoor rooms.]',
  },
  {
    slug: 'consultation',
    title: 'Design consultation',
    description:
      '[TBC: Two or three sentences on one-off design consultations and site or plan reviews.]',
  },
  {
    slug: 'visualisation',
    title: '3D visualisation',
    description:
      '[TBC: Two or three sentences on 3D visualisation to help clients see the design before it is built.]',
  },
] as const;

export const process = [
  { title: 'Consultation', description: '[TBC: what happens at the first meeting.]' },
  { title: 'Concept', description: '[TBC: how the concept is developed and presented.]' },
  { title: 'Design development', description: '[TBC: refining plans, materials and details.]' },
  { title: 'Drawings & approvals', description: '[TBC: working drawings and statutory approvals.]' },
  {
    title: 'Through construction',
    description:
      '[TBC: confirm whether the studio offers periodic site visits or design support during construction, or ends at drawings.]',
  },
] as const;
