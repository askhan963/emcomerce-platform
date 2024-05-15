import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-bold">EcOm</div> {/* Logo */}
        <div className="text-center mt-2 md:mt-0">
          &copy; {new Date().getFullYear()} EcOm. All rights reserved.
        </div>
        <div className="text-center mt-2 md:mt-0">
          Made with <span className="text-red-500">&hearts;</span> by EcOm Team
        </div>
      </div>
    </footer>
  );
};

export default Footer;
