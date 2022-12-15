import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import React, {useState} from 'react';
import './Modalslide.css'

export default function Modalslide(props) {
    const [ImgIndex, setImgIndex] = useState(0);
   
    const nextImg = () => {
        if(ImgIndex === props.imgs.length - 1){
            setImgIndex(0)
        } else {
            setImgIndex(ImgIndex + 1)
        }
    }

    const previousImg = () => {
        if(ImgIndex === 0){
            setImgIndex(props.imgs.length - 1)
        } else {
            setImgIndex(ImgIndex - 1)
        }
    }


    let imgsnew = [...props.imgs];
    // console.log(props.imgs)
    // console.log(props.imgs[0])
 
return(
    <>
        <div className="box_ModalImg">
                <img className="img_show" src={imgsnew[`${ImgIndex}`]} key={imgsnew[`${ImgIndex}`]} alt=""/>
            <button className="btn_previous" onClick={previousImg}>
            <FaAngleLeft className="icon_previous" />
             </button>
            <button className="btn_next" onClick={nextImg}>
           <FaAngleRight className="icon_previous" />
            </button>
            <div className="numberImgOfImgs" >{ImgIndex + 1} / {imgsnew.length}</div>
        </div>
    </>
    )

}