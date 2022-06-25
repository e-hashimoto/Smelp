import SignupForm from "./SignUpForm";
import React, {useState} from 'react';
import { Modal } from '../../context/Modal';

function SignUpFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="sign-up-button">
      <button onClick={() => setShowModal(true)}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </div>
  )
}

export default SignUpFormModal;
