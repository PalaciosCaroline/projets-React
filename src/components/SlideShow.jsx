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
        <nav>
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
        </nav>
        <div className="numberImgOfImgs"><span onClick={previousImg}>{ImgIndex + 1}</span><span>/</span><span onClick={nextImg}>{imgsLogement.length}</span></div>
        </>) : "";

    return(
        <div className="slideShow">
                {
                    imgsLogement.map((image,index) => { return(
                        <div className={`box_img ${ImgIndex === index ? "isVisible" : ""}`} key={image}>
                            <img src={image} alt=""/>
                        </div>
                    )})
                }
            {btnSlideShow}
        </div>
    )
}

{/* <img src={imgsLogement[`${ImgIndex}`]} className="img_modal" key={imgsLogement[`${ImgIndex}`]} alt=""/>        */}