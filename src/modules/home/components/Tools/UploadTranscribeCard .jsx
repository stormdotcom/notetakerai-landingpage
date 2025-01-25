import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Upload } from "lucide-react";
import { useState } from "react";

const UploadTranscribeCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Card Component */}
      <div
        className="p-5 max-w-[18rem] relative cursor-pointer group overflow-hidden bg-white shadow-md rounded-lg"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-green-500/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <Upload
          size={24}
          className="text-green-500 transition-transform group-hover:scale-110 group-hover:-rotate-6"
        />
        <p className="mt-2 text-sm font-medium tracking-wide">
          Upload & transcribe
        </p>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-2xl">
          {/* Modal Header */}
          <DialogHeader>
            <DialogTitle>Upload & transcribe</DialogTitle>
          </DialogHeader>

          {/* Steps */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">
                1
              </div>
              <span className="text-sm font-medium">Upload records</span>
            </div>
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                2
              </div>
              <span className="text-sm font-medium">Configurations</span>
            </div>
          </div>

          {/* Upload Section */}
          <div>
            <p className="text-sm font-medium text-red-500 mb-2">* Upload records</p>
            <p className="text-sm text-gray-500 mb-4">
              The maximum uploaded file size is 1GB(audio) / 10GB(video).
            </p>

            {/* Drag-and-Drop */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-4">
              <Upload size={40} className="text-gray-400 mx-auto mb-4" />
              <p className="text-sm text-gray-700">Drag & drop record here or <span className="text-blue-500 cursor-pointer">Browser</span></p>
              <p className="text-xs text-gray-500 mt-2">
                Supported formats: wav, mp3, m4a, caf, aiff, avi, rmvb, flv, mp4, mov, wmv, wma, webm, 3gp, ogg
              </p>
            </div>

            {/* Upload from URL */}
            <div className="space-y-2">
              <label htmlFor="url" className="text-sm font-medium text-gray-700">Upload from URL</label>
              <input
                id="url"
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Paste URL here"
              />
            </div>
          </div>

          {/* Footer */}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => alert("Next step")}>Next</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UploadTranscribeCard;
