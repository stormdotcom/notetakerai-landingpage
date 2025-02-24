import { useAudio } from "@/context/AudioContext";
import { AlertCircle, Bookmark, Mic, Share, Trash } from "lucide-react";
import moment from "moment";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import AudioWaveVisualizer from "./AudioWaveVisualizer";

const TranscriptionInterface = () => {
  const {
    language,
    lowVolumeAlert,
    isRecording,
    setLowVolumeAlert,
    startMediaRecorder,
    stopMediaRecorder,
    elapsedTime,
    realTimeTranslation,
    setRealTimeTranslation,
  } = useAudio();

  const location = useLocation();
  const { date, language: stateLanguage } = location.state || {};
  const formattedDate = date
    ? moment.unix(date).format("YYYY-MM-DD HH:mm")
    : "No date provided";

  // Format elapsed time as MM:SS
  const formatElapsedTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  // State for holding recording UI state
  const [holding, setHolding] = useState(false);
  const [cancelled, setCancelled] = useState(false);

  // Handle hold-to-record (WhatsApp-style)
  const handleHoldStart = () => {
    setHolding(true);
    setCancelled(false);
    startMediaRecorder();
  };

  const handleHoldEnd = () => {
    if (!cancelled) {
      stopMediaRecorder();
    }
    setHolding(false);
  };

  const handleTranslationChange = (event) => {
    if (isRecording) {
      setRealTimeTranslation(event.target.value === "on");
    }
  };

  return (
    <div className="p-6 h-screen w-full bg-gray-50 flex flex-col items-center">
      {/* Header */}
      <div className="flex justify-between items-center w-full max-w-3xl mb-4">
        <div>
          <h1 className="text-lg font-medium flex items-center space-x-2">
            <span>New recording</span>
            {isRecording && (
              <span className="w-2 h-2 mt-1 bg-red-500 rounded-full animate-pulse"></span>
            )}
          </h1>
          <p className="text-sm text-gray-500">
            {formattedDate} · {language || stateLanguage}
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Share size={20} />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Bookmark size={20} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center bg-white w-full max-w-3xl rounded-lg shadow p-6">
        {/* Real-time translation */}
        <div className="flex justify-between w-full mb-4">
          <p className="text-sm font-medium">Transcript</p>
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">
              {realTimeTranslation && (
                <span className="w-2 h-2 mt-1  animate-pulse">⚡</span>
              )}
              Real-time translation
            </p>
            <select
              className="text-sm border border-gray-300 rounded-md p-1 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleTranslationChange}
              value={realTimeTranslation ? "on" : "off"}
            >
              <option value="off">Translation: Off</option>
              <option value="on">Translation: On</option>
            </select>
          </div>
        </div>
        {/* Illustration */}
        <AudioWaveVisualizer />
      </div>

      {/* Low Volume Alert */}
      <div className="flex flex-col justify-center items-center fixed bottom-10 w-full left-[2%]">
        {lowVolumeAlert && (
          <div className="flex items-start bg-yellow-50 border border-yellow-300 text-yellow-600 rounded-lg p-4 mt-4 max-w-3xl">
            <AlertCircle size={20} className="mr-3 mt-1" />
            <div>
              <p className="text-sm">
                Low volume detected. Adjust mic or ask speaker to speak louder
                for accurate transcription.
              </p>
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="dont-remind"
                  className="mr-2"
                  onChange={() => setLowVolumeAlert(false)}
                />
                <label htmlFor="dont-remind" className="text-sm">
                  Don’t remind me again.
                </label>
              </div>
            </div>
            <button
              onClick={() => setLowVolumeAlert(false)}
              className="ml-auto text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        )}

        {/* WhatsApp-Style Recording Controls */}
        <div className="flex items-center space-x-4 mt-6">
          {/* Display Recording Time */}
          <button className="flex items-center bg-blue-100 text-blue-500 px-4 py-2 rounded-full shadow">
            <Mic size={20} className="mr-2" />
            <span>{formatElapsedTime(elapsedTime)}</span>
          </button>

          {/* WhatsApp-Style Hold to Record */}
          <button
            className={`flex items-center px-6 py-3 rounded-full transition duration-300 shadow-md ${
              holding ? "bg-red-500 text-white" : "bg-green-500 text-white"
            }`}
            onMouseDown={handleHoldStart}
            onMouseUp={handleHoldEnd}
            onTouchStart={handleHoldStart}
            onTouchEnd={handleHoldEnd}
          >
            {holding ? "Recording..." : "Hold to Record"}
          </button>

          {/* Cancel Button */}
          {holding && (
            <button
              className="text-gray-600 hover:text-gray-800 transition duration-300"
              onClick={() => {
                stopMediaRecorder();
                setHolding(false);
                setCancelled(true);
              }}
            >
              <Trash size={24} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TranscriptionInterface;
