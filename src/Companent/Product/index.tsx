import { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { MainTitle, ProductCard } from "../../ui";
import { getAllProduct } from "../../Redux/Products/productSlice";
import { IProduct } from "../../type";
import { getAllProducts } from "../../server";
import "./style/index.scss";

interface Props {
  items: IProduct[];
  getAllProduct: (e: any) => void;
  name: string;
}

const Product = ({ items, getAllProduct, name }: Props) => {
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllProducts(name);
      getAllProduct(res);
    };
    fetchData();
  }, [getAllProduct, location?.pathname]);

  return (
    <div className="batman-store_product-list">
      <MainTitle>{` According to your request, we found the following ${name?.toUpperCase()}`}</MainTitle>
      <div className="batman-store_product-list-wrapper">
        {items?.map((item, i) => {
          return <ProductCard {...item} key={i} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  items: state?.productSlice?.items,
});

export default connect(mapStateToProps, { getAllProduct })(Product);
