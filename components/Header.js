import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import { Poppins } from "next/font/google";
import { useRouter } from "next/router"; // Import useRouter from next/router

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter(); // Initialize the router

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if the current page is the home page
  const isHomePage = router.pathname === "/";

  return (
    <header
    className={`${poppins.className} fixed top-5 left-0 w-full ${isHomePage ? "bg-white/5" : "bg-white/20"} backdrop-blur-lg z-50 px-4 lg:px-8 py-4 rounded-[25px] border border-[#00000080]`}
  >  
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl lg:text-4xl font-bold text-[#000000]">
          Shop/<span className="text-[#000000]">lk</span>
        </Link>

        {/* Search Bar (Visible on Desktop Only) */}
        <div
          className={`hidden lg:flex relative items-center bg-transparent rounded-full overflow-hidden shadow-md ${isHomePage ? "border-transparent" : "border border-black"}`}
          style={{ width: "40%", height: "50px" }}
        >
          <input
            type="text"
            placeholder='Try searching "Smart TV"'
            className="w-full h-full px-4 text-black bg-transparent focus:outline-none placeholder-[#0000009C] text-sm lg:text-lg font-light"
          />
          <button
            className="flex items-center justify-center bg-black text-[#FFFFFF] px-6 py-3 rounded-r-full"
            style={{ height: "100%" }}
          >
            <FaSearch className="mr-2" />
            Search
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 lg:space-x-8 text-white">
          {/* Heart Icon */}
          <img
            src="/images/Heart.png"
            alt="Heart Icon"
            className="w-6 h-6 lg:w-8 lg:h-8 cursor-pointer"
          />

          {/* Shopping Cart Icon */}
          <img
            src="/images/Shopping Cart.png"
            alt="Shopping Cart Icon"
            className="w-6 h-6 lg:w-8 lg:h-8 cursor-pointer"
          />

          {/* Male User Icon */}
          <img
            src="/images/Male User.png"
            alt="User Icon"
            className="hidden lg:block w-6 h-6 lg:w-8 lg:h-8 cursor-pointer"
          />

          {/* Hamburger Menu (Mobile Only) */}
          <button
            onClick={toggleMenu}
            className="text-lg lg:hidden cursor-pointer bg-transparent border-none"
          >
            <img
              src="/images/Menu.png"
              alt="Menu Icon"
              className="w-6 h-6"
            />
          </button>
        </div>

      </div>

      {/* Horizontal Line (Desktop Only) */}
      <div className="hidden lg:block mt-4 w-full border-t border-black/20"></div>

     {/* Bottom Section (Desktop Only) */}
    <div className="hidden lg:flex justify-between items-center mt-4 text-sm">
      {/* All Categories Button */}
      <button
        onClick={toggleMenu}
        className="flex items-center space-x-2 px-6 py-3 rounded-full text-[#000000]"
      >
        {/* Menu Icon */}
        <img
          src="/images/Menu.png"
          alt="Menu Icon"
          className="w-6 h-6"
        />
        <span>All Categories</span>
      </button>

      {/* Call Us Section */}
      <div className="flex items-center space-x-2 text-[#000000]">
        {/* Online Support Icon */}
        <img
          src="/images/Online Support.png"
          alt="Online Support Icon"
          className="w-6 h-6 lg:w-8 lg:h-8"
        />

        {/* Call Us Text */}
        <div>
          Call Us: <span className="text-[#000000]">0112 69 69 420</span>
        </div>
      </div>
    </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-[70px] right-4 bg-[#5a3d2b] p-4 rounded-lg w-[80%] max-w-[300px] shadow-md">
          <nav className="flex flex-col space-y-2 text-[#ffe9b3]">
            <Link href="/local">Home</Link>
            <Link href="/shopping">Shopping</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/contact-us">Contact Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
