
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import "./OrderPizza.css"
import { useHistory } from "react-router-dom";
import { useState } from "react";


export default function OrderPizza() {

    const checkboxLabels = [
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
    ];

    const history = useHistory();
    const [selectedMaterials, setSelectedMaterials] = useState([]);
    const [counter, setCounter] = useState(1);




    const handleChange = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setSelectedMaterials([...selectedMaterials, value]);
        } else {
            setSelectedMaterials(selectedMaterials.filter((item) => item !== value));
        }
    };

    const handeIncrease = () => {
        setCounter(counter + 1);
        

   
    };

    const handleDecrement = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        };
    };


    return <section className="section-head">
        <div >
            <h2>Position Absolute Acı Pizza</h2>
            <div className="menu-info">
                <span style={{ fontWeight: "bold", fontSize: "30px" }}>85.50₺</span>
                <div className="rating">
                    <span style={{ paddingRight: "-15px" }}>4.9</span>
                    <span>(200)</span>
                </div>
            </div>
            <p>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir..Küçük bir pizzaya bazen pizzetta denir.</p>
        </div>
        <div className="secim-yap">
            <div className="boyut-sec">
                <h3>Boyut Seç<span style={{ color: "red", fontWeight: "bold" }}>*</span></h3>
                <Form>
                    <FormGroup check>
                        <Input
                            name="radio2"
                            type="radio"
                            id="kucuk"
                        />
                        <Label check htmlFor="kucuk">
                            Küçük
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input
                            name="radio2"
                            type="radio"
                            id="orta"
                        />
                        <Label check htmlFor="orta">
                            Orta
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input
                            name="radio2"
                            type="radio"
                            id="buyuk"
                        />
                        <Label check htmlFor="buyuk">
                            Büyük
                        </Label>
                    </FormGroup>
                </Form>
            </div>

            <div className="hamur-sec">
                <h3>Hamur Seç<span style={{ color: "red", fontWeight: "bold" }}>*</span></h3>
                <Form>
                    <FormGroup>
                        <Label for="exampleSelect">

                        </Label>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                        >
                            <option disabled selected style={{ fontWeight: "bold" }}>
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
                <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            </div>
            <div className="checkbox">
                {checkboxLabels.map((label, index) => (
                    <Form >
                        <FormGroup check key={index} className="checkbox-item">
                            <Input type="checkbox"
                                id={`checkbox-${index}`}
                                value={label}
                                checked={selectedMaterials.includes(label)}
                                onChange={handleChange}
                                disabled={selectedMaterials.length >= 10 && !selectedMaterials.includes(label)} />
                            <Label check htmlFor={`checkbox-${index}`}>
                                {label}
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
                        <Label
                            for="name"
                            hidden
                        >
                            İsim Soyisim:
                        </Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Lütfen isminizi giriniz."
                            type="text"
                        />
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
                <Button style={{ backgroundColor: "#FDC913" }} onClick={handleDecrement}>-</Button>
                <p>{counter}</p>
                <Button style={{ backgroundColor: "#FDC913" }} onClick={handeIncrease}>+</Button>
            </div>
            <div className="order-btn" style={{}}>
                <h3>Sipariş Toplamı</h3>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <p style={{ fontWeight: "bold" }}>Seçimler</p>
                    <span style={{ color: "#5F5F5F" }}>{selectedMaterials.length*5}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <p style={{ color: "#CE2829", fontWeight: "bold" }}>Toplam</p>
                    <span style={{ color: "#CE2829", fontWeight: "bold" }}>{counter*85.50+selectedMaterials.length*5}</span>
                </div>
                <Button
                    style={{ backgroundColor: "#FDC913", width: "100%" }}
                    onClick={() => history.push("/orderresult")}
                >
                    SİPARİŞ VER
                </Button>
            </div>
        </div>


    </section>
}