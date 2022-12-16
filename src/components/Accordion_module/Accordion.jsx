import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import './accordion.css'

export default function Accordion({title, content}) {

    const [setActive, setActiveState] = useState("");
 
    function toggleChevron(e) {
        e.preventDefault()
       setActiveState(setActive === "" ? "active" : "");
    }
 
return(
    <>
        <div className={`box ${setActive}`}>
            <button className="btn_accordion" onClick={toggleChevron}><span className='accordion_title'>{title}</span>
            { setActive ? <FaAngleUp className="icon"/> : <FaAngleDown className="icon"/>}
            </button>
            { setActive && <div className="div_text">{content}</div> }
        </div>
    </>
    )

}