import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {
  const router = useRouter();

  const handleLogin = (event) => {
    event.preventDefault();
    router.push("/home");
  };

  return (
    <div className="flex h-screen font-poppins">
      {/* Desktop View (Hidden on Mobile) */}
      <div className="hidden md:flex flex-1 flex-col justify-center ml-[103px] bg-white p-5">

      <br/><br/> <br/><br/> <br/><br/> <br/><br/> 

        <h2 className="font-bold text-[29.12px] leading-[47.08px] text-black mb-5">
          Log In
        </h2>
        <p className="text-[18px] leading-[29.12px] text-black w-[393px] h-[30px] mb-5">
          Please log in to continue to use shop/lk
        </p>

        <form className="max-w-[300px]" onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="text-[18px] leading-[29.12px] text-black block"
            >
              Email or Username
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email or username"
              className="w-[569px] h-[58px] p-3 rounded-[5px] border border-black"
            />
          </div>

          {/* Password Field with Forget Password */}
          <div className="mb-5">
            <div className="flex items-center justify-between w-[569px]">
              <label htmlFor="password" className="text-[18px] text-black">
                Password
              </label>
              <a
                href="#"
                className="text-gray-400 text-[16px] leading-[29.12px] no-underline"
                style={{ fontWeight: 275 }}
              >
                Forget Password?
              </a>
            </div>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-[569px] h-[58px] p-3 rounded-[5px] border border-black"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-[569px] h-[69px] bg-black text-white rounded-[5px] font-semibold text-[18px] leading-[29.12px] mb-5"
          >
            Log In
          </button>

          <br/><br/>

          {/* Create Account */}
          <p
  className="font-poppins text-[16px]-300 leading-[29.12px] text-center"
  style={{
    width: '393px',
    height: '30px',
    marginLeft:'80px',
    opacity: 0.6, // For the 60% black color
  }}
>
  Don’t have an account?
</p>
          <Link href="/register">
            <button className="w-[569px] h-[69px] bg-white text-black border border-black rounded-[5px] font-semibold text-[18px] leading-[29.12px]">
              Create a New Account
            </button>
          </Link>
        </form>

        {/* Return to Homepage */}
        <Link href="/" className="block text-sm text-black underline mt-40">
          &lt;&lt; Return to Homepage
        </Link>
      </div>

      {/* Right Section (Desktop Only) */}
      <div
        className="hidden md:block w-[860px] h-[920px] shadow-md"
        style={{
          borderBottomLeftRadius: "110px",
          backgroundImage: "url('/images/dell-unsplash 1.png')",
          backgroundSize: "210%",
          backgroundPosition: "right -380px top",
          zIndex: "-1",
        }}
      ></div>

{/* Mobile View (Hidden on Desktop) */}
<div className="-mt-60 flex md:hidden flex-col items-center justify-center w-full px-6 space-y-6 py-10">
  <h2 className="font-bold text-2xl text-black">Log In</h2>
  <p className="text-sm text-gray-600 text-center">Please log in to continue</p>

  <form className="w-full max-w-[320px]" onSubmit={handleLogin}>
    {/* Email Field */}
    <div className="mb-4">
      <label htmlFor="email" className="text-sm text-gray-700 block mb-1">
        Email or Username
      </label>
      <input
        type="text"
        id="email"
        className="w-full h-11 p-3 rounded-md border border-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>

    {/* Password Field with Forget Password */}
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <label htmlFor="password" className="text-sm text-gray-700">
          Password
        </label>
        <a href="#" className="text-primary-600 text-xs hover:text-primary-800 transition duration-300">
          Forgot Password?
        </a>
      </div>
      <input
        type="password"
        id="password"
        className="w-full h-11 p-3 rounded-md border border-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>

    {/* Login Button */}
    <button
      type="submit"
      className="w-full h-11 bg-black text-white rounded-md font-semibold text-sm hover:bg-gray-800 transition duration-300 active:scale-95"
    >
      Log In
    </button>

    {/* Create Account */}
    <p className="text-xs text-center opacity-70 mt-4">Don’t have an account?</p>
    <Link href="/register">
      <button className="w-full h-11 bg-white text-black border border-black rounded-md font-semibold text-sm hover:bg-gray-100 transition duration-300">
        Create a New Account
      </button>
    </Link>
  </form>

  {/* Return to Homepage */}
  <Link href="/" className="text-xs text-black underline mt-6 hover:text-gray-700">
    &lt;&lt; Return to Homepage
  </Link>
</div>


    </div>
  );
};

export default Login;
