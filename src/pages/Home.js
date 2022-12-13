import BannerHome from '../components/Banner_Home';
import Boxcards from '../components/Boxcards';

export default function Home(){
    return (
        <div className="box_home">
            <BannerHome/>
            <Boxcards/>
        </div>
        )
}