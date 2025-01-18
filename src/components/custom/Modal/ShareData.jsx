import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
  
  import { Facebook, Link, MessageSquare, Share2 } from "lucide-react";
import { useState } from "react";
  
  const ShareContent = () => {
    const [shareLink, setShareLink] = useState("https://example.com"); // Replace with dynamic link if needed
  
    // Function to copy the link to the clipboard
    const handleCopyLink = () => {
      navigator.clipboard.writeText(shareLink);
      alert("Link copied to clipboard!");
    };
  
    // Function to share on WhatsApp
    const handleWhatsAppShare = () => {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareLink)}`;
      window.open(whatsappUrl, "_blank");
    };
  
    // Function to share on Facebook
    const handleFacebookShare = () => {
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`;
      window.open(facebookUrl, "_blank");
    };
  
    return (
      <Dialog>
        <DialogTrigger className="w-full flex items-center justify-start gap-2 py-2 px-3 text-sm text-green-700 border border-green-700 rounded-md hover:bg-gray-100 transition">
          <Share2 size={18} />
          Share 
        </DialogTrigger>
  
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-gray-800">
              Share Summary
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500">
              Share this summary via your preferred platform.
            </DialogDescription>
          </DialogHeader>
  
          {/* Share Options */}
          <div className="mt-6 space-y-3">
            {/* WhatsApp Share */}
            <button
              onClick={handleWhatsAppShare}
              className="w-full flex items-center justify-between p-2 border rounded-md hover:bg-gray-100 transition"
            >
              <div className="flex items-center gap-2">
                <MessageSquare size={24} className="text-green-500" />
                <span className="font-medium">Share to WhatsApp</span>
              </div>
            </button>
  
            {/* Copy Link */}
            <button
              onClick={handleCopyLink}
              className="w-full flex items-center justify-between p-2 border rounded-md hover:bg-gray-100 transition"
            >
              <div className="flex items-center gap-2">
                <Link size={24} className="text-gray-600" />
                <span className="font-medium">Copy Link</span>
              </div>
            </button>
  
            {/* Facebook Share */}
            <button
              onClick={handleFacebookShare}
              className="w-full flex items-center justify-between p-2 border rounded-md hover:bg-gray-100 transition"
            >
              <div className="flex items-center gap-2">
                <Facebook size={24} className="text-blue-600" />
                <span className="font-medium">Share to Facebook</span>
              </div>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default ShareContent;
  