import React, { useState, useEffect, useRef } from 'react';
import { FaChevronUp,FaChevronDown } from 'react-icons/fa';
import styles from './Dropdown.module.css';

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const dropdownRef = useRef(null);

  function handleOptionClick(option) {
    setSelectedOption(option);
    setIsOpen(false);
    props.onOptionClick(option);
  }

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleChevronClick(event) {
    event.stopPropagation(); // Arrêter la propagation de l'événement pour éviter que le clic ne soit transmis au bouton parent
    toggleDropdown();
  }

  function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    setIsOpen(false);
    }
  }
    
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
    document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        type="button"
        className={styles.dropdownToggle}
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby="dropdown-label"
        aria-label="Options de la liste déroulante"
      >
         {selectedOption || props.placeholder}
        <span className={styles.arrow} onClick={handleChevronClick}>{isOpen ? <FaChevronUp/> : <FaChevronDown/>}</span>
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu} role="listbox">
          {props.options.map((option) => (
            <li
              key={option}
              className={`${styles.dropdownOption} ${option === selectedOption ? 'styles.selected selectedOption' : ''}`}
              onClick={() => handleOptionClick(option)}
              role="option"
              aria-selected={option === selectedOption}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      <span id="dropdown-label" className="sr-only">Options de la liste déroulante</span>
    </div>
  );
}

export default Dropdown;