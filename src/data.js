import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    // {
    //   text: 'Pages',
    //   links: [
    //     {
    //       text: 'Features',
    //       href: getPermalink('/#features'),
    //     },
    //     {
    //       text: 'Pricing',
    //       href: '#',
    //     },
    //     {
    //       text: 'About us',
    //       href: '#',
    //     },
    //     {
    //       text: 'Contact',
    //       href: '#',
    //     },
    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Über mich',
    //   href: getPermalink('/ueber-mich'),
    // },
    // {
    //   text: 'Projekte',
    //   href: getPermalink('/projekte'),
    // },
    // {
    //   text: 'Blog',
    //   href: getBlogPermalink(),
    // },
    // {
    //   text: 'Kontakt',
    //   href: getPermalink('/kontakt'),
    // },
  ],
  // actions: [{ type: 'button', text: 'Download CV', href: 'https://github.com/onwidget/astrowind' }],
};

export const footerData = {
  links: [
    // {
    //   // title: 'Product',
    //   links: [
    //     { text: 'Über mich', href: '#' },
    //     { text: 'Projekte', href: '#' },
    //     // { text: 'Blog', href: '#' },
    //     { text: 'Kontakt', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Platform',
    //   links: [
    //     { text: 'Developer API', href: '#' },
    //     { text: 'Partners', href: '#' },
    //     { text: 'Atom', href: '#' },
    //     { text: 'Electron', href: '#' },
    //     { text: 'AstroWind Desktop', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Support',
    //   links: [
    //     { text: 'Docs', href: '#' },
    //     { text: 'Community Forum', href: '#' },
    //     { text: 'Professional Services', href: '#' },
    //     { text: 'Skills', href: '#' },
    //     { text: 'Status', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Company',
    //   links: [
    //     { text: 'About', href: '#' },
    //     { text: 'Blog', href: '#' },
    //     { text: 'Careers', href: '#' },
    //     { text: 'Press', href: '#' },
    //     { text: 'Inclusion', href: '#' },
    //     { text: 'Social Impact', href: '#' },
    //     { text: 'Shop', href: '#' },
    //   ],
    // },
  ],
  secondaryLinks: [
    { text: 'Impressum', href: getPermalink('/impressum') },
    { text: 'Datenschutz', href: getPermalink('/datenschutz') },
  ],
  socialLinks: [
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:j.holzhaeuer@gmail.com' },
    { ariaLabel: 'Xing', icon: 'tabler:social', href: 'https://bit.ly/jh-xing' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://bit.ly/jh-linked-in' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://bit.ly/jh-github-profile' },
  ],
  footNote: `
    &copy; ${new Date().getFullYear()} Joscha Holzhäuer
  `,
};
