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
import { Video } from "lucide-react";
import { useState } from "react";

const RecordOnlineMeetingCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Card Component */}
      <div
        className="p-5 max-w-[18rem] relative cursor-pointer group overflow-hidden bg-white shadow-md rounded-lg"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-red-500/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <Video
          size={24}
          className="text-red-500 transition-transform group-hover:scale-110 group-hover:-rotate-6"
        />
        <p className="mt-2 text-sm font-medium tracking-wide">
          Record online meeting
        </p>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-2xl">
          {/* Modal Header */}
          <DialogHeader>
            <DialogTitle>Record online meeting</DialogTitle>
            <p className="text-sm text-gray-500">
              Zoom, Google Meet, Microsoft Teams join the meeting.{" "}
            </p>
          </DialogHeader>

          {/* Calendar Linking */}

          {/* Tabs for Monolingual and Bilingual */}
          <div className="flex space-x-4 mb-4">
            <button className="flex-1 text-center py-2 border-b-2 border-blue-500 font-medium">
              Monolingual transcription
            </button>
          </div>

          {/* Transcription Language */}
          <div className="mb-4">
            <label
              htmlFor="language"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Transcription language
            </label>
            <Select>
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

          {/* Meeting Invite Link */}
          <div className="mb-4">
            <label
              htmlFor="meeting-link"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Meeting invite link
              <span
                className="ml-2 text-gray-500 cursor-pointer"
                title="Learn how to get invitation link"
              >
                ℹ️
              </span>
            </label>
            <input
              id="meeting-link"
              type="text"
              placeholder="Paste the meeting invite link here"
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Footer */}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => alert("Transcription started")}>
              Transcribe now
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RecordOnlineMeetingCard;
