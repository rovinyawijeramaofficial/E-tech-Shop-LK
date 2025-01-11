import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Poppins } from "next/font/google";
import { useRouter } from "next/router";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isHomePage = router.pathname === "/";

  return (
    <header
      className={`${poppins.className} fixed top-5 left-1/2 transform -translate-x-1/2 w-[1840px] h-[217px] ${
        isHomePage ? "bg-white/5" : "bg-white/20"
      } backdrop-blur-lg z-50 px-4 lg:px-8 py-4 rounded-[25px] border border-[#00000080]`}
    >
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl lg:text-4xl mt-5 font-bold text-[#000000]">
          Shop/<span className="text-[#000000]">lk</span>
        </Link>

        <div
          className={`hidden lg:flex mt-5 relative items-center bg-transparent rounded-full overflow-hidden shadow-md ${
            isHomePage ? "border-transparent" : "border border-black"
          }`}
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

        <div className="flex items-center space-x-4 mt-5 lg:space-x-8 text-white">
          <img
            src="/images/Heart.png"
            alt="Heart Icon"
            className="w-6 h-6 lg:w-8 lg:h-8 cursor-pointer"
          />
          <Link href="/cart">
            <img
              src="/images/Shopping Cart.png"
              alt="Shopping Cart Icon"
              className="w-6 h-6 lg:w-8 lg:h-8 cursor-pointer"
            />
          </Link>
          <Link href="/register">
            <img
              src="/images/Male User.png"
              alt="User Icon"
              className="hidden lg:block w-6 h-6 lg:w-8 lg:h-8 cursor-pointer"
            />
          </Link>
          <button
            onClick={toggleMenu}
            className="text-lg lg:hidden cursor-pointer bg-transparent border-none"
          >
            <img src="/images/Menu.png" alt="Menu Icon" className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="hidden lg:block mt-10 w-[1840px] mx-auto border-t border-[#00000080] transform -translate-x-8"></div>
      <div className="hidden lg:flex justify-between mt-4 items-center text-sm">
        <button
          onClick={toggleMenu}
          className="flex items-center space-x-2 px-6 py-3 rounded-full text-[#000000]"
        >
          <img src="/images/Menu.png" alt="Menu Icon" className="w-6 h-6" />
          <span>All Categories</span>
        </button>
        <div className="flex items-center space-x-2 text-[#000000]">
          <img
            src="/images/Online Support.png"
            alt="Online Support Icon"
            className="w-6 h-6 lg:w-8 lg:h-8"
          />
          <div>
            Call Us: <span className="text-[#000000]">0112 69 69 420</span>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-[70px] right-4 bg-[#000000] p-4 rounded-lg w-[80%] max-w-[300px] shadow-md text-white">
          <nav className="flex flex-col space-y-2 text-[#ffe9b3]">
            <Link href="/home">Home</Link>
            <Link href="/shopping">Shopping</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/bloghome">Blogs</Link>
            <Link href="/contact-us">Contact Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
