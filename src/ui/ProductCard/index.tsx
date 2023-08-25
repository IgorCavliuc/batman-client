import { IProduct } from "../../type";
import "./style/index.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import { selectPrductAction } from "../../Redux/Products/productSlice";
import { Button } from "../";

import { ImageIco, TransLike } from "../../ui/icons";
import { basketItemAdded } from "../../Redux/Basket/basket";

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
  detaleObject,
  basketItem,
}: IProduct) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [objectData] = useState({
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
    detaleObject,
    countProduct:1
  });

  const handleSelectProduct = useCallback(() => {
    dispatch(selectPrductAction(objectData));
    navigate(location?.pathname + "/" + _id);
    // eslint-disable-next-line
  }, []);

  const handleSelectToBasket = useCallback(() => {
    const existingItem = basketItem?.find(
      (item: any) => item._id === objectData._id
    );

    if (!existingItem) {
      dispatch(basketItemAdded(objectData));
    }
  }, [basketItem, dispatch, objectData]);




  return (
    // <NavLink to={location?.pathname + "/"+_id}>
    <div className="batman-ui__card">
      <div>
        <div className="batman-ui__card-header">
          <p className="batman-ui__card-header_title">
            {detaleObject?.brand ?? title} <br />
            {detaleObject?.brand && detaleObject?.model ? (
              <span>{detaleObject?.model}</span>
            ) : null}
          </p>

          <TransLike />
        </div>
        <div className="batman-ui__card_image">
          {images[0] ? (
            <img src={images[0]} alt="imageProduct" />
          ) : (
            <div className="batman-ui__card_image-flex">
              <ImageIco />
            </div>
          )}
        </div>
      </div>
      <div className="batman-ui__card_info">
        {brand || model ? (
          <h4>
            {((typeof brand === "string" ? brand : brand?.name) ?? "") +
              " " +
              (model ?? "")}
          </h4>
        ) : null}
      </div>

      <div className="batman-ui__card_info--flex">
        <div className="batman-ui__card_price">
          <span>Price:</span>
          <p>
            {(typeof price === "string" ? price : price?.[0]?.value) ?? "Null"}{" "}
            <span> {price[0]?.currency ? price?.[0]?.currency : null}</span>
          </p>
          {discount?.value ? (
            <h4>
              -{discount.value} {discount.type}
            </h4>
          ) : null}
          {discount?.value ? (
            <h4>
              -{discount.value} {discount.type}
            </h4>
          ) : null}{" "}
        </div>

        <div className="batman-ui__card_more-info batman-ui__card_more-info--button">
          <Button
            children="View more"
            onClick={handleSelectProduct}
            theme="transparent"
          />
          <Button children="In basket" onClick={handleSelectToBasket} />
        </div>
      </div>
    </div>
    // </NavLink>
  );
};

export default ProductCard;
