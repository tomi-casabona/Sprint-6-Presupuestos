import { useEffect } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ isOpen, onClose, type }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    } else {
      window.removeEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }
  const content =
    type === "Number of pages"
      ? [
          "Could add the pages your project needs.",
          "The price is 30 euros each",
        ]
      : ["Project languages could be added.", "The price is 30 euros each."];
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md transition-opacity duration-200"
        onClick={onClose}
      />

      <div
        className="bg-white p-6 rounded-lg shadow-lg relative transition-transform transform-gpu duration-200 scale-105"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="font-bold text-2xl">{type}</h1>
        {content.map((line, index) => (
          <p className="text-lg" key={index}>
            {line}
          </p>
        ))}

        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="btn btn-primary">
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
