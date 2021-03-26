import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Delete from './Delete';

import "./DeleteAreaModal.css"

function DeleteAreaModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="delete_open_modal" onClick={() => setShowModal(true)}>cleaned</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Delete />
        </Modal>
      )}
    </>
  );
}

export default DeleteAreaModal;