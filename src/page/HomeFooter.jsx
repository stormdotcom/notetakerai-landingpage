import { useNavigate } from "react-router-dom";

const HomeFooter = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white py-6 text-center border-t border-gray-500 shadow-lg">
      <p className="mb-2 text-sm">
        © {new Date().getFullYear()} QNotes AI. Made with ❤️ by{" "}
        <a
          href="https://ajmalnasumudeen.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-300 transition"
        >
          Ajmal Nasumudeen
        </a>
      </p>
      <a
        className="text-sm cursor-pointer transition"
        onClick={() => navigate("/privacy-policy")}
        rel="noopener noreferrer"
      >
        Privacy Policy
      </a>
    </footer>
  );
};

export default HomeFooter;
