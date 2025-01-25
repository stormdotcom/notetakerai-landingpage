import { AlertCircle, Bookmark, Mic, Share } from "lucide-react";
import { useState } from "react";

const TranscriptionInterface = () => {
  const [lowVolumeAlert, setLowVolumeAlert] = useState(true);

  return (
    <div className="p-6 h-screen w-full bg-gray-50 flex flex-col items-center">
      {/* Header */}
      <div className="flex justify-between items-center w-full max-w-3xl mb-4">
        <div>
          <h1 className="text-lg font-medium">New recording</h1>
          <p className="text-sm text-gray-500">
            01/25/2025 22:14 · English
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
            <p className="text-sm font-medium">Real-time translation ⚡</p>
            <select
              className="text-sm border border-gray-300 rounded-md p-1 focus:ring-blue-500 focus:border-blue-500"
              disabled
            >
              <option>Translation: Off</option>
            </select>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex flex-col items-center">
          <img
            src="/illustration-placeholder.png"
            alt="Speak Illustration"
            className="w-32 h-32 mb-4"
          />
          <p className="text-sm text-center text-gray-500">
            Speak clearly and at a moderate speed, avoid using dialects, and
            avoid multiple people speaking at the same time.
          </p>
        </div>
      </div>

      {/* Low Volume Alert */}
    <div className="flex flex-col justify-center items-center fixed bottom-10 w-full left-[2%]">
    {lowVolumeAlert && (
        <div className="flex items-start bg-yellow-50 border border-yellow-300 text-yellow-600 rounded-lg p-4 mt-4 max-w-3xl">
          <AlertCircle size={20} className="mr-3 mt-1" />
          <div>
            <p className="text-sm">
              Low volume detected. Adjust mic or ask speaker to speak louder for
              accurate transcription.
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

      {/* Bottom Controls */}
      <div className="flex items-center space-x-4 mt-6">
        <button className="flex items-center bg-blue-100 text-blue-500 p-2 rounded-lg">
          <Mic size={20} className="mr-2" />
          <span>00:31</span>
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
          Stop
        </button>
      </div>
    </div>
    </div>
  );
};

export default TranscriptionInterface;
