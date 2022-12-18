import img_banner from "./img_banner.png";
import './bannerHome.css'

export default function Banner(){
    
    return(
        <div className="bannerHome" >
            <img className="img_banner" src={img_banner} alt="" />
            
             <h1 className="titre_banner">Chez vous, <br className="small_banner"/>partout et ailleurs</h1>
        </div>
    )
}