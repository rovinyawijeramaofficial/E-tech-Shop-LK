import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#f5f0e8] to-[#eae1d7] text-[#5a3d2b] py-20">
      <div className="container mx-auto px-12 md:px-20">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-8 border border-[#5a3d2b] rounded-lg p-16">
          {/* Logo and Copyright */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold">Shop/lk</h2>
            <p className="text-sm font-bold">Copyright (C) 2022 | Shop/lk</p>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block w-px bg-[#000000] h-full"></div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline text-sm font-bold">Home</a></li>
              <li><a href="#" className="hover:underline text-sm font-bold">About</a></li>
              <li><a href="#" className="hover:underline text-sm font-bold">Contact</a></li>
              <li><a href="#" className="hover:underline text-sm font-bold">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline text-sm font-bold">Terms And Conditions</a></li>
            </ul>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block w-px bg-[#5a3d2b] h-full"></div>

          <div className="grid grid-cols-2 gap-8">
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline text-sm font-bold">Cart</a></li>
              <li><a href="#" className="hover:underline text-sm font-bold">My Account</a></li>
              <li><a href="#" className="hover:underline text-sm font-bold">Order History</a></li>
              <li><a href="#" className="hover:underline text-sm font-bold">Order Tracking</a></li>
            </ul>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block w-px bg-[#5a3d2b] h-full"></div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-sm">Call Us:</h3>
              <p className="text-sm font-bold">0112 69 69 420</p>
              <p className="text-sm font-bold">0112 69 69 420</p>
              <p className="text-sm font-bold">0112 69 69 420</p>
            </div>
            <div>
              <h3 className="font-bold text-sm">Email:</h3>
              <p className="text-sm font-bold">info@shop.lk</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
