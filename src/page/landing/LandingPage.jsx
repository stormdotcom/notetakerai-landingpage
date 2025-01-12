import { Button } from "@/components/ui/button";
import HeroGif from "@/assets/gifs/1.gif";
import HeroGifTwo from "@/assets/gifs/2.gif";
import HeroGifThree from "@/assets/gifs/3.gif";
import HeroGifFour from "@/assets/gifs/4.gif";
import HeroGifFive from "@/assets/gifs/4.gif";
import { useState, useEffect, useRef } from "react";

const LandingPage = ( ) => {
  const [currentGif, setCurrentGif] = useState(HeroGif);
  const gifs = [HeroGif, HeroGifTwo, HeroGifThree, HeroGifFour, HeroGifFive];
  const gifIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      gifIndex.current = (gifIndex.current + 1) % gifs.length;
      setCurrentGif(gifs[gifIndex.current]);
    }, 5000); // Change GIF every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleInstallClick = () => {
    window.open("https://chrome.google.com/webstore", "_blank");
  };

  return (
      <>
        <img
          src={currentGif}
          alt="QuickNote AI in action"
          className="w-full h-[90vh] object-cover transition-opacity duration-1000 ease-in-out blur"
          loading={currentGif === HeroGif ? "eager" : "lazy"}
        />

        {/* Install Button - Centered Over GIF */}
        <Button
          onClick={handleInstallClick}
          className="absolute px-8 py-4 text-lg font-semibold bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition"
        >
          Install Extension
        </Button>
      </>
  );
};

export default LandingPage;
