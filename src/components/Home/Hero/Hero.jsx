import Button from "../../Button/Button";
import "./Hero.css";
import { useHistory } from "react-router-dom";

export default function Hero() {

const history = useHistory();

    return <div className="hero">
    <h1>KOD ACIKTIRIR</h1>
    <h1>PİZZA, DOYURUR</h1>
        <Button className="button-hero"
        onClick={()=> history.push("/orderpizza")}>
            ACIKTIM</Button>
    </div>
}