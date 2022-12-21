// import { FaAngleDown } from 'react-icons/fa';
import React, { useState } from 'react';
import arrowDown from './../assets/arrowDown.svg'

export default function Accordion({title, content}) {

    const [setActive, setActiveState] = useState("");
 
    function toggleChevron() {
        setActiveState(!setActive ? "active" : "");
    }
 
return(
        <div className={`box_accordion ${setActive}`}>
            <button className="btn_accordion" onClick={toggleChevron}><span className='accordion_title'>{title}</span>
                <img src={arrowDown} className={setActive} aria-hidden="true" alt=""/>
            </button>
            <div className={`div_text ${setActive}`}>{content}</div>
        </div>
    )
}

