import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const RegisterForm = () => {
  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();
    router.push("/login");
  };

  return (
    <div className="h-screen font-poppins">
      {/* Desktop View (Hidden on Mobile) */}
      <div className="hidden md:flex h-screen">
        <div className="flex-1 flex flex-col justify-center ml-[103px] bg-white p-5">

        <br/><br/><br/>

          <h2 className="font-bold text-[29.12px] leading-[47.08px] text-black mb-5">
            Register
          </h2>
          <p className="text-[18px] leading-[29.12px] text-black w-[393px] mb-5">
            Please log in to continue to use shop/lk
          </p>
          <form className="max-w-[300px]" onSubmit={handleRegister}>
            <div className="mb-5">
              <label htmlFor="fullName" className="text-[18px] text-black block">
                Full Name
              </label>
              <input type="text" id="fullName" className="w-[569px] h-[58px] p-3 rounded border border-black" />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="text-[18px] text-black">
                Email Address
              </label>
              <input type="email" id="email" className="w-[569px] h-[58px] p-3 rounded border border-black" />
            </div>
            {/* Password Fields */}
          <div style={{ marginBottom: "20px", display: "flex", gap: "17px" }}>
            <div style={{ flex: 1 }}>
              <label htmlFor="password" className="text-[18px] text-black">
                Password
              </label>
              <input
                type="password"
                id="password"
                style={{
                  width: "276px",
                  height: "58px",
                  borderRadius: "5px",
                  border: "1px solid #000",
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="confirmPassword" className="text-[18px] text-black">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                style={{
                  width: "276px",
                  height: "58px",
                  borderRadius: "5px",
                  border: "1px solid #000",
                }}
              />
            </div>
          </div>
            <button className="w-[569px] h-[69px] bg-black text-white py-3 rounded font-semibold hover:bg-gray-800 transition" type="submit">
              Register
            </button>
            <button>
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">Already have an account?</p>
              <Link href="/login" className="block mt-2">
                <button className="w-[569px] h-[69px] bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-300 transition border border-black">
                  Log In
                </button>
              </Link>
            </div>
            </button>
          </form>

          <br/><br/><br/>

          <Link href="/" className="block text-sm text-black underline hover:text-gray-700 transition mt-5">
            &lt;&lt; Return to Homepage
          </Link>
        </div>
        <div className="hidden md:block shadow-md items-center justify-center">
          <img src="/images/dell-unsplash 2.png" alt="Tablet showing colorful screen" className="w-[800px] h-[920px] shadow-md" style={{ borderBottomLeftRadius: "110px" }} />
        </div>
      </div>

      {/* Mobile View (Hidden on Desktop) */}
<div className="md:hidden flex flex-col items-center px-6 space-y-6">
  <h2 className="text-xl font-bold text-black mb-3">Register</h2>
  <p className="text-xs text-gray-700 mb-4 text-center">
    Please log in to continue to use shop/lk
  </p>
  
  <form className="w-[90%] max-w-sm" onSubmit={handleRegister}>
    {/* Full Name Field */}
    <div className="mb-3">
      <label htmlFor="fullName" className="text-xs text-black block">Full Name</label>
      <input type="text" id="fullName" className="w-full h-10 p-2 rounded border border-black text-sm" />
    </div>

    {/* Email Field */}
    <div className="mb-3">
      <label htmlFor="email" className="text-xs text-black block">Email Address</label>
      <input type="email" id="email" className="w-full h-10 p-2 rounded border border-black text-sm" />
    </div>

    {/* Password Field */}
    <div className="mb-3">
      <label htmlFor="password" className="text-xs text-black block">Password</label>
      <input type="password" id="password" className="w-full h-10 p-2 rounded border border-black text-sm" />
    </div>

    {/* Confirm Password Field */}
    <div className="mb-4">
      <label htmlFor="confirmPassword" className="text-xs text-black block">Confirm Password</label>
      <input type="password" id="confirmPassword" className="w-full h-10 p-2 rounded border border-black text-sm" />
    </div>

    {/* Register Button */}
    <button 
      className="w-full h-12 bg-black text-white font-semibold rounded hover:bg-gray-800 transition text-sm" 
      type="submit">
      Register
    </button>

    {/* Login Link */}
    <div className="text-center mt-3">
      <p className="text-xs text-gray-600">Already have an account?</p>
      <Link href="/login">
        <button 
          className="mt-2 w-full h-10 bg-white text-black font-semibold rounded hover:bg-gray-300 transition border border-black text-sm">
          Log In
        </button>
      </Link>
    </div>
  </form>

  {/* Return to Homepage Link */}
  <Link href="/" className="text-xs text-black underline hover:text-gray-700 transition mt-4">
    &lt;&lt; Return to Homepage
  </Link>
</div>

    </div>
  );
};

export default RegisterForm;
