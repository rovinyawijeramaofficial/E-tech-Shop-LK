import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [isUserHovered, setIsUserHovered] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isHomePage = router.pathname === "/home";

  const handleSearch = () => {
    router.push("/searchshopping");
  };

  return (
    <header
  className={`${poppins.className} fixed left-[20px] sm:left-[40px] w-[calc(100vw-40px)] sm:w-[calc(100vw-97px)] max-w-[1840px] h-[100px] sm:h-[217px] top-[16px] sm:top-[32px] ${
    isHomePage
      ? "bg-[#ffffff]/20 border border-transparent"
      : "bg-white/40 border border-[#00000080]"
  } backdrop-blur-lg z-50 px-2 sm:px-4 lg:px-8 py-2 sm:py-4 rounded-[15px] sm:rounded-[25px]`}
>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className={`mt-5 justify-center left-[81px] top-[76px] font-poppins font-bold text-[32.82px] leading-[49.23px] ${
            isHomePage ? "text-[#ffffff]" : "text-[#000000]"
          }`}
        >
          Shop/<span className={isHomePage ? "text-[#ffffff]" : "text-[#000000]"}>lk</span>
        </Link>

{/* Search Bar & Icon */}
<div className="flex items-center">

  {/* Search Bar (Hidden on Mobile) */}
  <div
    className={`hidden lg:flex mt-5 justify-center ${
      isHomePage
        ? "border border-[rgba(255,255,255,0.58)]"
        : "border border-black"
    }`}
    style={{
      width: "829px",
      height: "57px",
      borderRadius: "42px",
      borderWidth: "1px",
    }}
  >
    <input
      type="text"
      placeholder='Try searching "Smart TV"'
      className={`bg-transparent flex-1 h-full px-5 ${
        isHomePage ? "text-white placeholder-white" : "text-black placeholder-black"
      }`}
      style={{
        fontFamily: "Poppins",
        fontWeight: 300,
        fontSize: "18px",
        lineHeight: "29.12px",
        border: "none",
        outline: "none",
      }}
    />
    <button
      onClick={handleSearch}
      className={`flex items-center justify-center px-5 ${
        isHomePage
          ? "bg-white text-black"
          : "bg-black text-white"
      }`}
      style={{
        height: "57px",
        borderTopRightRadius: "42px",
        borderBottomRightRadius: "42px",
        cursor: "pointer",
      }}
    >
      <img
        src={isHomePage ? "/images/Search.png" : "/images/SearchWhite.png"}
        alt="Search Icon"
        className="w-7 h-7 mr-2"
      />
      <span className="font-poppins font-semibold text-lg">
        Search
      </span>
    </button>
  </div>
</div>

{/* Cart, Heart, Menu, and User Icons */}
<div className="flex items-center mt-5 space-x-4 lg:space-x-6">

  {/* Search Icon (Visible on Mobile) */}
  <button
    onClick={handleSearch}
    className={`lg:hidden flex items-center justify-center ${
      isHomePage ? "text-white" : "text-black"
    }`}
    style={{
      width: "36px",
      height: "36px",
      cursor: "pointer",
    }}
  >
    <img
      src={isHomePage ? "/images/SearchWhite.png" : "/images/Search.png"}
      alt="Search Icon"
      style={{
        width: "31px",
        height: "31px",
      }}
    />
  </button>

  {/* Heart Icon (Hidden on Mobile) */}
  <img
    src={isHomePage ? "/images/HeartWhite.png" : "/images/Heart.png"}
    alt="Heart Icon"
    className="hidden lg:block"
    style={{
      width: "36.47px",
      height: "36.47px",
      cursor: "pointer",
    }}
  />

  {/* Shopping Cart Icon */}
  <Link href="/cart">
    <div
      className="relative flex items-center justify-center"
      style={{
        width: "36px",
        height: "36px",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsCartHovered(true)}
      onMouseLeave={() => setIsCartHovered(false)}
    >
      <img
        src={isHomePage ? "/images/Shopping CartWhite.png" : "/images/Shopping Cart.png"}
        alt="Shopping Cart Icon"
      />
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
          }}
        >
          Cart
        </span>
      )}
    </div>
  </Link>

  {/* Menu Icon (Always Visible) */}
  <button
    onClick={toggleMenu}
    className="block lg:hidden flex items-center justify-center"
    style={{
      width: "36px",
      height: "36px",
      cursor: "pointer",
    }}
  >
    <img
      src={isHomePage ? "/images/MenuWhite.png" : "/images/Menu.png"}
      alt="Menu Icon"
    />
  </button>

  {/* User Icon (Hidden on Mobile) */}
  <Link href="/register">
    <div
      className="relative hidden lg:block"
      onMouseEnter={() => setIsUserHovered(true)}
      onMouseLeave={() => setIsUserHovered(false)}
      style={{
        width: "36px",
        height: "36px",
        cursor: "pointer",
      }}
    >
      <img
        src={isHomePage ? "/images/Male UserWhite.png" : "/images/Male User.png"}
        alt="User Icon"
      />
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
          }}
        >
          Register
        </span>
      )}
    </div>
  </Link>
</div>

      </div>

     {/* Horizontal line & Below Section */}
<div
  className={`hidden lg:flex fixed inset-x-0 top-[131px] z-50 items-center justify-between px-6 lg:px-10 h-[84px] border-t ${
    isHomePage ? "border-white/60" : "border-black"
  } rounded-b-[25px] bg-transparent`}
  style={{
    boxSizing: "border-box",
    borderTop: isHomePage
      ? "1px solid rgba(255,255,255,0.58)"
      : "1px solid black",
  }}
>
  <div className="flex items-center gap-3 ml-[-33px]">
    <button
      onClick={toggleMenu}
      className={`flex items-center gap-3 px-6 py-3 rounded-full ${
        isHomePage ? "text-white" : "text-black"
      } font-poppins font-semibold text-lg`}
    >
      <img
        src={isHomePage ? "/images/MenuWhite.png" : "/images/Menu.png"}
        alt="Menu Icon"
        className="w-9 h-9 cursor-pointer"
      />
      <span>All Categories</span>
    </button>
  </div>

  <div
    className={`flex items-center gap-2 px-6 mr-[-33px] ${
      isHomePage ? "text-white" : "text-black"
    } font-poppins font-semibold text-lg`}
  >
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

{isMenuOpen && (
        <div
          className={`absolute top-[calc(100%+10px)] left-0 bg-black rounded-lg w-full max-w-[250px] shadow-md text-white transform scale-y-100 origin-top transition-transform duration-300 ease-in-out`}
        >
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
            <Link href="/bloghome" className="hover:text-white transition duration-200">
              Blogs
            </Link>
            <Link href="/contact-us" className="hover:text-white transition duration-200">
              Contact Us
            </Link>
          </nav>
        </div>
      )}
      
    </header>
  );
};

export default Header;
