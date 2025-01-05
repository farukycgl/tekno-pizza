import Button from "../../Button/Button";
import "./Hero.css";
import { useHistory } from "react-router-dom";

export default function Hero() {

    const history = useHistory();

    return <div className="hero">
        <img src="\images\iteration-1-images\firsati-kacirma.png" alt="firsati-kacirma" />
        <div className="text">
            <h1>KOD ACIKTIRIR <br />PİZZA, DOYURUR</h1>
            <Button className="button-hero"
                onClick={() => history.push("/orderpizza")}>
                ACIKTIM</Button>
        </div>
    </div>
}