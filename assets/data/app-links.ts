import type { RouteLocationRaw } from 'vue-router';

interface AppLink {
  text: string;
  link: RouteLocationRaw;
  menu?: false | null;
}

interface AppLinkGroup {
  title: string;
  items: AppLink[];
  menu: true;
}

// type AppMenu = (AppLinkGroup | AppLink)[];

// ------------------------------------------

const PRODUCT: AppLink[] = [
  { text: 'Features', link: '/features' },
  { text: 'Platforms', link: '/platforms' },
  { text: 'Use Cases', link: '/uses' },
  { text: 'Pricing', link: '/pricing' },
];

const COMPANY: AppLink[] = [
  { text: 'About Us', link: '/about' },
  { text: 'Blog & News', link: '/blog-n-news' },
  { text: 'Press & Legal', link: '/customers' },
  { text: 'Contact Us', link: '/contact' },
];

const CTA: AppLink = { text: 'Sign In', link: '/enter' };

// ------------------------------------------

const headerMenu: (AppLinkGroup | AppLink)[] = [
  { title: 'Product', menu: true, items: PRODUCT },
  { title: 'Company', menu: true, items: COMPANY },
  CTA,
];

const mobileMenu = [
  { title: 'Product', menu: true, items: PRODUCT },
  { title: 'Company', menu: true, items: COMPANY },
];

// ------------------------------------------

export { headerMenu, mobileMenu };
