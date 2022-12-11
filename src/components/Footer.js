import logo_blanc from "./../logo_blanc.svg";

export default function Footer(){
    
    return(
        <div className="footer">
              <img className="footer_logo" src={logo_blanc} alt="logo de Kasa" />
             <p>&copy; 2021 Kasa. Tous droits réservés</p>
        </div>
    )
}