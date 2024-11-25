import React from 'react';
import useModal from '../ContextApi/Usemodal';

const Modal = () => {
  const { isModalOpen, toggleModal } = useModal();

  // Conditionally render the modal based on `isModalOpen`
  if (!isModalOpen) {
    return null; // Return nothing if the modal is not open
  }

  return (
    <div className="modal show" style={{ display: 'block',height:'500px' }} tabindex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={toggleModal} // Close modal on button click
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
              data-dismiss="modal"
              onClick={toggleModal} // Close modal on button click
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
