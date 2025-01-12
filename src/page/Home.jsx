/* eslint-disable react/prop-types */
import Logo from "@/assets/images/logo.png";
import { Outlet } from "react-router-dom";

const Home = () => {
    
      return (
        <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
          {/* Header */}
          <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold text-green-600">QuickNote AI</h1>
          </header>
    
          {/* Main Content with Smooth GIF Rotation */}
          <main className="relative flex-grow flex items-center justify-center">
        
          <Outlet />  
          </main>
     
          {/* Footer */}
          <footer className="bg-white shadow-inner py-3 text-center text-sm">
            <p>
              © {new Date().getFullYear()} QuickNote AI. Made with ❤️ by{" "}
              <a
                href="https://ajmalnasumudeen.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ajmal Nasumudeen
              </a>.
            </p> |

            <a
                href="https://quicknote.ajmalnasumudeen.in/privacy-policy"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>.
          </footer>
        </div>
      );
}

export default Home