// MODAL stuff

import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditGym from "./EditGym";

function EditGymModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit Gym</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditGym />
        </Modal>
      )}
    </>
  );
}

export default EditGymModal;
