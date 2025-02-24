import { ClipLoader } from "react-spinners";
import logo from "../../assets/images/logo.png";
const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={logo} alt="Qnotes AI" className="w-24 h-24 mb-4" />
      <ClipLoader color="#16a34a" size={40} />
      <p className="text-lg text-green-600 font-semibold mt-2">Loading...</p>
    </div>
  );
};

export default Loader;
