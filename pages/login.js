import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {
  const router = useRouter();

  const handleLogin = (event) => {
    event.preventDefault();
    router.push('/home');
  };

  return (
    <div
      style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" }}
    >
      {/* Left Section */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: "20px",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Log In</h2>
        <p style={{ marginBottom: "40px", color: "#555" }}>
          Please log in to continue to use <b>shopBiz</b>.
        </p>
        <form style={{ width: "100%", maxWidth: "300px" }} onSubmit={handleLogin}>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="email" style={{ display: "block", marginBottom: "8px" }}>
              Email or Username
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email or username"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="password" style={{ display: "block", marginBottom: "8px" }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <div style={{ textAlign: "right", marginTop: "8px" }}>
              <a
                href="#"
                style={{
                  color: "#007BFF",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                Forgot Password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            Log In
          </button>
        </form>
        <p style={{ color: "#555", fontSize: "14px" }}>
          Don’t have an account?{" "}
          <Link href="/register" style={{ color: "#007BFF", textDecoration: "none" }}>
            Create a New Account
          </Link>
        </p>
        <Link href="/home" style={{ marginTop: "20px", color: "#007BFF", fontSize: "14px" }}>
          &lt;&lt; Return to Homepage
        </Link>
      </div>

{/* Right Section */}
<div className="hidden md:flex md:w-1/2 items-center justify-center p-8">
  <div className="relative" style={{ width: '960px', height: '1080px',  }}>
    <img
      src="/images/dell-unsplash 1.png"
      alt="Tablet showing colorful screen"
      className="rounded-bl-[110px] object-cover w-full h-full"
    />
  </div>
</div>

    </div>
  );
};

export default Login;
