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
  const [isCartHovered, setIsCartHovered] = useState(false); // State for cart hover
  const [isUserHovered, setIsUserHovered] = useState(false); // State for user hover
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isHomePage = router.pathname === "/home";

  return (
    <header
      className={`${poppins.className} fixed left-[40px] w-[calc(100vw-97px)] w-[1840px] h-[217px] top-[32px] ${
        isHomePage ? "bg-[#ffffff]/20 border border-transparent" : "bg-white/40 border border-[#00000080]"
      } backdrop-blur-lg z-50 px-4 lg:px-8 py-4 rounded-[25px]`}>
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className={` mt-5 justify-center left-[81px] top-[76px] font-poppins font-bold text-[32.82px] leading-[49.23px] ${
            isHomePage ? "text-[#ffffff]" : "text-[#000000]"
          }`}>
          Shop/<span className={isHomePage ? "text-[#ffffff]" : "text-[#000000]"}>lk</span>
        </Link>

        <div
          className={`lg:flex mt-5 justify-center ${
            isHomePage ? "border border-[rgba(255,255,255,0.58)]" : "border border-black"
          }`}
          style={{
            width: "829px",
            height: "57px",
            borderRadius: "42px",
            borderWidth: "1px",
            borderColor: isHomePage ? "rgba(255, 255, 255, 0.58)" : "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          {/* Search Input Field */}
          <input
            type="text"
            placeholder='Try searching "Smart TV"'
            className={`bg-transparent ${
              isHomePage ? "text-white placeholder-white" : "text-black placeholder-black"
            }`}
            style={{
              flex: 1,
              height: "30px",
              fontFamily: "Poppins",
              fontWeight: 300,
              fontSize: "18px",
              lineHeight: "29.12px",
              padding: "0 20px",
              border: "none",
              outline: "none",
            }}
          />

          {/* Search Button Section */}
          <button
            className="flex items-center justify-center"
            style={{
              width: "163px",
              height: "57px",
              borderTopRightRadius: "42px",
              borderBottomRightRadius: "42px",
              backgroundColor: isHomePage ? "#FFFFFF" : "#000000", // White on home.js, black otherwise
              color: isHomePage ? "#000000" : "#FFFFFF", // Black text for contrast when white, white text for black background
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "29.12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              cursor: "pointer",
            }}>
            {/* Search Icon */}
            <img
              src={isHomePage ? "/images/Search.png" : "/images/SearchWhite.png"}
              alt="Search Icon"
              style={{
                width: "29px",
                height: "29px",
                marginRight: "8px",
              }}
            />
            {/* Search Text */}
            <span
              style={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "29.12px",
                color: isHomePage ? "#000000" : "#FFFFFF",
              }}>
              Search
            </span>
          </button>
        </div>

        <div className="flex items-center mt-5 space-x-6 lg:space-x-4 ">
          <img
            src={isHomePage ? "/images/HeartWhite.png" : "/images/Heart.png"}
            alt="Heart Icon"
            style={{
              width: "36.47px",
              height: "36.47px",
              top: "81px",
              left: "1705px",
              cursor: "pointer",
            }}
          />
          <Link href="/cart">
            <div
              className="relative"
              onMouseEnter={() => setIsCartHovered(true)}
              onMouseLeave={() => setIsCartHovered(false)}>
              <img
                src={isHomePage ? "/images/Shopping CartWhite.png" : "/images/Shopping Cart.png"}
                alt="Shopping Cart Icon"
                style={{
                  width: "36px",
                  height: "36px",
                  top: "81px",
                  left: "1753px",
                  cursor: "pointer",
                }}
              />
              {/* Cart Tooltip */}
              {isCartHovered && (
                <span
                  style={{
                    position: "absolute",
                    top: "40px",
                    left: "-8px",
                    backgroundColor: isHomePage ? "transparent" : "#fff",
                    color: isHomePage ? "#fff" : "#000",
                    padding: "4px 10px",
                    borderRadius: "5px",
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}>
                  Cart
                </span>
              )}
            </div>
          </Link>

          {/* User Icon with Register Tooltip */}
          <Link href="/register">
            <div
              className="relative"
              onMouseEnter={() => setIsUserHovered(true)}
              onMouseLeave={() => setIsUserHovered(false)}>
              <img
                src={isHomePage ? "/images/Male UserWhite.png" : "/images/Male User.png"}
                alt="User Icon"
                style={{
                  width: "36px",
                  height: "36px",
                  top: "81px",
                  left: "1801px",
                  cursor: "pointer",
                }}
              />
              {/* Register Tooltip */}
              {isUserHovered && (
                <span
                  style={{
                    position: "absolute",
                    top: "40px",
                    left: "-8px",
                    backgroundColor: isHomePage ? "transparent" : "#fff",
                    color: isHomePage ? "#fff" : "#000",
                    padding: "4px 10px",
                    borderRadius: "5px",
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}>
                  Register
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>

      {/* Separated Box - Centered and Full Width Fix */}
      <div
        className={`fixed inset-x-0 top-[131px] z-50 flex items-center justify-between 
                px-6 lg:px-10 h-[84px] border-t 
                ${isHomePage ? "border-white/60" : "border-black"} 
                rounded-b-[25px] bg-transparent`}
        style={{
          boxSizing: "border-box",
          borderTop: isHomePage ? "1px solid rgba(255,255,255,0.58)" : "1px solid black",
        }}>
        {/* Menu Button - Moved to Left Side */}
        <div className="flex items-center gap-3 ml-[-33px]">
          <button
            onClick={toggleMenu}
            className={`flex items-center gap-3 px-6 py-3 
                        rounded-full ${isHomePage ? "text-white" : "text-black"} 
                        font-poppins font-semibold text-lg`}>
            <img
              src={isHomePage ? "/images/MenuWhite.png" : "/images/Menu.png"}
              alt="Menu Icon"
              className="w-9 h-9 cursor-pointer"
            />
            <span>All Categories</span>
          </button>
        </div>

        {/* Call Us Section */}
        <div
          className={`flex items-center gap-2 px-6 mr-[-33px]
                      ${isHomePage ? "text-white" : "text-black"} 
                      font-poppins font-semibold text-lg`}>
          <img
            src={isHomePage ? "/images/Online SupportWhite.png" : "/images/Online Support.png"}
            alt="Online Support Icon"
            className="w-9 h-9"
          />
          <span>
            Call Us: <strong>0112 69 69 420</strong>
          </span>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div
          className={`absolute top-[calc(100%+10px)] left-0 bg-black 
                      rounded-lg w-full max-w-[250px] shadow-md text-white 
                      transform scale-y-100 origin-top transition-transform duration-300 ease-in-out`}>
          <nav className="flex flex-col space-y-2 p-4 text-[#ffe9b3]">
            <Link href="/home" className="hover:text-white transition duration-200">
              Home
            </Link>
            <Link href="/shopping" className="hover:text-white transition duration-200">
              Shopping
            </Link>
            <Link href="/about-us" className="hover:text-white transition duration-200">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-white transition duration-200">
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
