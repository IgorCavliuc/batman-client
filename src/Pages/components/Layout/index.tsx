import Header from "./Header";
import Menu from "./Menu";

import "./style/index.css";
import { useState } from "react";
import { connect } from "react-redux";
import { basketItemAdded } from "../../../Redux/Basket/basket";

const Layout: React.FC<{ children?: React.ReactNode, basketItem:any }> = ({ children, basketItem }) => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Header handleMenuOpen={() => {
        setOpenMenu(!openMenu)
      }}
              openMenu={openMenu}
        basketItem={basketItem}
      />
      <Menu openMenu={openMenu} handleMenuOpen={() => {
        setOpenMenu(!openMenu)
      }} />
      <section className="rapidmd_cabinet__content">{children}</section>
    </>
  );
};


const mapStateToProps = (state: any) => ({
  basketItem: state?.basket?.basketItem,
});

export default connect(mapStateToProps, { basketItemAdded })(Layout);
