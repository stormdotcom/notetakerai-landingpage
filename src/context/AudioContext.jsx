/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createAudioSession, sendInstantAudio } from "@/app/api";
import { handleResponseError } from "@/utils/errorHandler";
import { createContext, useContext, useRef, useState } from "react";

// Create Context
const AudioContext = createContext();

// Context Provider
export const AudioProvider = ({ children }) => {
  const [mediaStream, setMediaStream] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const mediaRecorderRef = useRef(null);
  const [language, setLanguage] = useState("");
  const [lowVolumeAlert, setLowVolumeAlert] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [passingData, setPassingData] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [realTimeTranslation, setRealTimeTranslation] = useState(false);
  const initSession = async (data) => {
    setLoading(true);
    try {
      await createAudioSession(data);
      setLoading(false);
    } catch (error) {
      await handleResponseError(error);
    }
  };

  const uploadAudioChunk = async (chunks) => {
    try {
      if (!sessionId) {
        console.error("No session ID found, cannot upload audio chunk.");
        return;
      }

      const timestamp = Date.now().toString();
      const blob = new Blob(chunks, { type: "audio/webm" });

      const formData = new FormData();
      const file = new File([blob], `audio-${timestamp}.webm`, {
        type: "audio/webm",
      });

      formData.append("file", file);
      formData.append("timeStamp", timestamp);
      formData.append("sessionId", sessionId);

      const response = await sendInstantAudio(formData);

      console.log("Audio chunk uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading audio chunk:", error);
    }
  };

  const startMediaRecorder = async () => {
    try {
      if (isRecording) return;
      if (!sessionId) {
        console.error("Session not initialized!");
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setMediaStream(stream);

      const recorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
      setMediaRecorder(recorder);
      mediaRecorderRef.current = recorder;
      setIsRecording(true);
      setElapsedTime(0);
      startTimer();

      let chunks = [];
      setPassingData(true);

      recorder.ondataavailable = async (event) => {
        chunks.push(event.data);

        // Calculate total size of collected chunks
        const totalSize = chunks.reduce((acc, chunk) => acc + chunk.size, 0);
        console.log({ totalSize });
        // ✅ Send chunks if they exceed 1MB (1048576 bytes)
        if (totalSize >= 1048576) {
          await uploadAudioChunk(chunks);
          chunks = []; // Reset chunk buffer after sending
        }
      };

      recorder.onstop = async () => {
        // ✅ Send remaining chunks before stopping
        if (chunks.length > 0) {
          await uploadAudioChunk(chunks);
        }
        setAudioChunks(chunks);
        setIsRecording(false);
      };

      recorder.start(); // Default chunking behavior
    } catch (error) {
      setPassingData(false);
      console.error("Error accessing microphone:", error);
      await handleResponseError(error);
    }
  };

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Function to stop MediaRecorder
  const stopMediaRecorder = () => {
    setPassingData(false);
    if (mediaRecorder && mediaRecorder.state === "recording") {
      mediaRecorder.stop();
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop());
        setMediaStream(null);
      }
      stopTimer(); // Stop timer
      setIsRecording(false);
      return true;
    }
    return false;
  };

  return (
    <AudioContext.Provider
      value={{
        realTimeTranslation,
        setRealTimeTranslation,
        setSessionId,
        passingData,
        initSession,
        loading,
        elapsedTime,
        isRecording,
        mediaStream,
        mediaRecorder,
        audioChunks,
        startMediaRecorder,
        stopMediaRecorder,
        lowVolumeAlert,
        setLowVolumeAlert,
        language,
        setLanguage,
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
