import type { AppLink } from '@/types/links';

const indexTab: AppLink[] = [
  { text: 'Features', to: '/features' },
  { text: 'Platforms', to: '/platforms' },
  { text: 'Use Cases', to: '/uses' },
];

const companyTab: AppLink[] = [
  { text: 'About Us', to: '/about' },
  { text: 'Our Blog', to: '/blog' },
  { text: 'Our Team', to: '/team' },
];

const supportTab: AppLink[] = [
  { text: 'FAQs', to: '/faqs' },
  { text: 'Terms & Policies', to: '/terms' },
  { text: 'Press & Legal', to: '/legal' },
];

const appFooterLinks = [
  {
    header: 'PennyPay',
    links: indexTab,
  },
  {
    header: 'Company',
    links: companyTab,
  },
  {
    header: 'Support',
    links: supportTab,
  },
  {
    header: 'Contact',
    links: [
      { text: '+1 386 135 3116', to: 'tel:+1-386-135-3116' },
      { text: 'hello@pennypay.io', to: 'mailto:me.mlaure@gmail.com' },
      { text: 'Contact Info', to: '' },
    ],
  },
];

const appNavLinks = [...indexTab];

export { appNavLinks, appFooterLinks };
