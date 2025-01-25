import { createContext, useContext, useRef, useState } from "react";

// Create Context
const AudioContext = createContext();

// Context Provider
export const AudioProvider = ({ children }) => {
  const [mediaStream, setMediaStream] = useState(null); // Store the MediaStream
  const [audioChunks, setAudioChunks] = useState([]); // Store recorded audio chunks
  const mediaRecorderRef = useRef(null); // Store the MediaRecorder instance

  // Function to start the MediaRecorder
  const startMediaRecorder = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setMediaStream(stream);

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      const chunks = [];
      mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        setAudioChunks(chunks);
      };

      mediaRecorder.start();
      return mediaRecorder;
    } catch (error) {
      console.error("Error accessing microphone:", error);
      throw error;
    }
  };

  // Function to stop the MediaRecorder
  const stopMediaRecorder = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop());
      }
      return true;
    }
    return false;
  };

  return (
    <AudioContext.Provider
      value={{
        mediaStream,
        audioChunks,
        startMediaRecorder,
        stopMediaRecorder,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

// Custom Hook to Use the Audio Context
export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
