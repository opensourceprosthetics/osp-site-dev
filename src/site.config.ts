

export const siteConfig = {
  name: 'Open Source Prosthetics',
  description: '3D Printed Prosthetics for the world.',
  logo: {
    src: '/logo.svg',
    srcDark: '/logo-inverted.svg',       // Used when strategy is 'switch'
    alt: 'OSP Logo',
    strategy: 'switch' as 'switch' | 'invert' | 'static', // 'invert' | 'switch' | 'static'
  },
  ogImage: '/og-image.webp',
  primaryColor: '#00008B', // Default primary color
  search: {
    enabled: true,
  },
  announcement: {
    enabled: true,
    id: 'upgrade_v2_0_0', // Change this ID to reshow the banner
    link: '/changelog',
    localizeLink: true, // Set to true to apply i18n routing to the link, false for external/absolute links
  },
  blog: {
    postsPerPage: 6,
  },
  contact: {
    email: {
      support: 'support@opensourceprosthetics.org',
      sales: 'sales@opensourceprosthetics.org',
    },
    phone: {
      main: '+27 123-4567',
      label: 'Mon-Fri 9am-6pm PST'
    },
    address: {
      city: 'Midrand',
      full: 'Johannesburg, South Africa'
    }
  },
  analytics: {
    alwaysLoad: import.meta.env.ANALYTICS_ALWAYS_LOAD === 'true',
    vendors: {
      googleAnalytics: {
        id: import.meta.env.GA_ID || '',
        enabled: import.meta.env.GA_ENABLED === 'true',
      },
      rybbit: {
        id: import.meta.env.RYBBIT_ID || '',
        src: import.meta.env.RYBBIT_SRC || 'https://rybbit.example.com/api/script.js',
        enabled: import.meta.env.RYBBIT_ENABLED === 'true',
      },
      umami: {
        id: import.meta.env.UMAMI_ID || '',
        src: import.meta.env.UMAMI_SRC || 'https://analytics.umami.is/script.js',
        enabled: import.meta.env.UMAMI_ENABLED === 'true',
      },
    },
  },
  dateOptions: {
    localeMapping: {
        'ar': 'ar-TN', // Force Maghreb Arabic date format (e.g., جانفي instead of يناير)
        'en': 'en-GB', // Example: Force UK English date format
    }
  }
};

export const NAV_LINKS = [
  { 
    href: '/features', 
    label: 'Product',
    children: [
        { href: '/features', label: 'Features', description: 'What makes us different', icon: 'Zap' },
        { href: '/pricing', label: 'Pricing', description: 'Plans for every team', icon: 'CreditCard' },
    ]
  },
  { 
    href: '/docs', 
    label: 'Resources',
    children: [
        { href: '/docs/getting-started', label: 'Docs', description: 'Start building today', icon: 'Book', localize: false },
        { href: '/blog', label: 'Blog', description: 'Latest updates & guides', icon: 'Newspaper' },
        { href: '/changelog', label: 'Changelog', description: 'New features & fixes', icon: 'FileClock' },
    ]
  },
  { 
    href: '/portfolio', 
    label: 'Work',
    children: [
        { href: '/portfolio', label: 'All Projects', description: 'Our complete portfolio', icon: 'LayoutGrid' },
        { href: '/design', label: 'Design System', description: 'Style guide & tokens', icon: 'Palette' },
    ]
  },
  {
    href: '/about',
    label: 'Company',
    children: [
        { href: '/about', label: 'About', description: 'Our story & mission', icon: 'Building2' },
        { href: '/contact', label: 'Contact', description: 'Get in touch with us', icon: 'Mail' },
    ]
  },
  {
    href: '/demo/home-centered',
    label: 'Demos',
    localize: false,
    children: [
        { href: '/demo/home-centered', label: 'Home Centered', description: 'Default centered hero', icon: 'LayoutTemplate', localize: false },
        { href: '/demo/home-split', label: 'Home Split', description: 'Split-screen hero with orbit visual', icon: 'Columns2', localize: false },
        { href: '/demo/home-cinematic', label: 'Home Cinematic', description: 'Full-bleed cinematic hero', icon: 'Film', localize: false },
        { href: '/demo/home-terminal', label: 'Home Terminal', description: 'Mission-readout hero with stats', icon: 'Terminal', localize: false },
    ]
  },
];

export const ACTION_LINKS = {
  primary: { label: 'Get Started', href: '/docs/getting-started' },
  social: { 
    twitter: 'https://twitter.com/opensourceprosthetics',
    linkedin: 'https://linkedin.com/company/opensourceprosthetics',
    github: 'https://github.com/opensourceprosthetics',
    youtube: 'https://youtube.com/@opensourceprosthetics',
    facebook: 'https://facebook.com/opensourceprosthetics'
    
  }
};

export const FOOTER_LINKS = {
  product: {
    title: 'Product',
    links: [
      { href: '/features', label: 'Features' },
      { href: '/about', label: 'About' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/changelog', label: 'Changelog' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy', localize: false },
      { href: '/terms', label: 'Terms', localize: false }
    ],
  },
};
