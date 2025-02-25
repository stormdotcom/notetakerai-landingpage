import { Card } from "@/components/ui/card";
import { Monitor } from "lucide-react";
import RecordOnlineMeetingCard from "./Tools/RecordOnlineMeetingCard ";
import UploadAudioModal from "./Tools/UploadAudioModal";
import UploadTranscribeCard from "./Tools/UploadTranscribeCard ";

const ToolsSections = () => {
  return (
    <>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Tools Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Instant Record */}

          <UploadAudioModal />
          {/* Upload & Transcribe */}
          <UploadTranscribeCard />

          {/* Record Online Meeting */}
          <RecordOnlineMeetingCard />

          {/* Record Screen (Beta) */}
          <Card className="p-5 max-w-[18rem] relative cursor-pointer group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-orange-500/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Monitor
              size={16}
              className="text-orange-500 transition-transform group-hover:scale-110 group-hover:-rotate-6"
            />
            <p className="mt-2 text-md font-medium flex items-center">
              Record screen{" "}
              <span className="ml-2 text-gray-400 text-sm">(Upcoming)</span>
            </p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ToolsSections;
