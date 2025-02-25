/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button"; // Ensure Button component exists
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = ({ extraClass = "" }) => {
  const navigate = useNavigate();

  return (
    <div className={`flex justify-start w-full ${extraClass}`}>
      <Button
        onClick={() => navigate("../")}
        className="flex items-center space-x-2"
      >
        <ArrowLeft size={18} />
      </Button>
    </div>
  );
};

export default BackButton;
