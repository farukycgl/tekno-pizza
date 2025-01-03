import Button from "../../Button/Button";
import "./FoodDeals.css";


export default function FoodDeals() {

    return (
        <div className="deal-container">
            <div className="deal-1">
                <h3>Özel <br />Lezzetus</h3>
                <p>Position:Absolute Acı Burger</p>
                <Button className="deal-button" >SİPARİŞ VER</Button>
            </div>
            <div className="other-deals">
                <div className="deal-2">
                    <h3>Özel <br />Lezzetus</h3>
                    <p>Position:Absolute Acı Burger</p>
                    <Button className="deal-button" >SİPARİŞ VER</Button>
                </div>
                <div className="deal-3">
                    <h3>Özel <br />Lezzetus</h3>
                    <p>Position:Absolute Acı Burger</p>
                    <Button className="deal-button" >SİPARİŞ VER</Button>
                </div>
            </div>
        </div>

    )
}