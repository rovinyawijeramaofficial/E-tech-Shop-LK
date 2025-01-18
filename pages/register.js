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
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-8 md:p-16 space-y-8">
        <h1 className="text-3xl font-bold">Register</h1>
        <p className="text-gray-600">Please choose your account type to continue</p>

        {/* Account Type Options */}
        <div className="space-y-4">
          <div
            onClick={() => handleSelectAccount("personal")}
            className={`border rounded-lg p-6 shadow-sm hover:shadow-md cursor-pointer flex flex-col space-y-2 ${
              selectedAccount === "personal" ? "border-black bg-gray-100" : "border-gray-300"
            }`}
          >
            <h2 className="text-lg font-semibold">Personal Account</h2>
            <p className="text-sm text-gray-500">
              Get exclusive discount and shipping rates
            </p>
          </div>
          <div
            onClick={() => handleSelectAccount("business")}
            className={`border rounded-lg p-6 shadow-sm hover:shadow-md cursor-pointer flex flex-col space-y-2 ${
              selectedAccount === "business" ? "border-black bg-gray-100" : "border-gray-300"
            }`}
          >
            <h2 className="text-lg font-semibold">Business Account</h2>
            <p className="text-sm text-gray-500">
              Get the best prices when you're buying wholesale. Business
              Registration verification required.
            </p>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNextClick}
          className="w-full bg-black text-white py-3 rounded-lg text-center font-semibold hover:bg-gray-800 transition"
        >
          Next
        </button>

        {/* Login Button */}
        <div className="text-center">
          <p className="text-sm text-black-500">Already have an account?</p>
          <Link href="/login">
            <button className="mt-2 w-full bg-white-200 text-black py-3 rounded-lg font-semibold hover:bg-gray-300 transition border border-[#000000]">
              Log In
            </button>
          </Link>
        </div>

        {/* Spacer to push the link further down */}
        <div className="mt-12"></div>

        {/* Return to Homepage Link */}
        <Link
          href="/"
          className="block text-sm text-gray-500 underline hover:text-gray-700 transition"
        >
          &lt;&lt; Return to Homepage
        </Link>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center p-8">
        <img
          src="/images/dell-unsplash 2.png"
          alt="Tablet showing colorful screen"
          className="w-[960px] left-[1920px] rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Register;
