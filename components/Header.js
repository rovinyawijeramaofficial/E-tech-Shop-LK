import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-[#5a3d2b] to-[#b58c5b] text-white py-4 px-8 rounded-[20px] z-50">
      <div className="container mx-auto flex justify-between items-center z-50">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Shop/<span>lk</span>
        </Link>

        {/* Search Bar */}
        <div className="flex flex-grow mx-8 items-center bg-[#d6c1a5] rounded-[20px] overflow-hidden">
          <input
            type="text"
            placeholder='Try searching "Smart TV"'
            className="w-full px-4 py-2 text-[#5a3d2b] bg-[#d6c1a5] focus:outline-none placeholder-white"
          />
          <button className="bg-white text-[#5a3d2b] px-4 py-2 flex items-center justify-center rounded-[20px] shadow-md">
            <FaSearch className="mr-2" />
            Search
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <FaHeart className="text-xl cursor-pointer text-[#ffe9b3]" />
          <FaShoppingCart className="text-xl cursor-pointer text-[#ffe9b3]" />
          <FaUser className="text-xl cursor-pointer text-[#ffe9b3]" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center mt-4 text-sm">
        {/* Categories */}
        <button
          onClick={toggleMenu}
          className="flex items-center space-x-2 bg-[#8b7156] px-4 py-2 rounded-[20px] text-white"
        >
          <FaBars />
          <span>All Categories</span>
        </button>

        {/* Call Us */}
        <div className="text-[#ffe9b3]">
          Call Us: <span className="text-white">0112 69 69 420</span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-[#5a3d2b] p-4 mt-4 rounded-[20px]">
          <nav className="flex flex-col space-y-2 text-[#ffe9b3]">
            <Link href="/">Home</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/contact-us">Contact Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;