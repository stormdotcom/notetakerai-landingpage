import { useUser } from "@/context/UserContext";
import {
  faGithub,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./Views/AuthLayout";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useUser();

  const handleOAuthLogin = async (provider) => {
    await login(provider);
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
