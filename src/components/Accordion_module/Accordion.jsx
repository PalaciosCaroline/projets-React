// import { FaAngleDown } from 'react-icons/fa';
import React, { useState } from 'react';
import arrowDown from './arrowDown.svg'
import './accordion.css'

export default function Accordion({title, content}) {

    const [setActive, setActiveState] = useState(false);
 
    function toggleChevron() {
        setActiveState(!setActive ? true : false);
    }
 
return(
        <div className={`box_accordion ${ setActive && " open"}`}>
            <button className="btn_accordion" onClick={toggleChevron}><span className='accordion_title'>{title}</span>
                <img src={arrowDown} className={`icon_accordion ${ setActive && " open"}`} aria-hidden="true" alt=""/>
            </button>
            <div className={`div_text ${ setActive && " open"}`}>{content}</div>
        </div>
    )
}

