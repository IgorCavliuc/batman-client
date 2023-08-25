import "./style/index.scss";
import { Counter } from "../index";
const BasketItem = ({ id, image, title, description, detaleObject,countProduct, price, decrement,increment }: any) => {
  const totalCost = Number(price?.[0]?.value?.split(" ")?.join('')) *  +countProduct

  return (
    <div id={id} className="batman-store--ui__basket-item">
      <div  className="batman-store--ui__basket-item_left--wrapper">
        <div  className="batman-store--ui__basket-item_checkbox">
          <input type="checkbox" checked={true} />
        </div>
        <div  className="batman-store--ui__basket-item-image">
          <img src={image} alt={'image'+id} />
        </div>
      </div>
      <div  className="batman-store--ui__basket-item_data">
        <p>{title}</p>
        <h1 title={description}>{description}</h1>
        <Counter count={countProduct} id={id} decrement={decrement} increment={increment}/>
      </div>
      <div  className="batman-store--ui__basket-item_data batman-store--ui__basket-item_data--price">
        <p>Price</p>
        <h4>{totalCost} <span>{price?.[0]?.currency.toUpperCase()}</span></h4>
      </div>
    </div>
  );
};

export default BasketItem;
