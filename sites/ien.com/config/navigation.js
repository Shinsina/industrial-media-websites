const mapSocialLinks = require('@industrial-media/package-shared/utils/map-nav-social-links');
const sortNavItems = require('@industrial-media/package-shared/utils/sort-nav-items');
const socialLinks = require('./social-links');


module.exports = {
  primary: {
    items: sortNavItems([
      { href: '/automation', label: 'Automation' },
      { href: '/finishing-world', label: 'Finishing World' },
      { href: '/operations', label: 'Operations' },
      { href: '/product-development', label: 'Product Development' },
      { href: '/new-products', label: 'New Products' },
      { href: '/safety', label: 'Safety' },
      { href: '/supply-chain', label: 'Supply Chain' },
      { href: '/software', label: 'Software' },
      { href: '/made-in-america', label: 'Made in America' },
    ]),
  },
  secondary: {
    items: [
      { href: '/newsletter-signup', label: 'Newsletter Signup' },
      { href: '/video', label: 'Video' },
      { href: '/podcast', label: 'Podcast' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
      { href: '/magazine', label: 'Magazine' },
    ],
  },
  tertiary: {
    items: [
      ...mapSocialLinks({ links: socialLinks, modifiers: ['social-icon'] }),
      { href: '/search', label: 'Search', icon: 'search' },
    ],
  },
  footer: {
    items: [
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
      { href: '/page/privacy-policy', label: 'Privacy Policy' },
      { href: '/page/terms-conditions', label: 'Terms & Conditions' },
      { href: 'https://www.manufacturing.net/page/CCPA', label: 'CA Consumer Privacy Act' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: sortNavItems([
        { href: '/advanced-manufacturing', label: 'Advanced Manufacturing' },
        { href: '/automation', label: 'Automation' },
        { href: '/finishing-world', label: 'Finishing World' },
        { href: '/operations', label: 'Operations' },
        { href: '/product-development', label: 'Product Development' },
        { href: '/new-products', label: 'New Products' },
        { href: '/safety', label: 'Safety' },
        { href: '/supply-chain', label: 'Supply Chain' },
        { href: '/food-beverage', label: 'Food & Beverage' },
      ]),
    },
    {
      label: 'Resources',
      items: [
        { href: '/video', label: 'Video' },
        { href: '/podcast', label: 'Podcast' },
        { href: '/software', label: 'Software' },
        { href: '/made-in-america', label: 'Made in America' },
        { href: '/magazine', label: 'Magazine' },
        { href: '/contact-us', label: 'Contact Us' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '/newsletter-signup', label: 'Newsletter Signup' },
        { href: 'https://tcc.dragonforms.com/loading.do?omedasite=TCC1_IEnew', label: 'Subscribe to Magazine', target: '_blank' },
        { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/privacy-policy', label: 'Privacy Policy' },
        { href: '/page/terms-conditions', label: 'Terms & Conditions' },
        { href: 'https://www.manufacturing.net/page/CCPA', label: 'CA Consumer Privacy Act' },
      ],
    },
  ],
};
