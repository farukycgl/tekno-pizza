
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import "./OrderPizza.css"
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const initialState = {
    isim: "",
    boyut: "",
    hamur: "default",
    malzemeler: [],
    kisiIsmi: "",
}

export default function OrderPizza() {

    const pizza = {
        isim: "Position Absolute Acı Pizza",
        aciklama: "Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir..Küçük bir pizzaya bazen pizzetta denir.",
        fiyat: "85.50",
        derece: 4.9,
        yorum: 200,
        boyut: ["Küçük", "Orta", "Büyük"],
        hamur: "default",
        malzemeler: [
            "Pepperoni",
            "Tavuk Izgara",
            "Mısır",
            "Sarımsak",
            "Ananas",
            "Sosis",
            "Soğan",
            "Salam",
            "Biber",
            "Kabak",
            "Kanada Jambonu",
            "Domates",
            "Jalepeno",
            "Sucuk"
        ],
    };



    const history = useHistory();
    const [counter, setCounter] = useState(1);
    const [isDİsabled, setIsDisabled] = useState(true);
    const [error, setError] = useState({});
    const [form, setForm] = useState(initialState);

    const ekMalzemeFiyati = form.malzemeler.length * 5;
    const toplamTutar = counter * (Number(pizza.fiyat.slice(0, -1)) + ekMalzemeFiyati)

    function formValidation() {
        const hatalar = {};
        if (!form.boyut)
            hatalar.boyut = "Lütfen pizza boyutu seçiniz!";
        if (form.hamur === "default")
            hatalar.hamur = "Lütfen hamur kalınlığını seçiniz!"
        if (form.kisiIsmi.length < 3)
            hatalar.kisiIsmi = "Lütfen geçerli bir isim giriniz!"
        if (form.malzemeler.length < 4)
            hatalar.malzemeler = "Lütfen en az dört malzeme seçiniz!"
        setError(hatalar);
        setIsDisabled(Object.keys(hatalar).length);
    }

    useEffect(() => {
        formValidation();
    }, [form]);

    const handleMaterials = (e) => {
        if (form.malzemeler.length === 10 && e.target.checked === true) {
            alert("En fazla 10 adet seçim yapabilirsiniz!")
            return;
        }
        setForm((oncesi) => ({
            ...oncesi,
            malzemeler: oncesi.malzemeler.includes(e.target.value) ? oncesi.malzemeler.filter((a) => a !== e.target.value) : [...oncesi.malzemeler, e.target.value],
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const id = crypto.randomUUID();
        setForm({ ...form, id });
        axios.post(" https://reqres.in/api/pizza", form)
            .then((data) => {
                history.push("/orderresult", { ...form, ekMalzemeFiyati, toplamTutar });
                console.log(data.data);
            })
            .catch((error) => {
                history.push("/not-found", error.message);
            })

        setForm(initialState)
    }


    const handeIncrease = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        };
    };


    return (
        <div onSubmit={handleSubmit} className="section-head">
            <div className="container-aciklama">
                <img src="\images\iteration-2-images\pictures\form-banner.png" alt="" />
                <div>
                    <h2>{pizza.isim}</h2>
                    <div className="menu-info">
                        <span style={{ fontWeight: "bold", fontSize: "30px" }}>{pizza.fiyat} ₺</span>
                        <div className="rating">
                            <span style={{ paddingRight: "-15px" }}>4.9</span>
                            <span>{pizza.yorum}</span>
                        </div>
                    </div>
                    <p>{pizza.aciklama}</p>
                </div>
            </div>
            <div className="secim-yap">
                <div className="boyut-sec">
                    <h3>Boyut Seç<span style={{ color: "red", fontWeight: "bold" }}>*</span></h3>
                    {error.boyut && <p className="order-error">{form.boyut}</p>}
                    {pizza.boyut.map((boyut) => (
                        <Form>
                            <FormGroup check>
                                <Label check htmlFor={boyut} key={boyut}>
                                    <Input
                                        name="pizzaBoyut"
                                        type="radio"
                                        id={boyut}
                                        checked={form.boyut === boyut}
                                        value={boyut}
                                        onChange={(e) => setForm({ ...form, boyut: e.target.value })}
                                    />
                                    {""}
                                    {boyut.charAt(0).toUpperCase() + boyut.slice(1)}
                                </Label>
                            </FormGroup>
                        </Form>
                    ))}
                </div>

                <div className="hamur-sec">
                    <h3>Hamur Seç<span style={{ color: "red", fontWeight: "bold" }}>*</span></h3>
                    {error.hamur && (<p className="order-error">{error.hamur}</p>)}
                    <Form>
                        <FormGroup>
                            <Label for="exampleSelect">

                            </Label>
                            <Input
                                id="exampleSelect"
                                name="select"
                                type="select"
                                value={form.hamur}
                                onChange={(e) => {
                                    setForm({ ...form, hamur: e.target.value })
                                }}
                            >
                                <option value="default" disabled selected style={{ fontWeight: "bold" }}>
                                    Hamur Kalınlığı
                                </option>
                                <option>
                                    İnce
                                </option>
                                <option>
                                    Orta
                                </option>
                                <option>
                                    Kalın
                                </option>
                            </Input>
                        </FormGroup>
                    </Form>
                </div>
            </div>
            <div className="checkbox-container">
                <div className="malzeme-text">
                    <h3>Ek Malzemeler</h3>
                    {error.malzemeler && <p className="order-error">{error.malzemeler}</p>}
                    <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
                </div>
                <div className="checkbox">
                    {pizza.malzemeler.map((malzemeler) => (
                        <Form >
                            <FormGroup check className="checkbox-item">
                                <Label check key={malzemeler}>
                                    <Input type="checkbox"
                                        id="malzeme-ekle"
                                        name="malzeme-ekle"
                                        value={malzemeler}
                                        checked={form.malzemeler.includes(malzemeler)}
                                        onChange={handleMaterials}
                                    />
                                    {malzemeler}
                                </Label>
                            </FormGroup>
                        </Form>
                    ))}

                </div>
            </div>

            <div className="order-note">
                <div>
                    <Form>
                        <FormGroup>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                value={form.kisiIsmi}
                                placeholder="Lütfen isminizi giriniz."
                                onChange={(e) => setForm({
                                    ...form, kisiIsmi: e.target.value
                                })}

                            />
                            {error.kisiIsmi && <p className="order-error">{error.kisiIsmi}</p>}
                        </FormGroup>
                    </Form>
                </div>
                <div>
                    <h3 style={{ fontWeight: "bold" }}>Sipariş Notu</h3>
                    <Form>

                        <FormGroup>
                            <Label for="exampleText" >
                            </Label>
                            <Input
                                id="exampleText"
                                name="text"
                                type="textarea"
                                placeholder="Siparişine eklemek istediğin bir not var mı?"
                            />
                        </FormGroup>
                    </Form>
                </div>
            </div>

            <div className="calculation">
                <div className="order-counter">
                    <Button className="artir-azalt-btn" style={{ backgroundColor: "#FDC913" }} onClick={handleDecrement}>-</Button>
                    <p>{counter}</p>
                    <Button className="artir-azalt-btn" style={{ backgroundColor: "#FDC913" }} onClick={handeIncrease}>+</Button>
                </div>

                <div className="order-btn" style={{}}>
                    <h3>Sipariş Toplamı</h3>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <p style={{ fontWeight: "bold" }}>Seçimler</p>
                        <span style={{ color: "#5F5F5F" }}>{ekMalzemeFiyati} ₺</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <p style={{ color: "#CE2829", fontWeight: "bold" }}>Toplam</p>
                        <span style={{ color: "#CE2829", fontWeight: "bold" }}>{toplamTutar} ₺</span>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Button className="siparisver-btn"
                            style={{ backgroundColor: "#FDC913", width: "100%" }}
                            disabled={isDİsabled}
                        >
                            SİPARİŞ VER
                        </Button>
                    </Form>
                </div>
            </div>


        </div>
    )
}