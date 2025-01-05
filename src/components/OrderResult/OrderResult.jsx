import { useLocation } from "react-router-dom";
import "./OrderResult.css";

export default function OrderResult() {

    const location = useLocation();
    const data = location.state;
    console.log("sipariş özeti");
    console.log(data);
    console.log(location);

    return (
        <div className="order-result">
            <section className="section">
                <img src="\images\iteration-1-images\lezzetin-yolda.png" alt="" />
                <h1>SİPARİŞ ALINDI</h1>
                <h3>Position Absolute Acı Pizza</h3>
                <p>Boyut: {data.boyut}</p>
                <p>Hamur: {data.hamur}</p>
                <p>Ek Malzemeler: {" "}
                    {data.malzemeler.map((malzeme) => (
                        <span key={malzeme}>{malzeme}</span>
                    ))}
                </p>
            </section>
            <article className="article">
                <h4>Sipariş Toplamı</h4>
                <div className="secimler">
                    <p>Seçimler</p>
                    <p>{data.ekMalzemeFiyati} ₺</p>
                </div>
                <div className="toplam">
                    <p>Toplam</p>
                    <p>{data.toplamTutar} ₺</p>
                </div>
            </article>
        </div>
    );
}