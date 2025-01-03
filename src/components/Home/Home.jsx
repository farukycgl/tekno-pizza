import Cards from "./Cards/Cards";
import FoodDeals from "./FoodDeals/FoodDeals";
import Hero from "./Hero/Hero";
import "./Home.css";
import NavbarEn from "./NavbarSection/NavbarEn";
import NavbarTr from "./NavbarSection/NavbarTr";

export default function Home() {

    return (
        <div className="home-container">
            <Hero />
            <NavbarTr/>
            <FoodDeals/>
            <NavbarEn/>
            <Cards/>
        </div>
    );
}