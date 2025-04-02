import { useState, useRef } from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const signinUsernameRef = useRef(null);
  const signinPasswordRef = useRef(null);
  const signinEmailRef = useRef(null);
  const signupUsernameRef = useRef(null);
  const signupPasswordRef = useRef(null);
  const signupEmailRef = useRef(null);
  const navigate = useNavigate();

  const handleSignin = async () => {
    const username = signinUsernameRef.current?.value;
    const password = signinPasswordRef.current?.value;
    const email = signinEmailRef.current?.value;

    if (!username || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Signing in with", { username, email, password });

    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
        username,
        email,
        password,
      });

      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      alert("Signin successful");
      navigate("/dashboard");
    } catch (error) {
      console.error("Signin failed", error);
      alert(
        "Signin failed: " + (error.response?.data?.message || "Unknown error")
      );
    }
  };

  const handleSignup = async () => {
    const username = signupUsernameRef.current?.value;
    const password = signupPasswordRef.current?.value;
    const email = signupEmailRef.current?.value;

    if (!username || !password || !email) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Signing up with", { username, email, password });

    try {
      await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        username,
        email,
        password,
      });
      alert("Signup successful. Redirecting to Signin...");
      setIsSignUp(false); // Switch back to Sign In view
    } catch (error) {
      console.error("Signup failed", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-l from-white to-slate-800">
      <div className="relative w-[800px] max-w-full min-h-[500px] bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex w-full h-full">
          <div
            className={`absolute w-1/2 h-full flex flex-col items-center justify-center transition-transform duration-500 ${
              isSignUp ? "translate-x-full" : "translate-x-0"
            }`}
          >
            {!isSignUp && (
              <>
                <h1 className="text-xl font-bold">Sign in</h1>
                <div className="flex space-x-3 my-4">
                  <a
                    href="#"
                    className="border border-gray-300 rounded-full p-2"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="border border-gray-300 rounded-full p-2"
                  >
                    <FaGooglePlusG />
                  </a>
                  <a
                    href="#"
                    className="border border-gray-300 rounded-full p-2"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
                <input
                  ref={signinUsernameRef}
                  type="text"
                  placeholder="Username"
                  className="w-3/4 p-2 my-2 border rounded"
                />
                <input
                  ref={signinEmailRef}
                  type="email"
                  placeholder="Email"
                  className="w-3/4 p-2 my-2 border rounded"
                />
                <input
                  ref={signinPasswordRef}
                  type="password"
                  placeholder="Password"
                  className="w-3/4 p-2 my-2 border rounded"
                />
                <a href="#" className="text-blue-500 text-sm mt-2">
                  Forgot your password?
                </a>
                <button
                  onClick={handleSignin}
                  className="bg-slate-950 text-white px-6 py-2 mt-4 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Sign In
                </button>
              </>
            )}
            {isSignUp && (
              <>
                <h1 className="text-xl font-bold">Create Account</h1>
                <div className="flex space-x-3 my-4">
                  <a
                    href="#"
                    className="border border-gray-300 rounded-full p-2"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="border border-gray-300 rounded-full p-2"
                  >
                    <FaGooglePlusG />
                  </a>
                  <a
                    href="#"
                    className="border border-gray-300 rounded-full p-2"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
                <input
                  ref={signupUsernameRef}
                  type="text"
                  placeholder="Username"
                  className="w-3/4 p-2 my-2 border rounded"
                />
                <input
                  ref={signupEmailRef}
                  type="email"
                  placeholder="Email"
                  className="w-3/4 p-2 my-2 border rounded"
                />
                <input
                  ref={signupPasswordRef}
                  type="password"
                  placeholder="Password"
                  className="w-3/4 p-2 my-2 border rounded"
                />
                <button
                  onClick={handleSignup}
                  className="bg-slate-950 text-white px-6 py-2 mt-4 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full bg-gradient-to-r from-slate-950 to-slate-950 flex items-center justify-center transition-transform duration-500 ease-in-out ${
            isSignUp ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="text-center px-10">
            {isSignUp ? (
              <>
                <h1 className="text-xl font-bold text-white">Welcome Back!</h1>
                <p className="text-white text-sm mt-2">
                  To keep connected with us please login with your personal info
                </p>
                <button
                  onClick={() => setIsSignUp(false)}
                  className="border border-white text-white px-6 py-2 mt-4 rounded-full"
                >
                  Sign In
                </button>
              </>
            ) : (
              <>
                <h1 className="text-xl font-bold text-white">Hello, Friend!</h1>
                <p className="text-white text-sm mt-2">
                  Enter your personal details and start your journey with us
                </p>
                <button
                  onClick={() => setIsSignUp(true)}
                  className="border border-white text-white px-6 py-2 mt-4 rounded-full"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
