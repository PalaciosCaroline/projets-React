import img_bannerHome from "./img_banner.png";
import './bannerHome.css'

export default function Banner(){
    
    return(
        <header className="bannerHome" >
            <img className="img_bannerHome" src={img_bannerHome} alt="" />
            <h1 className="title_bannerHome">Chez vous, <br className="small_bannerHome"/>partout et ailleurs</h1>
        </header>
    )
}