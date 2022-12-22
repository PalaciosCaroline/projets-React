// import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import React, {useState} from 'react';
import arrowDown from './../assets/arrowDown.svg'


export default function Modalslide({imgsLogement}) {
    const [ImgIndex, setImgIndex] = useState(0);
   
    const nextImg = () => {
        if(ImgIndex === (imgsLogement.length - 1)) setImgIndex(0)
        else setImgIndex(ImgIndex + 1)   
    }

    const previousImg = () => {
        if(ImgIndex === 0) setImgIndex(imgsLogement.length - 1)
         else setImgIndex(ImgIndex - 1)
    }

    const btnSlideShow = (imgsLogement.length > 1) ? ( 
        <>
        <button className="btn_previous" onClick={previousImg} aria-label="image précédente">
            <div>
            <img src={arrowDown} className="icon_previous" aria-hidden="true" alt=""/>
            </div>
         </button>
        <button className="btn_next" onClick={nextImg} aria-label="image suivante">
            <div>
            <img src={arrowDown} className="icon_next" aria-hidden="true" alt=""/>
            </div>
        </button>
        <div className="numberImgOfImgs" >{ImgIndex + 1} / {imgsLogement.length}</div>
        </>) : "";
 
    return(
        <div className="slideShow">
                <img src={imgsLogement[`${ImgIndex}`]} className="img_modal" key={imgsLogement[`${ImgIndex}`]} alt=""/>
          {btnSlideShow}
        </div>
    )
}


// {imgsLogement.map((img,index) => < img className={slideIndex === index + 1 ? "box_img imgModal" : "box_img"} src={img} key={img}alt="" />)}

