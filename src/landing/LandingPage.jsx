import { Button } from "@/components/ui/button";
import Logo from "@/assets/images/logo.png";
import HeroGif from "@/assets/gifs/1.gif";
import HeroGifTwo from "@/assets/gifs/2.gif";
import HeroGifThree from "@/assets/gifs/3.gif";
import HeroGifFour from "@/assets/gifs/4.gif";
import { useState, useEffect } from "react";

const LandingPage = () => {
  const [currentGif, setCurrentGif] = useState(HeroGif);
  const gifs = [HeroGif, HeroGifTwo, HeroGifThree, HeroGifFour];
  let gifIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      gifIndex = (gifIndex + 1) % gifs.length;
      setCurrentGif(gifs[gifIndex]);
    }, 5000); // Change GIF every 5 seconds

    return () => clearInterval(interval);
  }, []);

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

      {/* Main Content with Smooth GIF Rotation */}
      <main className="relative flex-grow flex items-center justify-center">
        <img
          src={currentGif}
          alt="QuickNote AI in action"
          className="w-full h-[90vh] object-cover transition-opacity duration-1000 ease-in-out"
          loading={currentGif === HeroGif ? "eager" : "lazy"}
        />

        {/* Install Button - Centered Over GIF */}
        <Button
          onClick={handleInstallClick}
          className="absolute px-8 py-4 text-lg font-semibold bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition"
        >
          Install Extension
        </Button>
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
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
