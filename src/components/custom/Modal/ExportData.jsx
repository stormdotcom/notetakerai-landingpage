import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
  
  import { Download, File, FileText, Text } from "lucide-react";
import { useState } from "react";
  
  const ExportData = () => {
    const [fileName, setFileName] = useState(""); // Dynamic file name
  
    // Function to handle file download
    const handleDownload = (format) => {
      if (!fileName.trim()) {
        alert("Please enter a valid file name.");
        return;
      }
  
      const fileFormats = {
        pdf: "application/pdf",
        docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        txt: "text/plain",
      };
  
      // Simulated content for download
      const content = `This is your exported summary in ${format.toUpperCase()} format.`;
  
      const blob = new Blob([content], { type: fileFormats[format] });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${fileName}.${format}`;
      link.click();
  
      URL.revokeObjectURL(link.href);
    };
  
    return (
      <Dialog>
        <DialogTrigger className="w-full cursor-pointer flex items-center justify-start gap-2 py-2 px-3 text-sm text-white bg-green-600 rounded-md hover:bg-green-700 transition mb-3">
        <Download size={18} />
        Export Data
        </DialogTrigger>
  
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-gray-800">
              Export
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500">
              Enter a file name and choose the format to download.
            </DialogDescription>
          </DialogHeader>
  
          {/* File Name Input */}
          <div className="mt-4">
            <label htmlFor="fileName" className="block text-sm font-medium text-gray-700 mb-1">
              File Name
            </label>
            <input
              id="fileName"
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              placeholder="Enter file name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
  
          {/* Download Options */}
          <div className="mt-6 space-y-3">
            {/* PDF Download */}
            <button
              onClick={() => handleDownload("pdf")}
              className="w-full flex items-center justify-between p-2 border rounded-md hover:bg-gray-100 transition"
            >
              <div className="flex items-center gap-2">
                <File size={24} className="text-red-600" />
                <span className="font-medium">Download as PDF</span>
              </div>
              <Download size={20} />
            </button>
  
            {/* DOCX Download */}
            <button
              onClick={() => handleDownload("docx")}
              className="w-full flex items-center justify-between p-2 border rounded-md hover:bg-gray-100 transition"
            >
              <div className="flex items-center gap-2">
                <Text size={24} className="text-blue-600" />
                <span className="font-medium">Download as DOCX</span>
              </div>
              <Download size={20} />
            </button>
  
            {/* TXT Download */}
            <button
              onClick={() => handleDownload("txt")}
              className="w-full flex items-center justify-between p-2 border rounded-md hover:bg-gray-100 transition"
            >
              <div className="flex items-center gap-2">
                <FileText size={24} className="text-green-600" />
                <span className="font-medium">Download as TXT</span>
              </div>
              <Download size={20} />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default ExportData;
  