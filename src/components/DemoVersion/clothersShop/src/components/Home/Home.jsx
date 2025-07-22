import TopProductSlider from "./HomeHeader/HomeHeader.jsx";
import AboutHome from "./AboutHome/AboutHome.jsx";
import HomeBlog from "./HomeBlog/HomeBlog.jsx";
import WomenSuits from "./WomenSuits/WomenSuits.jsx";
import "./Home.css"
import HomeTestImonials from "./HomeTestImonials/HomeTestImonials.jsx";
import HomeStory from "./HomeStory/HomeStory.jsx";
import HomeProducts from "./HomeProducts/HomeProducts.jsx";
import Contacts from "./HomeContacts/Contacts.jsx";
import BabySuits from "./BabySuits/BabySutis.jsx";

export default function Home() {
    return (
        <div className="Home">
            <AboutHome/>
            <HomeProducts/>
            <HomeBlog/>
            <WomenSuits/>
            <HomeTestImonials/>
            <BabySuits/>
            <HomeStory/>
            <Contacts/>
        </div>
    )
}