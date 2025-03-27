import React from "react";

const Logo = () => {
  const subdomain = window.location.hostname.split(".")[0]; // Get the subdomain

  const logos = {
    brandA: "https://upload.wikimedia.org/wikipedia/commons/7/75/BrandA_Logo.png",
    brandB: "https://upload.wikimedia.org/wikipedia/commons/b/bf/BrandB_Logo.png",
    brandC: "https://upload.wikimedia.org/wikipedia/commons/3/35/BrandC_Logo.png",
  };

  const logoSrc =
    logos[subdomain] ||
    "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"; // Default logo

  return (
    <div className="flex justify-center items-center p-4">
      <img
        src={logoSrc}
        alt={`${subdomain || "default"} logo`}
        className="h-16 w-auto max-w-full object-contain"
        aria-label={`Logo for ${subdomain || "default brand"}`}
      />
    </div>
  );
};

export default Logo;
