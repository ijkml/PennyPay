import {
  acceptPayIcon,
  globalPayIcon,
  heartIcon,
  investPayIcon,
  partnerIcon,
  pulseIcon,
  securePayIcon,
  subscribesIcon,
  twitterIcon,
  userGroupIcon,
} from '@icons';

export const features = [
  {
    title: 'Accept Payments',
    text: 'If you transition globally, you may also reintermediate magnetically.',
    icon: acceptPayIcon,
  },
  {
    title: 'Secure Wallet',
    text: "What does the commonly-accepted buzzword 'long-term' really mean?",
    icon: securePayIcon,
  },
  {
    title: 'Global Payout',
    text: 'That was Wintermute, it had manipulated the drifting shoals of waste.',
    icon: globalPayIcon,
  },
  {
    title: 'Invest & Earn',
    text: "We apply the proverb 'Look before you leap' to our power to repurpose.",
    icon: investPayIcon,
  },
  {
    title: 'Loyalty Programs',
    text: 'Case felt the edge of the blowers and the amplified breathing of the fighters.',
    icon: heartIcon,
  },
  {
    title: 'Income Flow Analysis',
    text: 'Still it was a long strange way home over the black water and the robot gardener.',
    icon: pulseIcon,
  },
];

const link2img = (nm: string) => {
  return `/images/brands/${nm}.svg`;
};

export const sproof = [
  { name: 'FliqPay', logo: link2img('fliqpay') },
  { name: 'Busha', logo: link2img('busha') },
  { name: 'Check DC', logo: link2img('check-dc') },
];

export const stats = [
  // { title: 'Founded', fig: '2022', icon: milestoneIcon },
  {
    title: 'Followers',
    fig: 100.1,
    suffix: 'k+',
    animate: true,
    icon: twitterIcon,
  },
  {
    title: 'Active Users',
    fig: 36.3,
    suffix: 'k+',
    animate: true,
    icon: userGroupIcon,
  },
  {
    title: 'Downloads',
    fig: 81,
    suffix: 'k+',
    animate: true,
    icon: subscribesIcon,
  },
  {
    title: 'Partners',
    fig: 513,
    suffix: '+',
    animate: true,
    icon: partnerIcon,
  },
];
