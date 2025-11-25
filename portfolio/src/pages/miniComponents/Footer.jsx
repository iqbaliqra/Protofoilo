import React from "react";

const Footer = () => {
  return (
    <footer className="px-5 sm:px-8 md:px-12 lg:px-16 py-12 w-full max-w-7xl mx-auto mt-16">
      <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent mb-8"></div>
      
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="gradient-text">Thanks For Scrolling</span>
        </h2>
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
