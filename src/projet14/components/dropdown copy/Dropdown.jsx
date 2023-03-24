import React, { useState } from 'react';
// import { FaEllipsisV } from 'react-icons/fa';
import styles from './Dropdown.module.css';

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.options[0]);

  function handleOptionClick(option) {
    setSelectedOption(option);
    setIsOpen(false);
  }

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.dropdownToggle}
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby="dropdown-label"
        aria-label="Options de la liste déroulante"
      >
        {/* <FaEllipsisV /> */}
         {selectedOption}
        <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu} role="listbox">
          {props.options.map((option) => (
            <li
              key={option}
              className={`${styles.dropdownOption} ${option === selectedOption ? styles.selected : ''}`}
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