import React from 'react';
import SocialButtons from './SocialButtons';

const footerLinks = [
  {
    title: 'WeddingWire',
    links: [
      { name: 'Weddings home', href: '/' },
      { name: 'About us', href: '/' },
      { name: 'Editorial team & policies', href: '/' },
      { name: 'Nondiscrimination', href: '/' },
      { name: 'Careers', href: '/' },
      { name: 'Press center', href: '/' },
      { name: 'Advertising', href: '/' },
      { name: 'Terms of use', href: '/' },
      { name: 'Privacy policy', href: '/' },
      { name: 'Do not sell my info', href: '/' },
      { name: 'CA privacy', href: '/' },
      { name: 'Web accessibility', href: '/' },
    ],
  },
  {
    title: 'Find vendors',
    links: [
      { name: 'Directory', href: '/' },
      { name: 'Reviews', href: '/' },
      { name: "Couples' Choice Awards®", href: '/' },
    ],
  },
  {
    title: 'Planning tools',
    links: [
      { name: 'Your wedding website', href: '/' },
      { name: 'Wedding invitations', href: '/' },
      { name: 'Checklist', href: '/' },
      { name: 'Guest list', href: '/' },
      { name: 'Budget', href: '/' },
      { name: 'Vendor manager', href: '/' },
      { name: 'Seating chart', href: '/' },
      { name: 'Hotel Blocks', href: '' },
      { name: 'Cost Guide', href: '/' },
      { name: 'Help', href: '' },
    ],
  },
  {
    title: 'More',
    links: [
      { name: 'Wedding planning app', href: '/' },
      { name: 'Hashtag generator', href: '/' },
      { name: 'Wedding giveaways', href: '/' },
      { name: 'Wedding timeline', href: '/' },
      { name: 'Color generator', href: '/' },
      { name: 'Real Weddings', href: '/' },
      { name: 'Honeymoons', href: '/' },
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
          <div className="text-gray-600">© 2024 The Vista Wedding.</div>
          <div className="flex mt-4 md:mt-0">
          
        <SocialButtons/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;