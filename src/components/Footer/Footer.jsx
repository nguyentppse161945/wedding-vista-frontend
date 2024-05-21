import React from 'react';

const footerLinks = [
  {
    title: 'WeddingWire',
    links: [
      { name: 'Weddings home', href: 'https://www.weddingwire.com/' },
      { name: 'About us', href: 'https://www.weddingwire.com/corp/about-us' },
      { name: 'Editorial team & policies', href: 'https://www.weddingwire.com/wedding-ideas/about-us' },
      { name: 'Nondiscrimination', href: 'https://www.theknotww.com/impact/' },
      { name: 'Careers', href: 'https://www.theknotww.com/careers/' },
      { name: 'Press center', href: 'https://www.theknotww.com/press-room/' },
      { name: 'Advertising', href: 'https://www.weddingwire.com/corp/advertise' },
      { name: 'Terms of use', href: 'https://www.weddingwire.com/corp/legal/terms-of-use' },
      { name: 'Privacy policy', href: 'https://www.weddingwire.com/corp/legal/privacy-policy' },
      { name: 'Do not sell my info', href: 'https://www.weddingwire.com/privacy/noSaleForm' },
      { name: 'CA privacy', href: 'https://www.weddingwire.com/ca-collection-notice' },
      { name: 'Web accessibility', href: 'https://www.weddingwire.com/accessibility-statement' },
    ],
  },
  {
    title: 'Find vendors',
    links: [
      { name: 'Directory', href: 'https://www.weddingwire.com/wedding-vendors' },
      { name: 'Reviews', href: 'https://www.weddingwire.com/vendor-reviews' },
      { name: "Couples' Choice Awards®", href: 'https://www.weddingwire.com/couples-choice-awards' },
      { name: 'Gay Weddings', href: 'https://www.weddingwire.com/gay-weddings' },
    ],
  },
  {
    title: 'Planning tools',
    links: [
      { name: 'Your wedding website', href: 'https://www.weddingwire.com/wedding-websites.html' },
      { name: 'Wedding invitations', href: '/wedding-paper/wedding-invitations' },
      { name: 'Checklist', href: 'https://www.weddingwire.com/wedding-checklists.html' },
      { name: 'Guest list', href: 'https://www.weddingwire.com/wedding-planning/wedding-guests-list.html' },
      { name: 'Budget', href: 'https://www.weddingwire.com/wedding-planning/wedding-budget.html' },
      { name: 'Vendor manager', href: 'https://www.weddingwire.com/wedding-planning/vendor-manager.html' },
      { name: 'Seating chart', href: 'https://www.weddingwire.com/wedding-planning/wedding-seating-tables.html' },
      { name: 'Hotel Blocks', href: 'https://hotelblocks.weddingwire.com/Group-Rate/?sc=WW_Footer&utm_source=weddingwire&utm_medium=onsite&utm_campaign=footer' },
      { name: 'Cost Guide', href: 'https://www.weddingwire.com/cost' },
      { name: 'Help', href: 'https://wedding-wire.zendesk.com' },
    ],
  },
  {
    title: 'More',
    links: [
      { name: 'Wedding planning app', href: 'https://www.weddingwire.com/wedding-apps' },
      { name: 'Hashtag generator', href: 'https://www.weddingwire.com/wedding-hashtag-generator' },
      { name: 'Wedding giveaways', href: 'https://go.weddingwire.com/giveaways' },
      { name: 'Wedding timeline', href: 'https://www.weddingwire.com/wedding-ideas/wedding-timeline' },
      { name: 'Color generator', href: 'https://go.weddingwire.com/color-palette-generator' },
      { name: 'Real Weddings', href: 'https://www.weddingwire.com/wedding-photos/real-weddings' },
      { name: 'Honeymoons', href: 'https://www.weddingwire.com/honeymoons' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <a href={link.href} className="text-gray-600 hover:text-gray-800">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600">© 2006 - 2024 The Knot Worldwide Inc.</div>
          <div className="flex mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">
              <i className="fab fa-pinterest fa-lg"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;