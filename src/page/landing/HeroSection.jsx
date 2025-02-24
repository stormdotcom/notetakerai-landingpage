import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  // Texts to animate
  const texts = [
    "Actionable Insights",
    "Summarization for Better Productivity",
    "AI-Powered Meeting Notes",
  ];

  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentFullText = texts[textIndex];

    if (!isDeleting && charIndex < currentFullText.length) {
      setTimeout(() => {
        setCurrentText(currentFullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      setTimeout(() => {
        setCurrentText(currentFullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed);
    } else {
      setTimeout(() => {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, 1000);
    }
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white px-6">
      <div className="max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Turn Meetings & Sessions into <br />
          <span className="text-green-400">
            {currentText}
            <span className="animate-blink">|</span>
          </span>
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          AI-powered transcription that captures your meetings, summarizes key
          points, and extracts action items—so you can focus on what matters.
        </p>

        <div className="mt-6">
          <button
            onClick={() => navigate("./dashboard")}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300"
          >
            Get Started 🚀
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
