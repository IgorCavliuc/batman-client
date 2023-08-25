import { connect, useDispatch } from "react-redux";
import BasketItem from "../../ui/BasketItem";
import "./style/index.scss";
import { basketItemRefresh } from "../../Redux/Basket/basket";
const Basket = ({ basketItem, }: any) => {


const dispatch = useDispatch()
  const increment = (id:any, step = 1) => {

    const updatedBasketItems = basketItem.map((item:any) => {
      if (item._id === id) {
        return { ...item, countProduct: item.countProduct + step };
      }
      return item;
    });

    dispatch(basketItemRefresh(updatedBasketItems));
  };

  const decrement = (id:any, step = 1) => {
    const updatedBasketItems = basketItem.map((item:any) => {
      if (item._id === id && item.countProduct > 0) {
        return { ...item, countProduct: item.countProduct - step };
      }
      return item;
    });

    dispatch(basketItemRefresh(updatedBasketItems));
  };



  return (
    <div className="batman-store--ui__basket-page">
      <h1>Shopping cart</h1>

      {basketItem?.map((item: any) => {
        return (
          <BasketItem
            key={item?._id}
            id={item?._id}
            image={item?.images?.[0]}
            title={item?.title}
            description={item?.description}
            detaleObject={item?.detaleObject}
            price={item?.price}
            countProduct={item?.countProduct}
            increment={increment}
            decrement={decrement}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  basketItem: state?.basket?.basketItem,
});

export default connect(mapStateToProps, {})(Basket);
