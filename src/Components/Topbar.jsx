import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Topbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSwitchChange = (evt) => {
    const {
      target: { value },
    } = evt;
    console.log("value = ", value);
  };
  function load() {
    console.log("load");
    setIsModalOpen(!isModalOpen);
  }
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light justify-content-between"
      style={{ marginTop: "20px", padding: "20px" }}
    >
      <div className="navbar-brandmb-0h1">Code Dexterous</div>
      <ul className="navbar-nav">
        <li className="nav-item active max-2">
          <div className="form-check form-switch">
            <input
              type="checkbox"
              className="form-check-input"
              name="undoRedo"
              onChange={handleSwitchChange}
            />
            <label className="form-check-label mr-2">Enable</label>
          </div>
        </li>

        <li className="nav-item active max-2">
          <button
            className="btn btn-outline-danger btn-sm"
            style={{ marginRight: "10px" }}
            // disabled={!canRedo}
          >
            <i className="bi bi-arrow-counterclockwise"></i>
          </button>
        </li>

        <li className="nav-item active max-2">
          <button
            className="btn btn-outline-primary btn-sm"
            style={{ marginRight: "10px" }}
            // disabled={!canRedo}
          >
            <i className="bi bi-arrow-clockwise"></i>
          </button>
        </li>
        <li className="nav-item active max-2">
          <button
            className="btn btn-outline-success btn-sm"
            style={{ marginRight: "10px" }}
            // disabled={!canRedo}
          >
            <i className="bi bi-clipboard"></i>
          </button>
        </li>
        <li className="nav-item active max-2">
          <button
            className="btn btn-outline-primary btn-sm"
            style={{ marginRight: "10px" }}
            onClick={() => {
              setIsModalOpen(true);
            }}
            // disabled={!canRedo}
          >
            <i className="bi bi-download"></i>
          </button>

          <Modal
            backdrop={false}
            isOpen={isModalOpen}
            // toggle={() => setIsModalOpen(isModalOpen)}
          >
            <ModalHeader toggle={() => setIsModalOpen(!isModalOpen)}>
              Load State
            </ModalHeader>
            <ModalBody>
              <textarea
                className="form-control"
                cols={3}
                placeholder='paste the contents that was copied from the "Copy Current State'
              ></textarea>
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger btn-sm" onClick={load}>
                Load
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => setIsModalOpen(!isModalOpen)}
              >
                Cancel
              </button>
            </ModalFooter>
          </Modal>
        </li>
      </ul>
    </nav>
  );
};

export default Topbar;
