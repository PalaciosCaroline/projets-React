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
        <div className="box_accordion">
            <button className="btn_accordion" onClick={toggleChevron}><span className='accordion_title'>{title}</span>
                <FaAngleDown className={ setActive ? "icon_accordion open" : "icon_accordion"}/>
            </button>
            <div className={ setActive ? "div_text open" : "div_text"}>{content}</div>
        </div>
    )
}

