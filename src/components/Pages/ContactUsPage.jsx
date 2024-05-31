import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="w-full h-[170vh]">
      <iframe
        src="/src/components/contact-form-05/index.html"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Contact Us"
      ></iframe>
    </div>
  );
};

export default ContactUsPage;
