import ReactDOM from "react-dom";
import "./Modal.css";

const modalstyles = {
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  zIndex: 1000,
  padding: "50px",
  width: "35%"
};

const BackDrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div style={modalstyles} className={props.className}>
      <div>{props.children}</div>
    </div>
  );
};

const portalID = document.getElementById("input-root");

export default function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>, portalID)}
      {ReactDOM.createPortal(
        <ModalOverlay className={props.className}>{props.children}</ModalOverlay>,
        portalID
      )}
    </>
  );
}
