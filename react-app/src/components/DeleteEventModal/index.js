import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Delete from './Delete';

import "./DeleteEventModal.css"

function DeleteEventModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="delete_open_modal" onClick={() => setShowModal(true)}>remove</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Delete />
        </Modal>
      )}
    </>
  );
}

export default DeleteEventModal;