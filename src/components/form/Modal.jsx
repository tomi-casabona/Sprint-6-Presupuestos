export const Modal = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;
  let content;
  type === "Number of pages"
    ? (content =
        "Could add the pages your project needs. The price is 30 euros each one")
    : (content =
        "Project lenguages could be added. The price is 30 euros each one");
  return (
    <dialog open className="modal">
      {" "}
      {/* Usar 'open' para mostrar el modal */}
      <div className="modal-box">
        <h3 className="font-bold text-lg">{type}</h3>
        <p className="py-4">{content}</p>
        <div className="modal-action">
          <button onClick={onClose} className="btn">
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};
