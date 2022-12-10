import img_banner from "./../img_banner.png";

export default function Banner(){
    
    return(
        <div className="img_banner">
                <img className="header_logo" src={img_banner} alt="logo de Kasa" />
        </div>
    )
}