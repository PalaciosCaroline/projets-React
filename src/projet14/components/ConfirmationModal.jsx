import React, { useRef, useEffect } from 'react'
import { FaTimes} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FaUserCheck } from 'react-icons/fa';

export default function ConfirmationModal({setIsModalOpen, isModalOpen}) {
    const employees = useSelector((state) => state.employees);
    const lastEmployee = employees.slice(-1)[0];
    const firstname = lastEmployee.firstname;
    const lastname = lastEmployee.lastname;

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const modalRef = useRef(null);

    useEffect(() => {
        if (isModalOpen && modalRef.current) {
          modalRef.current.focus();
          modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, [isModalOpen]);

    const handleKeyDown = (event) => {
        if (event.key === 'Tab') {
            const focusableElements = modalRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const firstFocusableElement = focusableElements[0];
            const lastFocusableElement = focusableElements[focusableElements.length - 1];
            if (document.activeElement === lastFocusableElement && !event.shiftKey) {
                event.preventDefault();
                modalRef.current.querySelector('.btn_closeModal').focus();
            } else if (document.activeElement === firstFocusableElement && event.shiftKey) {
                event.preventDefault();
                lastFocusableElement.focus();
            }
        }
    };

    return (   
        <>
        {isModalOpen && (
          <div className='bg_modalConfirm' />
        )}
        <div
          className="confirmationModal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="confirmation-text"
          onKeyDown={handleKeyDown}
          ref={modalRef}
        >
          <button
            className="btn_closeModal"
            onClick={closeModal}
            aria-label="Fermer la fenêtre"
            tabIndex={0}
          >
            <FaTimes className="btn_closeModal_icon" />
          </button>
          <div className='box_titleModal'>
          <FaUserCheck className='iconCheckedModal'/>
          <h2 id="modal-title">Confirmation</h2>
          </div>
          <p tabIndex={0}  id="confirmation-text">
          The new employee, {firstname} {lastname}, has been registered successfully.
          </p>
        </div>
        </>
    )
}

ConfirmationModal.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};