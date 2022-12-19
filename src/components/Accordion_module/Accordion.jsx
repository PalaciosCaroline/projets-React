import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import './accordion.css'

export default function Accordion({title, content}) {

    const [setActive, setActiveState] = useState(false);
 
    function toggleChevron() {
        setActiveState(!setActive ? true : false);
    }
 
return(
        <div className="box_accordion">
            <button className="btn_accordion" onClick={toggleChevron}><span className='accordion_title'>{title}</span>
                <FaAngleDown className={`icon_accordion ${ setActive && " open"}`} aria-hidden="true"/>
            </button>
            <div className={`div_text ${ setActive && " open"}`}>{content}</div>
        </div>
    )
}

