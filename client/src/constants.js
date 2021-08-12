/* eslint-disable import/no-anonymous-default-export */
const env = process.env.NODE_ENV || 'development';
const serverIP = 'localhost';
const serverPort = 3000;
export default {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE',
  CUSTOMER: 'customer',
  CREATOR: 'creator',
  CONTACT_US: {
    PHONE:"(877) 355-3585",
  },
  CONTEST_STATUS_ACTIVE: 'active',
  CONTEST_STATUS_FINISHED: 'finished',
  CONTEST_STATUS_PENDING: 'pending',
  NAME_CONTEST: 'name',
  LOGO_CONTEST: 'logo',
  TAGLINE_CONTEST: 'tagline',
  OFFER_STATUS_REJECTED: 'rejected',
  OFFER_STATUS_WON: 'won',
  OFFER_STATUS_PENDING: 'pending',
  STATIC_IMAGES_PATH: '/staticImages/',
  ANONYM_IMAGE_PATH: '/staticImages/anonym.png',
  BASE_URL: `http://${serverIP}:${serverPort}/api/`,
  ACCESS_TOKEN: 'accessToken',
  publicURL: env === 'production'
    ? `http://${serverIP}:80/images/`
    : `http://${serverIP}:${serverPort}/public/images/`,
  NORMAL_PREVIEW_CHAT_MODE: 'NORMAL_PREVIEW_CHAT_MODE',
  FAVORITE_PREVIEW_CHAT_MODE: 'FAVORITE_PREVIEW_CHAT_MODE',
  BLOCKED_PREVIEW_CHAT_MODE: 'BLOCKED_PREVIEW_CHAT_MODE',
  CATALOG_PREVIEW_CHAT_MODE: 'CATALOG_PREVIEW_CHAT_MODE',
  CHANGE_BLOCK_STATUS: 'CHANGE_BLOCK_STATUS',
  ADD_CHAT_TO_OLD_CATALOG: 'ADD_CHAT_TO_OLD_CATALOG',
  CREATE_NEW_CATALOG_AND_ADD_CHAT: 'CREATE_NEW_CATALOG_AND_ADD_CHAT',
  USER_INFO_MODE: 'USER_INFO_MODE',
  CASHOUT_MODE: 'CASHOUT_MODE',
  HEADER_ANIMATION_TEXT: [
    'a Company',
    'a Brand',
    'a Website',
    'a Service',
    'a Book',
    'a Business',
    'an App',
    'a Product',
    'a Startup',
  ],
  NAV_ITEMS: [
    {
      TITLE: 'Name Ideas',
      ITEMS: [
        'Beauty',
        'Consulting',
        'E-Commerce',
        'Fashion & Clothing',
       'Finance',
        'Real Estate',
        'Tech',
        'More Categories',
    ],
  },
   {
      TITLE: 'Contests',
      ITEMS: [
        'How It Works',
        'Pricing',
        'Agence Service',
        'Active Contests',
        'Winners',
        'LeaderBoard',
        'Become a Creative',
    ],
  },
    {
      TITLE: 'Our Work',
       ITEMS: [
        'Names',
        'Taglines',
        'Logos',
        'Testimonials',
  ],
},
    {
      TITLE: 'Names For Sale',
      ITEMS: [
        'Popular Names',
        'Short Names',
        'Intriguing Names',
        'Names By Category',
        'Visual Name Search',
        'Sell Your Domains',
    ],
    },
    {
      TITLE: 'Blog',
      ITEMS: [
        'Ultimate Naming Guide',
        'Poetic Devices In Business Naming',
        'Crowded Bar Theory',
        'All Articles',
    ],
  },
  ],
  FOOTER_ITEMS: [
    {
      TITLE: 'SQUADHELP',
      ITEMS: [
        'About',
        'Contact',
        'How It Works?',
        'Testimonials',
        'Our Work',
      ],
    },
    {
      TITLE: 'RESOURCES',
      ITEMS: [
        'How It Works',
        'Become a Creative',
        'Business Name Generator',
        'Discussion Forum',
        'Blog',
        'Download eBook',
        'Pricing',
        'Help & FAQs',
      ],
    },
    {
      TITLE: 'OUR SERVICES',
      ITEMS: [
        'Naming',
        'Logo Design',
        'Taglines',
        'Premium Names For Sale',
        'Creative Owned Names For Sale',
        'Audience Testing',
        'Trademark Research & Filling',
        'Managed Agency Service',
      ],
    },
    {
      TITLE: 'LEGAL',
      ITEMS: [
        'Terms of Service',
        'Privacy Policy',
        'Cookie Policy',
      ],
    },
  ],
};
