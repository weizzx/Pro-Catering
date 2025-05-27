import '../css/Menu.css'
import Card from "../components/ItemCard.jsx"
import Img1 from "../assets/images/item1.jpg"
import Img2 from "../assets/images/item2.jpg"

export function Menu() {
    return (
        <>
        <div className="menu">
            <div className="inner">
                <div className="menu-grid">
                    <Card img={Img1} name="Řízky" price={840} />
                    <Card img={Img2} name="Ovoce" price={200}/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
        </>
    )
}
