import { Button } from "@/components/ui/button";
import Logo from "@/assets/images/logo.png"; // Add your logo in the assets folder

const LandingPage = () => {
  const handleInstallClick = () => {
    window.open("https://chrome.google.com/webstore", "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <img src={Logo} alt="Logo" className="w-10 h-10" />
        <h1 className="text-2xl font-bold text-green-600">QuickNote AI</h1>

      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <Button
          onClick={handleInstallClick}
          className="px-8 py-4 text-lg font-semibold bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition"
        >
          Install Extension
        </Button>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-3 text-center text-sm">
        <p>© {new Date().getFullYear()} QuickNote AI. Made with ❤️ by <a href="https://ajmalnasumudeen.in/" target="_blank" rel="noopener noreferrer">Ajmal Nasumudeen</a>.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
