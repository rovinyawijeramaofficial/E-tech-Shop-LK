import React from "react";
import CustomerReviewsBG from "../CustomerReviewsBG/CustomerReviewsBG";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Footer = ({ isHomePage = false }) => {
  const footerContent = (
    <footer
      className={`${poppins.className}  w-[1840px]  h-[537px] backdrop-blur-lg z-30 px-4 lg:px-8 py-4 rounded-[25px] border border-[#00000080]`}
      style={{
        height: "337px",
        borderRadius: "20px",
        border: "0.5px solid rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(20px)",
        margin: "0 auto",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: "0.9",
      }}
    >
      <div className="container mx-auto px-12 md:px-20">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-8 p-16">
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
              <li>
                <a href="#" className="hover:underline text-sm font-bold">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm font-bold">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm font-bold">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm font-bold">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm font-bold">
                  Terms And Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block w-px bg-[#000000] h-full"></div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline text-sm font-bold">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm font-bold">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm font-bold">
                  Order History
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm font-bold">
                  Order Tracking
                </a>
              </li>
            </ul>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block w-px bg-[#000000] h-full"></div>

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

  return isHomePage ? (
    <CustomerReviewsBG>{footerContent}</CustomerReviewsBG>
  ) : (
    footerContent
  );
};

export default Footer;
