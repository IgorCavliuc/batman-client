import { useEffect } from "react";
import { getAllProducts } from "../../server";
import { ProductCard } from "../../ui";
import { getAllTransport } from "../../Redux/Products/transportSlice";
import { dataTransportSlice } from "../../Redux/Products/transportSlice";
import { useSelector, useDispatch } from "react-redux";
import { IProduct } from "../../type";
import './style/index.scss'
import { useLocation } from "react-router-dom";

const Transport = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(dataTransportSlice);

  const location = useLocation()
  useEffect(() => {
  
    getAllProducts(location?.pathname?.split('/')[1]).then((res) => dispatch(getAllTransport(res)));
  }, [dispatch, location]);

  return (
    <div className="batman-store__container">
      {items?.map((item: IProduct) => (
        <ProductCard {...item} />
      ))}
    </div>
  );
};

export default Transport;
