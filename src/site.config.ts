

export const siteConfig = {
  name: 'Open Source Prosthetics',
  description: '3D prosthetics for the world.',
  logo: {
    src: '/logo.svg',
    srcDark: '/logo-inverted.svg',       // Used when strategy is 'switch'
    alt: 'Open Source Prosthetics Logo',
    strategy: 'switch' as 'switch' | 'invert' | 'static', // 'invert' | 'switch' | 'static'
  },
  ogImage: '/og-image.webp',
  primaryColor: '#0f8d78', // Default primary color
  search: {
    enabled: false,
  },
 // announcement: {
 //   enabled: true,
 //   id: 'upgrade_v2_0_0', // Change this ID to reshow the banner
 //   link: '/changelog',
 //   localizeLink: true, // Set to true to apply i18n routing to the link, false for external/absolute links
 // },
  blog: {
    postsPerPage: 6,
  },
  contact: {
    email: {
      support: 'support@opensourceprosthetics.org',
      sales: 'sales@opensourceprosthetics.org',
    },
    phone: {
      main: '+27 62 544 0378',
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
    href: '/',
    label: 'Home'
  },
  {
    href: '/about',
    label: 'About Us'
  }
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
