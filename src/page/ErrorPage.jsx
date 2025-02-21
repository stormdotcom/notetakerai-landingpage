import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-900 text-white text-center px-4">
      <h1 className="text-6xl font-extrabold text-green-400">404</h1>
      <h2 className="text-2xl font-semibold mt-2">Oops! Page Not Found</h2>
      <p className="text-gray-400 mt-2">
        {" The page you're looking for doesn't exist or has been moved."}
      </p>
      <Link to="/">
        <Button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-lg">
          Go Home
        </Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
