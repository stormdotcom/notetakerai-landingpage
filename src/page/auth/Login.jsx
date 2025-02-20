import {
  faGithub,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./Views/AuthLayout";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    navigate("/dashboard");
  };

  const handleOAuthLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-green-400">
          Login to QNotes AI
        </h2>

        <div className="flex flex-col space-y-3">
          <button
            className="flex items-center justify-center w-full px-4 py-3 rounded-lg bg-white text-gray-900 hover:bg-gray-200 font-medium transition-all duration-300"
            onClick={() => handleOAuthLogin("Google")}
          >
            <FontAwesomeIcon icon={faGoogle} className="mr-3 text-red-500" />
            Continue with Google
          </button>
          <button
            className="flex items-center justify-center w-full px-4 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 font-medium transition-all duration-300"
            onClick={() => handleOAuthLogin("GitHub")}
          >
            <FontAwesomeIcon icon={faGithub} className="mr-3 text-white" />
            Continue with GitHub
          </button>
          <button
            className="flex items-center justify-center w-full px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300"
            onClick={() => handleOAuthLogin("Twitter")}
          >
            <FontAwesomeIcon icon={faTwitter} className="mr-3 text-white" />
            Continue with Twitter
          </button>
        </div>

        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-600"></div>
          <p className="px-4 text-gray-400">OR</p>
          <div className="flex-1 border-t border-gray-600"></div>
        </div>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="flex items-center border border-gray-600 rounded-lg px-4 py-3 bg-gray-700">
            <FontAwesomeIcon icon={faUser} className="text-green-400 mr-3" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent outline-none text-white placeholder-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center border border-gray-600 rounded-lg px-4 py-3 bg-gray-700">
            <FontAwesomeIcon icon={faLock} className="text-green-400 mr-3" />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-transparent outline-none text-white placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full px-4 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-bold transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm">
          {"Don't have an account?"}{" "}
          <button
            className="text-green-400 hover:underline"
            onClick={() => navigate("/register")}
          >
            Sign up
          </button>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
