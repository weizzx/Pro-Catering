import "../css/ItemCard.css"
import Unknown from "../assets/icons/error-img.png"
import { useOutletContext } from "react-router-dom"

export default function ItemCard(props) {
  const { addItem } = useOutletContext()

  const handleClick = () => {
  if (!props.name || props.name.trim() === "") return; // skip click if no name
  addItem(props.name);
  };


  return (
    <>
    <div className="card">
      <div className="body">
        <div className="img" style={{ backgroundImage: `url(${ props.img ? props.img : Unknown })` }}></div>
        <hr />
        <h3>{ props.name ? props.name : "None" }</h3><h4>{ props.price ? props.price : 0 } Kč / kg</h4>
        <button className="add" onClick={handleClick}><span>&#65122;</span></button>
        </div>
      </div>
    </>
  )
}