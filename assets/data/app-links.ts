import type { RouteLocationRaw } from 'vue-router';

interface AppLink {
  text: string;
  link: RouteLocationRaw;
  menu?: never;
  external?: boolean;
}

interface AppLinkGroup {
  title: string;
  items: AppLink[];
  menu: true;
}

// ------------------------------------------
const FAQS: AppLink = { text: 'FAQs', link: '/faqs' };
const CTA: AppLink = { text: 'Sign In', link: '/start' };
const USES: AppLink = { text: 'Use Cases', link: '/uses' };
const ABOUT: AppLink = { text: 'About Us', link: '/about' };
const NEWS: AppLink = { text: 'Blog & News', link: '/news' };
const POLICY: AppLink = { text: 'Fair Use', link: '/policy' };
const PRICING: AppLink = { text: 'Pricing', link: '/pricing' };
const TERMS: AppLink = { text: 'Terms of Use', link: '/terms' };
const PRESS: AppLink = { text: 'Press & Legal', link: '/press' };
const CONTACT: AppLink = { text: 'Contact Us', link: '/contact' };
const FEATURES: AppLink = { text: 'Features', link: '/features' };
const PLATFORMS: AppLink = { text: 'Platforms', link: '/platforms' };

const EMAIL: AppLink = {
  text: 'Email',
  link: 'mailto:me.mlaure@gmail.com',
  external: true,
};
const GITHUB: AppLink = {
  text: 'GitHub',
  link: 'https://github.com/ijkml/PennyPay',
  external: true,
};

// ------------------------------------------

const headerMenu: (AppLinkGroup | AppLink)[] = [
  { title: 'Product', menu: true, items: [FEATURES, PLATFORMS, USES, PRICING] },
  { title: 'Company', menu: true, items: [ABOUT, NEWS, PRESS, CONTACT] },
  CTA,
];

const mobileMenu = [
  { title: 'Product', items: [FEATURES, PLATFORMS, USES, PRICING, CONTACT] },
  { title: 'Company', items: [ABOUT, NEWS, PRESS] },
];

const footerMenu = [
  { title: 'PennyPay', items: [FEATURES, PLATFORMS, PRICING] },
  { title: 'Company', items: [ABOUT, NEWS, PRESS] },
  { title: 'Support', items: [FAQS, TERMS, POLICY] },
  { title: 'Contact', items: [GITHUB, EMAIL, CONTACT] },
];

// ------------------------------------------

export { headerMenu, mobileMenu, footerMenu };
