import img_apropos from "./img_apropos.png";
import './bannerApropos.css'

export default function Banner_apropos(){
    return(
        <div className="banner_apropos">
            <img className="img_apropos" src={img_apropos} alt="" />
        </div>
    )
}