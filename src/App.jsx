import React from "react";
import "./App.scss";
import { ButtonUseRef, ButtonUseState } from "./Components/Button/Button";
import Modal from "./Components/Modal/Modal";

function App() {
  const [modalStyle, setStyle] = React.useState("close");
  const modalRef = React.useRef(null);

  const openModal = () => {
    modalRef.current.classList.add("modal--open");
  };

  const closeModal = (evt) => {
    if (evt.target.ariaLabel === "modal" || evt.target.name === "modal-close") {
      modalRef.current.classList.remove("modal--open");
      setStyle("close");
    }
  };

  return (
    <div className="App">
      <ButtonUseRef text={"Open useRef"} openModal={openModal} />
      <ButtonUseState text={"Open useState"} setStyle={setStyle} />
      <Modal ref={modalRef} closeModal={closeModal} modalStyle={modalStyle} />
    </div>
  );
}

export default App;
