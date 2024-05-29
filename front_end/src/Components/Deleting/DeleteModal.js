import React from "react";
import DeleteForm from "./DeleteForm";

const DeleteModal = () => {
  return (
    <div>
      <div>
        <button
          type="button"
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#deleteModal"
        >
          <i className="bi bi-trash"></i>
        </button>

        <div
          className="modal fade"
          id="deleteModalModal"
          tabIndex="-1"
          aria-labelledby="deleteModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="deleteModalLabel">
                  Are you sure you would like to delete this session?
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <DeleteForm />
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Yes, delete
                </button>
                <button type="submit" className="btn btn-warning">
                  No, Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
