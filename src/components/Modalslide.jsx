// import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import React, {useState} from 'react';
import arrowDown from './../assets/arrowDown.svg'


export default function Modalslide(props) {
    const [ImgIndex, setImgIndex] = useState(0);
   
    let imgsNew = [...props.imgs];

    const nextImg = () => {
        if(ImgIndex === (imgsNew.length - 1)){
            setImgIndex(0)
        } else {
            setImgIndex(ImgIndex + 1)
        }
    }

    const previousImg = () => {
        if(ImgIndex === 0){
            setImgIndex(imgsNew.length - 1)
        } else {
            setImgIndex(ImgIndex - 1)
        }
    }
 
return(
        <div className="box_ModalImg">
                <img src={imgsNew[`${ImgIndex}`]} className="img_modal" key={imgsNew[`${ImgIndex}`]} alt=""/>
          { imgsNew.length > 1 ? 
           ( <>
            <button className="btn_previous" onClick={previousImg} aria-label="image précédente">
                <div>
                <img src={arrowDown} className="icon_previous" aria-hidden="true" alt=""/>
                    {/* <p aria-hidden="true"></p> */}
                </div>
             </button>
            <button className="btn_next" onClick={nextImg} aria-label="image suivante">
                <div>
                <img src={arrowDown} className="icon_next" aria-hidden="true" alt=""/>
                    {/* <p aria-hidden="true"></p> */}
                </div>
            </button>
            </>) : ""
          }
            <div className="numberImgOfImgs" >{ImgIndex + 1} / {imgsNew.length}</div>
        </div>
    )

}