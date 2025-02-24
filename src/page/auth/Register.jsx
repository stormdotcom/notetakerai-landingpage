import {
  faGithub,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./Views/AuthLayout";

const Register = () => {
  const navigate = useNavigate();

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
