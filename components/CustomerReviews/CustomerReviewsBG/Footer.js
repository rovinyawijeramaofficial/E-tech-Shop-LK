import React from "react";
import Link from "next/link";
import CustomerReviewsBG from "../CustomerReviewsBG/CustomerReviewsBG";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Footer = ({ isHomePage = false }) => {
  const footerContent = (
    <footer
      className={`${poppins.className} backdrop-blur-lg z-30 px-4 lg:px-8 py-4 rounded-[25px] border border-[#00000080]`}
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
            <ul className="space-y-4">
              <li>
                <Link href="/home"className="hover:underline text-sm font-bold">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us"className="hover:underline text-sm font-bold">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:underline text-sm font-bold">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacypolicy" className="hover:underline text-sm font-bold">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/privacypolicy" className="hover:underline text-sm font-bold">
                  Terms And Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block w-px bg-[#000000] h-full"></div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li>
                <Link href="/cart" className="hover:underline text-sm font-bold">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="hover:underline text-sm font-bold">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/confirmation" className="hover:underline text-sm font-bold">
                  Order History
                </Link>
              </li>
              <li>
                <Link href="/confirmation" className="hover:underline text-sm font-bold">
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block w-px bg-[#000000] h-full"></div>

          {/* Contact Info */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="font-bold text-sm ">Call Us:</h3>
              <p className="text-sm font-bold ">0112 69 69 420</p>
              <p className="text-sm font-bold ">0112 69 69 420</p>
              <p className="text-sm font-bold ">0112 69 69 420</p>
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
