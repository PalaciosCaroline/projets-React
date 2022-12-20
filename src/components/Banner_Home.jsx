import img_bannerHome from "./../assets/img_banner.png";

export default function BannerHome(){
    
    return(
        <header className="banner bannerHome" >
            <img src={img_bannerHome} alt="" />
            <h1>Chez vous, <br/>partout et ailleurs</h1>
        </header>
    )
}