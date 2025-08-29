import { PopupButton } from "react-calendly";
import { Calendar } from "lucide-react";

export const CalendlyFloatingButton = ({ side = "right" }) => {
  const positionClass = side === "left" ? "left-6" : "right-6";

  return (
    <div className={`fixed bottom-6 ${positionClass} z-50`}>
      <PopupButton
        url="https://calendly.com/nexflow-info/30min"
        rootElement={document.getElementById("root")} // important for Vite/React
        text={
          <div className="flex items-center gap-2 px-4 py-3 rounded-full shadow-lg bg-[#3fa69b] text-white font-medium  transition">
            <Calendar size={18} />
            <span>Book a Call</span>
          </div>
        }
      />
    </div>
  );
};
