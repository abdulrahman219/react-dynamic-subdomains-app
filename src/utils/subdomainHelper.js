export const getSubdomain = () => {
  const hostname = window.location.hostname;
  const subdomain = hostname.split('.')[0];
  return subdomain === 'www' ? '' : subdomain;
};

export const isValidSubdomain = (subdomain) => {
  const validSubdomains = ['store', 'blog', 'support']; // Add valid subdomains here
  return validSubdomains.includes(subdomain);
};