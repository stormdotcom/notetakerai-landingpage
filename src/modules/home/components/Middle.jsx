/* eslint-disable react/prop-types */
import { useSession } from "@/context/SessionContext";
import { Chrome, Pause, Play } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { renderSkeleton } from "./Skelton/MiddleSkelton";

const Middle = ({ loading = false,  }) => {
  const { sessionId } = useParams();
    const {  getSessionById, sessions } = useSession();
    const summaries = getSessionById(sessionId);

  // Function to handle text-to-speech
  const [text, setText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speech, setSpeech] = useState(null);

  // Start or Resume Speech
  const speakText = (text) => {
    if (text.trim() === '') return;

    if (speech && isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.pitch = 1;
      utterance.rate = 1;
      utterance.volume = 1;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => {
        setIsSpeaking(false);
        setIsPaused(false);
      };

      window.speechSynthesis.speak(utterance);
      setSpeech(utterance);
    }
  };

  // Pause Speech
  const pauseSpeech = () => {
    if (isSpeaking && !isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  // Resume Speech
  const resumeSpeech = () => {
    if (isSpeaking && isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  };

  // Stop Speech
  const stopSpeech = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  };

  return (
    <div className="max-h-[90vh] overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 rounded-lg min-w-full">
      <div className="flex">
      <Chrome className="w-5 h-5 text-gray-800 m-2" color="#3e9392" />
      <h6 className="sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800"> 
     
        Title Of session
      </h6>
      </div>

      {loading
        ? renderSkeleton()
        : summaries?.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-green-50 border-l-4 border-green-500 p-3 sm:p-4 rounded-lg shadow-sm"
            >
              {/* Section Title */}
              <div className="flex items-center mb-2">
                <span className="bg-gray-200 text-gray-800 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md text-[10px] sm:text-xs font-medium mr-1 sm:mr-2">
                  Summary {idx + 1}
                </span>

                {/* User Info (Image Removed) */}
                <div className="text-[10px] sm:text-sm text-gray-600">
                  User (English)
                </div>
              </div>

              {/* Summary Content */}
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                {item.summary}
              </p>

              {/* Bottom Playback Button */}
             <div className="flex"> 
             <div className="mt-2 sm:mt-3 flex items-center space-x-1 sm:space-x-2">
                <button onClick={()=> pauseSpeech()} className="p-1 sm:p-1.5 rounded-full hover:bg-green-100">
                  <Pause size={14}  />
                </button>
              </div>
              <div className="mt-2 sm:mt-3 flex items-center space-x-1 sm:space-x-2">
                <button onClick={()=>speakText(item.summary)} className="p-1 sm:p-1.5 rounded-full hover:bg-green-100">
                  <Play size={14}   />
                </button>
              </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Middle;
