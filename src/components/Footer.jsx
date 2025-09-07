import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 body-font">
      <div className="container mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-center sm:text-left">
          © 2025 ReserveTable — All Rights Reserved.
        </p>
        <div className="flex mt-2 sm:mt-0 space-x-4">
          <a href="#" className="text-gray-500 hover:text-gray-700">Facebook</a>
          <a href="#" className="text-gray-500 hover:text-gray-700">Twitter</a>
          <a href="#" className="text-gray-500 hover:text-gray-700">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
