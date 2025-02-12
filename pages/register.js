import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const [selectedAccount, setSelectedAccount] = useState(null);

  const handleNextClick = () => {
    if (selectedAccount) {
      router.push("/registerform"); // Navigates to the RegisterForm page
    } else {
      alert("Please select an account type to proceed.");
    }
  };

  const handleSelectAccount = (accountType) => {
    setSelectedAccount(accountType);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop View */}
      <div className="hidden md:flex flex-col md:flex-row items-center justify-center">
        {/* Left Section */}
        <div className="w-1/2 p-16 space-y-8">
          <h1 className="font-poppins font-bold text-[29.12px] text-black">Register</h1>
          <p className="font-poppins text-[18px] text-black">Please choose your account type to continue</p>

          {/* Account Type Options */}
          <div className="space-y-4">
            <div
              onClick={() => handleSelectAccount("personal")}
              className={`rounded-[15px] p-6 flex items-center justify-between cursor-pointer transition-colors duration-300 border-[1px] bg-white hover:border-gray-400 ${
                selectedAccount === "personal" ? "border-black bg-gray-100" : "border-gray-300"
              }`}
              style={{ width: "569px", height: "147px", boxShadow: "5px 5px 24px 0px rgba(0, 0, 0, 0.22)" }}
            >
              <h2 className="font-poppins font-medium text-[23.54px] text-black">Personal Account</h2>
              <p className="font-poppins text-[14.16px] text-gray-600 text-right w-[273px]">
                Get exclusive discount and shipping rates
              </p>
            </div>

            <div
              onClick={() => handleSelectAccount("business")}
              className={`rounded-[15px] p-6 flex items-center justify-between cursor-pointer transition-colors duration-300 border-[1px] bg-white hover:border-gray-400 ${
                selectedAccount === "business" ? "border-black bg-gray-100" : "border-gray-300"
              }`}
              style={{ width: "569px", height: "147px", boxShadow: "5px 5px 24px 0px rgba(0, 0, 0, 0.22)" }}
            >
              <h2 className="font-poppins font-medium text-[23.54px] text-black">Business Account</h2>
              <p className="font-poppins text-[14.16px] text-gray-600 text-right w-[273px]">
                Get the best prices when you're buying wholesale. Business Registration verification required.
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button onClick={handleNextClick} className="w-[569px] h-[69px] bg-black text-white py-3 rounded-[5px] font-semibold hover:bg-gray-800 transition">
            Next
          </button>

          {/* Login Button */}
          <button>
          <div className="text-center">
            <p className="text-sm text-gray-600">Already have an account?</p>
            <Link href="/login">
              <button className="mt-2 w-[569px] h-[69px] bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-300 transition border-[1px] border-black">
                Log In
              </button>
            </Link>
          </div>
          </button>

          <br/><br/><br/><br/>

          {/* Return to Homepage Link */}
          <Link href="/" className="block text-sm text-black underline hover:text-gray-700 transition">
            &lt;&lt; Return to Homepage
          </Link>
        </div>

        {/* Right Section */}
        <div className="items-center justify-center ">
          <img src="/images/dell-unsplash 2.png" alt="Tablet showing colorful screen" className="w-[960px] h-[980px] shadow-md" style={{ borderBottomLeftRadius: "110px" }} />
        </div>
      </div>


      {/* Mobile View */}
      <div className="md:hidden flex flex-col items-center px-6 py-10 space-y-6">
        <h1 className="text-2xl font-bold text-black">Register</h1>
        <p className="text-lg text-black text-center">Please choose your account type to continue</p>

        {/* Account Type Options */}
        <div className="space-y-4 w-full max-w-xs">
          <button
            onClick={() => handleSelectAccount("personal")}
            className={`w-full p-4 rounded-lg border ${selectedAccount === "personal" ? "border-black bg-gray-100" : "border-gray-300"}`}
          >
            <h2 className="text-lg font-medium text-black">Personal Account</h2>
            <p className="text-sm text-gray-600">Get exclusive discount and shipping rates</p>
          </button>

          <button
            onClick={() => handleSelectAccount("business")}
            className={`w-full p-4 rounded-lg border ${selectedAccount === "business" ? "border-black bg-gray-100" : "border-gray-300"}`}
          >
            <h2 className="text-lg font-medium text-black">Business Account</h2>
            <p className="text-sm text-gray-600">Get the best prices when you're buying wholesale.</p>
          </button>
        </div>

        {/* Next Button */}
        <button onClick={handleNextClick} className="w-full max-w-xs py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition">
          Next
        </button>

        {/* Login Button */}
        <div className="text-center">
          <p className="text-sm text-gray-600">Already have an account?</p>
          <Link href="/login">
            <button className="mt-2 w-full max-w-xs py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-300 transition border border-black">
              Log In
            </button>
          </Link>
        </div>

        {/* Return to Homepage Link */}
        <Link href="/" className="text-sm text-black underline hover:text-gray-700 transition">
          &lt;&lt; Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Register;