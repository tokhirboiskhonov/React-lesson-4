import React from "react";

import "./Modal.scss";

const Modal = React.forwardRef(({ text = "Salom O'zbekiston", closeModal, modalStyle }, ref) => {
  return (
    <div
      className={`modal ${modalStyle === "open" ? "modal--open" : ""}`}
      aria-label="modal"
      ref={ref}
      onClick={closeModal}
    >
      <div className="modal__inner">
        <h2 className="modal__heading">{text}</h2>
        <p>Xush keldingiz O'zbekistonga
        </p>
        <button className="modal__close" name="modal-close" onClick={closeModal}>
          &times;
        </button>
      </div>
    </div>
  );
});

export default Modal;
