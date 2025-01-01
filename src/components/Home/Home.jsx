import { Button } from "reactstrap";
import "./Home.css";
import { useHistory } from "react-router-dom";

export default function Home() {

const history = useHistory()

    return <div className="hero">
    <h1>KOD ACIKTIRIR</h1>
    <h1>PİZZA, DOYURUR</h1>
        <Button 
        style={{backgroundColor:"#FDC913", borderRadius:"50px", width:"130px"}}
        onClick={()=> history.push("/orderpizza")}>
            ACIKTIM</Button>
    </div>
}