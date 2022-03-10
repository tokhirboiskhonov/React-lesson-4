const ButtonUseRef = ({ text, openModal }) => {
    return (
      <button className="modal__button" onClick={openModal}>
        {text}
      </button>
    );
  };
  
  const ButtonUseState = ({ text, setStyle }) => {
    return (
      <button
        className="modal__button"
        onClick={() => {
          setStyle("open");
        }}
      >
        {text}
      </button>
    );
  };
  
  export { ButtonUseRef, ButtonUseState };
  