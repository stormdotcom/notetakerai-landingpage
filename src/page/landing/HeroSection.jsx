import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
    // Animated text state
    const texts = ["Actionable Insights", "Summarization for Better Productivity", "AI-Powered Meeting Notes"];
    const [currentText, setCurrentText] = useState(texts[0]);
    let textIndex = useRef(0);
  
    useEffect(() => {
      const textInterval = setInterval(() => {
        textIndex.current = (textIndex.current + 1) % texts.length;
        setCurrentText(texts[textIndex.current]);
      }, 3000);
  
      return () => clearInterval(textInterval);
    }, []);
  
    return (
      <section className="w-full h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white px-6">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Turn Meetings & Sessions into <br />
            <span className="text-green-400 transition-opacity duration-1000 ease-in-out">
              {currentText}
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            AI-powered transcription that captures your meetings, summarizes key points, 
            and extracts action items—so you can focus on what matters.
          </p>
          {/* CTA Button */}
          <div className="mt-6">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300">
              Get Started 🚀
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  
