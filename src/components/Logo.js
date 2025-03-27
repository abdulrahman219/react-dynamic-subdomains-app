import React from 'react';

const Logo = () => {
  const subdomain = window.location.hostname.split('.')[0]; // Get the subdomain from the hostname

  const logos = {
    brandA: 'https://example.com/logoA.png',
    brandB: 'https://example.com/logoB.png',
    brandC: 'https://example.com/logoC.png',
  };

  const logoSrc = logos[subdomain] || 'https://example.com/defaultLogo.png'; // Default logo if subdomain not found

  return (
    <div>
      <img src={logoSrc} alt={`${subdomain} logo`} />
    </div>
  );
};

export default Logo;