import { IProduct } from "../../type";
import "./style/index.scss";

const ProductCard = ({
  brand,
  model,
  category,
  description,
  discount,
  id,
  images,
  currency,
  price,
  rating,
  stock,
  thumbnail,
  title,
}: IProduct) => {
  return (
    <div className="batman-ui__card">
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
  );
};

export default ProductCard;
