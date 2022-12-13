import BannerHome from "../../components/BannerHome_module/Banner_Home";
import Boxcards from "../../components/Boxcards_module/Boxcards";
import './home.css'

export default function Home() {
  return (
    <div className="box_home">
      <BannerHome />
      <Boxcards />
    </div>
  );
}
