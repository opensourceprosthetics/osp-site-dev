

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
  primaryColor: '#0f8d78', // Default primary color
  search: {
    enabled: true,
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
    href: '/about',
    label: 'About',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
];

export const ACTION_LINKS = {
  primary: { 
	  label: 'Contact Us', 
	  href: '/contact' 
  },
  social: { 
    twitter: 'https://twitter.com/opensourceprosthetics',
    linkedin: 'https://linkedin.com/company/opensourceprosthetics',
    github: 'https://github.com/opensourceprosthetics',
    youtube: 'https://youtube.com/@opensourceprosthetics',
    facebook: 'https://facebook.com/opensourceprosthetics'
    
  }
};

export const FOOTER_LINKS = {
  company: {
    title: 'Company',
    links: [{ href: '/about', label: 'About' }],
  },
  services: {
    title: 'Services',
    links: [
      { href: '/contact', label: 'Contact', localize: false }
    ],
  },
};
