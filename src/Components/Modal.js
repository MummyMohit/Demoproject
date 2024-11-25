import React from "react";
import { useModal } from "../ContextApi/Context";

const Modal = () => {
  const { isModalOpen, toggleModal } = useModal();
  console.log(isModalOpen,"modal clicking data")
  return (
    <div
    className={`modal ${isModalOpen ? "show" : ""}`}
    style={isModalOpen ? { display: "block", opacity: 1 } : { display: "none",height:'500px' }}
  >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={toggleModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <div
        className="modal-backdrop"
        style={{ display: isModalOpen ? "block" : "none" }}
      ></div>
    </div>
  );
};

export default Modal;

