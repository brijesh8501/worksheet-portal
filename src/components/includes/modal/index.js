import React from 'react';

// eslint-disable-next-line react/prop-types
const Modal = ({ children, show, hideModal, modalTitle, modalFooter }) => {
  return(
  <div
    className={`modal ${show ? 'modal-show' : ''}`}
    tabIndex="-1"
    role="dialog"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{modalTitle}</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={hideModal}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className='modal-footer justify-content-start'>
          {modalFooter}
        </div>
      </div>
    </div>
  </div>
);
}

export default Modal;