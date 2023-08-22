import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { MainTitle, ProductCard } from "../../ui";
import { getAllProduct } from "../../Redux/Products/productSlice";
import { IProduct } from "../../type";
import { getAllProducts } from "../../server";
import "./style/index.scss";
import { ClockLoader } from "react-spinners";

interface Props {
  items: IProduct[];
  getAllProduct: (e: any) => void;
  name: string;
}

const Product = ({ items, getAllProduct, name }: Props) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await getAllProducts(name);
      if (res) {
        getAllProduct(res);
        setLoading(false);
      }
    };
    fetchData();
  }, [getAllProduct, name, location?.pathname]);

  return (
    <div className="batman-store_product-list">
      <MainTitle>{` According to your request, we found the following ${name?.toUpperCase()}`}</MainTitle>
      <div className="batman-store_product-list-wrapper">
        {!loading ? (
          items?.map((item, i) => {
            return <ProductCard {...item} key={i} />;
          })
        ) : (
          <div className='batman-store_product-list-wrapper--loading'>
            <ClockLoader color="#11142d" />

          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  items: state?.productSlice?.items,
});

export default connect(mapStateToProps, { getAllProduct })(Product);
