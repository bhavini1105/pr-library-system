import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/config";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignIn.css';

const SignIn = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = user;

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("Sign-In successful");
        localStorage.setItem("user", JSON.stringify(res.user));
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Sign-In failed:", error.code);
        alert(`Wrong ${error.code}`);
      });

    setUser({});
  };

  return (
    <div className="signin-container">
      <div className="signin-box mx-auto">
        <h2 className="text-center mb-4">📘 Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              name="email"
              value={user.email || ""}
              onChange={handleChange}
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              name="password"
              value={user.password || ""}
              onChange={handleChange}
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-light w-100">Sign In</button>
        </form>

        <button
          type="button"
          className="btn btn-danger w-100 mt-3"
          onClick={async () => {
            try {
              const res = await signInWithPopup(auth, googleProvider);
              localStorage.setItem("user", JSON.stringify(res.user));
              navigate("/list");
            } catch (err) {
              console.error("Google sign-in error:", err);
              alert("Failed to sign in with Google");
            }
          }}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
