import { IProduct } from "../../type";
import "./style/index.scss";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { selectPrductAction } from "../../Redux/Products/productSlice";

const ProductCard = ({
  brand,
  model,
  category,
  description,
  discount,
  _id,
  images,
  currency,
  price,
  rating,
  stock,
  thumbnail,
  title,
}: IProduct) => {

  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSelectProduct = useCallback(()=>{
    const objectData = {
      brand,
      model,
      category,
      description,
      discount,
      _id,
      images,
      currency,
      price,
      rating,
      stock,
      thumbnail,
      title,
    }

    dispatch(selectPrductAction(objectData))
    navigate(location?.pathname + "/"+_id)


  },[])

  return (
    // <NavLink to={location?.pathname + "/"+_id}>
    <div  onClick={handleSelectProduct} className="batman-ui__card">
      <div className="batman-ui__card_image">
        <img src={images[0]} alt="imageProduct" />
      </div>
      <div className="batman-ui__card_info">
        {brand || model ? (
          <h4>
            {((typeof brand === "string" ? brand : brand?.name) ?? "") +
              " " +
              (model ?? "")}
          </h4>
        ) : null}
        <p>{title}</p>
      </div>
      <div className="batman-ui__card_price">
        <p>
          <span>Price:</span> {price} {currency ?? "MDL"}
        </p>
        {discount?.value ? (
          <h4>
            -{discount.value} {discount.type}
          </h4>
        ) : null}
      </div>
      <div className="batman-ui__card_more-info">
        <p>{description}</p>
      </div>
    </div>
    // </NavLink>
  );
};

export default ProductCard;
