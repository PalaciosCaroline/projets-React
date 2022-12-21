// import img_bannerHome from "./../assets/img_banner.png";
import	Banner from "./Banner"

export default function BannerHome(){
    
    return(
        <header className="bannerHome" >
            <Banner/>
            {/* <img src={img_bannerHome} alt="" /> */}
            <h1>Chez vous, <br/>partout et ailleurs</h1>
        </header>
    )
}