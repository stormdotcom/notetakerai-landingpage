import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAudio } from "@/context/AudioContext";
import { Mic } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateUUID } from "../../utils/homeUtils";

const UploadAudioCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState(""); // For language selection

  const navigate = useNavigate();

  const { startMediaRecorder } = useAudio();

  const handleStartRecording = async () => {
    try {
      await startMediaRecorder();
      const sessionId = generateUUID();
      navigate(`/dashboard/audio/record/${sessionId}`, {
        state: { language },
      });
      console.log("Recording started...");
    } catch (error) {
      console.error("Failed to start recording:", error);
    }
  };

  return (
    <>
      {/* Card Component */}
      <div
        className="p-5 max-w-[18rem] relative cursor-pointer group overflow-hidden bg-white shadow-md rounded-lg"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <Mic
          size={24}
          className="text-blue-500 transition-transform group-hover:scale-110 group-hover:-rotate-6"
        />
        <p className="mt-2 text-sm font-medium tracking-wide">Instant record</p>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-lg">
          {/* Modal Header */}
          <DialogHeader>
            <DialogTitle>Instant record</DialogTitle>
          </DialogHeader>

          {/* Modal Body */}
          <div className="space-y-4">
            {/* Transcription Language Selector */}
            <div>
              <label
                htmlFor="language"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Transcription language
              </label>
              <Select onValueChange={(value) => setLanguage(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="Spanish">Spanish</SelectItem>
                  <SelectItem value="French">French</SelectItem>
                  <SelectItem value="German">German</SelectItem>
                  <SelectItem value="Malayalam">Malayalam</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Modal Footer */}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>

              <Button onClick={handleStartRecording}>
                Record and transcribe
              </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UploadAudioCard;
