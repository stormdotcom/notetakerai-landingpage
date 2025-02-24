import { useAudio } from "@/context/AudioContext";
import { getBrowserInfo } from "@/lib/browserUtils";
import { useEffect } from "react";
import { LiveAudioVisualizer } from "react-audio-visualize";
import { useParams } from "react-router-dom";

const AudioWaveVisualizer = () => {
  const { mediaRecorder, initSession, setSessionId } = useAudio();
  const { sessionId } = useParams();
  const browserInfo = getBrowserInfo();
  const timeStamp = Date.now().toString();
  useEffect(() => {
    setSessionId(sessionId);
    initSession({ sessionId, type: "instant", browserInfo, timeStamp });
  }, []);
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Render Live Audio Waveform only if mediaRecorder is available */}
      {mediaRecorder ? (
        <LiveAudioVisualizer
          mediaRecorder={mediaRecorder}
          width={500}
          height={150}
          barWidth={2}
          gap={1}
          backgroundColor="white"
          barColor="#16a34a"
          fftSize={512}
          maxDecibels={-10}
          minDecibels={-90}
          smoothingTimeConstant={0.4}
          style={{ border: "2px solid #16a34a", borderRadius: "8px" }}
        />
      ) : (
        <p className="text-gray-500">Recording not started.</p>
      )}

      <p className="text-sm text-center text-gray-500">
        Speak clearly and at a moderate speed, avoid using dialects, and avoid
        multiple people speaking at the same time.
      </p>
    </div>
  );
};

export default AudioWaveVisualizer;
