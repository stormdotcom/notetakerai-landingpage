import {
  faGithub,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./Views/AuthLayout";

const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registering with:", { fullName, email, password });
    navigate("/dashboard");
  };

  const handleOAuthSignup = (provider) => {
    console.log(`Signing up with ${provider}`);
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-green-400">
          Create an Account
        </h2>

        <div className="flex flex-col space-y-3">
          <button
            className="flex items-center justify-center w-full px-4 py-3 rounded-lg bg-white text-gray-900 hover:bg-gray-200 font-medium transition-all duration-300"
            onClick={() => handleOAuthSignup("Google")}
          >
            <FontAwesomeIcon icon={faGoogle} className="mr-3 text-red-500" />
            Sign up with Google
          </button>
          <button
            className="flex items-center justify-center w-full px-4 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 font-medium transition-all duration-300"
            onClick={() => handleOAuthSignup("GitHub")}
          >
            <FontAwesomeIcon icon={faGithub} className="mr-3 text-white" />
            Sign up with GitHub
          </button>
          <button
            className="flex items-center justify-center w-full px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300"
            onClick={() => handleOAuthSignup("Twitter")}
          >
            <FontAwesomeIcon icon={faTwitter} className="mr-3 text-white" />
            Sign up with Twitter
          </button>
        </div>

        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-600"></div>
          <p className="px-4 text-gray-400">OR</p>
          <div className="flex-1 border-t border-gray-600"></div>
        </div>

        <form className="space-y-4" onSubmit={handleRegister}>
          <div className="flex items-center border border-gray-600 rounded-lg px-4 py-3 bg-gray-700">
            <FontAwesomeIcon icon={faUser} className="text-green-400 mr-3" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent outline-none text-white placeholder-gray-400"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center border border-gray-600 rounded-lg px-4 py-3 bg-gray-700">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-green-400 mr-3"
            />
            <input
              type="email"
              placeholder="Email Address"
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
              placeholder="Create Password"
              className="w-full bg-transparent outline-none text-white placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-bold transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <button
            className="text-green-400 hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Register;
