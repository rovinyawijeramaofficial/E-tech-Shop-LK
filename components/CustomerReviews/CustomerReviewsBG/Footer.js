import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Footer = () => {
  return (
    <footer
      className={`${poppins.className} backdrop-blur-lg z-30 px-6 md:px-12 py-6 rounded-[25px] border border-[#00000040]`} 
      style={{
        borderRadius: "20px",
        border: "0.5px solid rgba(0, 0, 0, 0.2)", // **Thinner border**
        backdropFilter: "blur(20px)", // **Fixed extreme blur issue**
        margin: "0 auto",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: "0.95",
        maxWidth: "1840px",
      }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-8 p-4 md:p-8">
          {/* Logo and Copyright */}
          <div className="space-y-2 md:space-y-4 text-center md:text-left">
            <h2 className="text-lg md:text-xl font-bold">Shop/lk</h2>
            <p className="text-sm font-medium">Copyright (C) 2022 | Shop/lk</p>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block w-px bg-[#00000040] h-auto"></div>

          {/* First Links Section */}
          <div className="text-center md:text-left space-y-2">
            <ul className="space-y-2">
              <li><Link href="/home" className="hover:underline text-sm font-medium">Home</Link></li>
              <li><Link href="/about-us" className="hover:underline text-sm font-medium">About</Link></li>
              <li><Link href="/contact-us" className="hover:underline text-sm font-medium">Contact</Link></li>
              <li><Link href="/privacypolicy" className="hover:underline text-sm font-medium">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:underline text-sm font-medium">Terms and Conditions</Link></li>
            </ul>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block w-px bg-[#00000040] h-auto"></div>

          {/* Second Links Section */}
          <div className="text-center md:text-left space-y-2">
            <ul className="space-y-2">
              <li><Link href="/cart" className="hover:underline text-sm font-medium">Cart</Link></li>
              <li><Link href="/checkout" className="hover:underline text-sm font-medium">My Account</Link></li>
              <li><Link href="/confirmation" className="hover:underline text-sm font-medium">Order History</Link></li>
              <li><Link href="/tracking" className="hover:underline text-sm font-medium">Order Tracking</Link></li>
            </ul>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block w-px bg-[#00000040] h-auto"></div>

          {/* Contact Info */}
          <div className="space-y-4 text-center md:text-left">
            <div className="space-y-2">
              <h3 className="font-bold text-sm">Call Us:</h3>
              <p className="text-sm font-medium">0112 69 69 420</p>
              <p className="text-sm font-medium">0112 69 69 420</p>
              <p className="text-sm font-medium">0112 69 69 420</p>
            </div>
            <div>
              <h3 className="font-bold text-sm">Email:</h3>
              <p className="text-sm font-medium">info@shop.lk</p>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-black">
            <img src="/images/FacebookBig.png" alt="Facebook" className="w-8 h-8" />
          </a>
          <a href="#" className="text-black">
            <img src="/images/TwitterBig.png" alt="Twitter" className="w-8 h-8" />
          </a>
          <a href="#" className="text-black">
            <img src="/images/LinkedInBig.png" alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="#" className="text-black">
            <img src="/images/InstagramBig.png" alt="Instagram" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
