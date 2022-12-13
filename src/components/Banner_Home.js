import img_banner from "./../img_bannerred.png";

export default function Banner(){
    
    return(
        <div className="banner">
            <img className="img_banner" src={img_banner} alt="" />
             <h1 className="titre_banner">Chez vous, partout et ailleurs</h1>
        </div>
    )
}