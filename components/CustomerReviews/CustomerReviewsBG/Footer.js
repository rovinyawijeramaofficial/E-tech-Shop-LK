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
      className={`${poppins.className} backdrop-blur-lg z-30 px-6 md:px-12 py-6 border border-[#00000040]`} 
      style={{
        borderRadius: "20px",
        border: "0.5px solid rgba(0, 0, 0, 0.2)", 
        backdropFilter: "blur(20px)", 
        margin: "0 auto",
        width: "95vw",
        height: "24vw",
        maxWidth: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: "0.95",
      }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-8 p-4 md:p-8">
          {/* Logo and Copyright */}
          <div className="space-y-2 md:space-y-4 text-left ml-[-50px]">
            <h2 className="text-[32.82px] font-700 font-bold leading-[49.23px] text-black">Shop/lk</h2>
            <p className="text-[18px] font-400 leading-[27px] text-black w-[255px] h-[27px]">
              Copyright (C) 2022 | Shop/lk
            </p>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block w-px bg-[#000000] h-auto"></div>

          {/* First Links Section */}
          <div className="text-center md:text-left">
            <ul>
              <li><Link href="/home" className="text-[18px] leading-[67px] text-black hover:underline text-sm font-400">Home</Link></li>
              <li><Link href="/about-us" className="text-[18px] leading-[67px] text-black hover:underline text-sm font-400">About</Link></li>
              <li><Link href="/contact-us" className="text-[18px] leading-[67px] text-black hover:underline text-sm font-400">Contact</Link></li>
              <li><Link href="/privacypolicy" className="text-[18px] leading-[67px] text-black hover:underline text-sm font-400">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-[18px] leading-[67px] text-black hover:underline text-sm font-400">Terms and Conditions</Link></li>
            </ul>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block w-px bg-[#000000] h-auto"></div>

          {/* Second Links Section */}
          <div className="text-center md:text-left">
            <ul>
              <li><Link href="/cart" className="text-[18px] leading-[67px] text-black hover:underline text-sm font-400">Cart</Link></li>
              <li><Link href="/checkout" className="text-[18px] leading-[67px] text-black hover:underline text-sm font-400">My Account</Link></li>
              <li><Link href="/confirmation" className="text-[18px] leading-[67px] text-black hover:underline text-sm font-400">Order History</Link></li>
              <li><Link href="/tracking" className="text-[18px] leading-[67px] text-black hover:underline text-sm font-400">Order Tracking</Link></li>
            </ul>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block w-px bg-[#000000] h-auto"></div>

          {/* Contact Info */}
          <div className="space-y-8 text-center md:text-left">
            <div className="mt-3">
              <h3 className="text-[18px] leading-[37px] text-black font-bold text-sm">Call Us:</h3>
              <p className="text-[18px] leading-[46px] text-black text-sm font-400">0112 69 69 420</p>
              <p className="text-[18px] leading-[46px] text-black text-sm font-400">0112 69 69 420</p>
              <p className="text-[18px] leading-[46px] text-black text-sm font-400">0112 69 69 420</p>
            </div>
            <div>
              <h3 className="mt-1 text-[18px] leading-[37px] text-black font-bold text-sm">Email:</h3>
              <p className="text-[18px] leading-[46px] text-black text-sm font-400">info@shop.lk</p>
            </div>
          </div>
        </div>

        {/* Social Media Icons - Shown Only on Mobile */}
        <div className="flex md:hidden justify-center space-x-6 mt-4">
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
