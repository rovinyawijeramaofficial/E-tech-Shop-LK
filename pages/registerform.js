import React from "react";
import { useRouter } from "next/router";

const RegisterForm = () => {
  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();
    router.push("/login"); // Navigate to shopping page after registration
  };

  const navigateToLogin = () => {
    router.push("/login"); // Navigate to login page
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" }}>
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
        <h2 style={{ marginBottom: "20px" }}>Register</h2>
        <p style={{ marginBottom: "40px", color: "#555" }}>
          Please log in to continue to use <b>shopBiz</b>.
        </p>
        <form style={{ width: "100%", maxWidth: "300px" }} onSubmit={handleRegister}>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="fullName" style={{ display: "block", marginBottom: "8px" }}>
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="email" style={{ display: "block", marginBottom: "8px" }}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
            <div style={{ flex: 1 }}>
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
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="confirmPassword" style={{ display: "block", marginBottom: "8px" }}>
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm password"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
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
            Register
          </button>
        </form>
        <p style={{ color: "#555", fontSize: "14px" }}>
          Already have an account?{" "}
          <button
            onClick={navigateToLogin}
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#007BFF",
              textDecoration: "underline",
              cursor: "pointer",
              padding: "0",
              fontSize: "14px",
            }}
          >
            Log In
          </button>
        </p>
        <a
          href="/"
          style={{ marginTop: "20px", color: "#007BFF", fontSize: "14px", textDecoration: "none" }}
        >
          &lt;&lt; Return to Homepage
        </a>
      </div>

      {/* Right Section */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "url('/images/dell-unsplash 2.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default RegisterForm;
