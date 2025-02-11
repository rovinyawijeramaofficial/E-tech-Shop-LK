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
  className={`${poppins.className} relative md:static transform md:scale-100`} // Removed other Tailwind classes, will add them back as needed
  style={{
    width: '95vw', // Keep vw for responsiveness
    maxWidth: '1840px', // Limit max width
    height: 'auto', // Let height adjust to content
    margin: '0 auto',
    borderRadius: '20px', // From image
    border: '0.5px solid rgba(0, 0, 0, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // #FFFFFF with 30% opacity, from image
    backdropFilter: 'blur(44px)', // From image
    opacity: '0.95',
    overflow: 'visible',
    padding: '1rem', // Adjust padding as needed
    boxSizing: 'border-box', // Ensure padding doesn't affect total width
  }}
>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:gap-8 p-2 md:p-8">
        <div className="space-y-2 md:space-y-4 text-center md:text-left mx-auto md:ml-[-50px]">
  <h2 className="mt-6 md:mt-0 text-[32.82px] font-700 font-bold leading-[49.23px] text-black">
    Shop/lk
  </h2>
  <p className="text-[18px] font-400 leading-[27px] text-black w-[255px] h-[27px] mx-auto md:mx-0">
    Copyright (C) 2022 | Shop/lk
  </p>
</div>

{/* Social Media */}
<div className="flex md:hidden justify-center space-x-6 mt-4">
          <a href="#" className="text-black">
            <img src="/images/FacebookBig.png" alt="Facebook" className="w-8 h-8" />
          </a>
          <a href="#" className="text-black">
            <img src="/images/TwitterBig.png" alt="Twitter" className="w-8 h-8" />
          </a>
          <a href="#" className="text-black">
            <img src="/images/InstagramBig.png" alt="Instagram" className="w-8 h-8" />
          </a>
          <a href="#" className="text-black">
            <img src="/images/LinkedInBig.png" alt="LinkedIn" className="w-8 h-8" />
          </a>
        </div>

      {/* Horizontal Line */}
<hr className="my-12 border-t-[0.6px] border-black w-[123.65px] mx-auto md:hidden" />


          <div className="mx-20 hidden md:flex flex-col items-center justify-center">
            <div className="w-px bg-[#000000] h-full"></div>
          </div>
          
          {/* (Only Desktop) */}
          <div className="hidden md:block text-left">
  <ul>
    <li>
      <Link href="/home" className="text-[18px] leading-[67px] text-black hover:underline text-sm font-400">
        Home
      </Link>
    </li>
    <li>
      <Link href="/about-us" className="text-[18px] leading-[67px] text-black hover:underline text-sm font-400">
        About
      </Link>
    </li>
    <li>
      <Link href="/contact-us" className="text-[18px] leading-[67px] text-black hover:underline text-sm font-400">
        Contact
      </Link>
    </li>
    <li>
      <Link href="/privacypolicy" className="text-[18px] leading-[67px] text-black hover:underline text-sm font-400">
        Privacy Policy
      </Link>
    </li>
    <li>
      <Link href="/terms" className="text-[18px] leading-[67px] text-black hover:underline text-sm font-400">
        Terms and Conditions
      </Link>
    </li>
  </ul>
</div>


          {/* Important Links Section (Only Mobile) */}
<div className="text-center md:hidden">
  <p className="-mt-5 text-[21.61px] leading-[40.82px] font-semibold text-[#000000] mx-auto">
    Important Links
  </p>
  <ul className="space-y-2">
    <li>
      <Link href="/home" className="text-[21.61px] leading-[40.82px] text-black font-normal">
        Home
      </Link>
    </li>
    <li>
      <Link href="/about-us" className="text-[21.61px] leading-[40.82px] text-black font-normal">
        About
      </Link>
    </li>
    <li>
      <Link href="/contact-us" className="text-[21.61px] leading-[40.82px] text-black font-normal">
        Contact
      </Link>
    </li>
    <li>
      <Link href="/privacypolicy" className="text-[21.61px] leading-[40.82px] text-black font-normal">
        Privacy Policy
      </Link>
    </li>
    <li>
      <Link href="/terms" className="text-[21.61px] leading-[40.82px] text-black font-normal">
        Terms And Conditions
      </Link>
    </li>
  </ul>
</div>

{/* Horizontal Line */}
<hr className="my-10 border-t-[0.6px] border-black w-[123.65px] mx-auto md:hidden" />

          <div className="hidden md:flex flex-col items-center justify-center">
            <div className="w-px bg-[#000000] h-full"></div>
          </div>


          {/* Hide this section on mobile, show on desktop */}
<div className="hidden md:block text-left mx-8">
  <ul>
    <li>
      <Link href="/cart" className="text-[18px] leading-[67px] text-black hover:underline text-sm font-400">
        Cart
      </Link>
    </li>
    <li>
      <Link href="/checkout" className="text-[18px] leading-[67px] text-black hover:underline text-sm font-400">
        My Account
      </Link>
    </li>
    <li>
      <Link href="/confirmation" className="text-[18px] leading-[67px] text-black hover:underline text-sm font-400">
        Order History
      </Link>
    </li>
    <li>
      <Link href="/tracking" className="text-[18px] leading-[67px] text-black hover:underline text-sm font-400">
        Order Tracking
      </Link>
    </li>
  </ul>
</div>


                    {/* Important Links Section (Only Mobile) */}
<div className="text-center md:hidden">
  <p className="-mt-5 text-[21.61px] leading-[40.82px] font-semibold text-[#000000] mx-auto">
    Accounts
  </p>
  <ul className="space-y-2">
    <li>
      <Link href="/cart" className="text-[21.61px] leading-[40.82px] text-black font-normal">
      Cart
      </Link>
    </li>
    <li>
      <Link href="/checkout" className="text-[21.61px] leading-[40.82px] text-black font-normal">
      My Account
      </Link>
    </li>
    <li>
      <Link href="/confirmation" className="text-[21.61px] leading-[40.82px] text-black font-normal">
      Order History
      </Link>
    </li>
    <li>
      <Link href="/tracking" className="text-[21.61px] leading-[40.82px] text-black font-normal">
      Order Tracking
      </Link>
    </li>
  </ul>
</div>

    {/* Horizontal Line */}
    <hr className="my-10 border-t-[0.6px] border-black w-[123.65px] mx-auto md:hidden" />

          <div className="mx-20 hidden md:flex flex-col items-center justify-center">
            <div className="w-px bg-[#000000] h-full"></div>
          </div>


          {/* Contact Info - Hidden on Mobile, Visible on Desktop */}
<div className="hidden md:block space-y-8 text-left">
  <div className="mt-3 w-full">
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


                   {/* Important Links Section (Only Mobile) */}
<div className="text-center md:hidden">
  <p className="-mt-5 text-[21.61px] leading-[40.82px] font-semibold text-[#000000] mx-auto">
  Call Us:
  </p>
  <ul className="space-y-2">
    <li>
      <Link href="/contact-us" className="text-[21.61px] leading-[40.82px] text-black font-normal">
      0112 69 69 420
      </Link>
    </li>
    <li>
      <Link href="/contact-us" className="text-[21.61px] leading-[40.82px] text-black font-normal">
      0112 69 69 420
      </Link>
    </li>
    <li>
      <Link href="/contact-us" className="text-[21.61px] leading-[40.82px] text-black font-normal">
      0112 69 69 420
      </Link>
    </li>
  </ul>
</div>

  {/* Horizontal Line */}
  <hr className="my-10 border-t-[0.6px] border-black w-[123.65px] mx-auto md:hidden" />


                     {/* Important Links Section (Only Mobile) */}
<div className="text-center md:hidden">
  <p className="-mt-5 text-[21.61px] leading-[40.82px] font-semibold text-[#000000] mx-auto">
  Email:
  </p>
  <ul className="space-y-2">
    <li>
      <Link href="/contact-us" className="text-[21.61px] leading-[40.82px] text-black font-normal">
      info@shop.lk
      </Link>
    </li>
  </ul>
</div>


<div className="mt-10 md:mt-0 "></div>

        </div>
      
      </div>
    </footer>
  );
};

export default Footer;
