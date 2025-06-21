import '../css/Menu.css'
import Card from "../components/ItemCard.jsx"
import Img1 from "../assets/images/item1.jpg"
import Img2 from "../assets/images/item2.jpg"

const items = [
  { img: Img1, name: "Řízky", price: 840 },
  { img: Img2, name: "Ovoce", price: 200 },
];

export function Menu() {
  return (
    <section className="menu">
      <div className="inner">
        <div className="menu-grid">
          {items.map((item, index) => (
            <Card key={index} img={item.img} name={item.name} price={item.price} />
          ))}
        </div>
      </div>
    </section>
  );
}
