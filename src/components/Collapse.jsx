// import { FaAngleDown } from 'react-icons/fa';
import React, { useState } from 'react'
import arrowDown from './../assets/arrowDown.svg'

export default function Collapse({ title, content }) {
  const [setActive, setActiveState] = useState('')

  const toggleChevron = () => {
    setActiveState(!setActive)
  }

  return (
    <div className={`box_collapse ${setActive && 'active'}`}>
      <button className="btn_collapse" onClick={toggleChevron}>
        <span className="collapse_title">{title}</span>
        <img src={arrowDown} aria-hidden="true" alt="" />
      </button>
      <div className="collapseWrapper">
        <div className="div_text">{content}</div>
      </div>
    </div>
  )
}
