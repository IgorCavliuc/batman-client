import Header from "./Header";
import Menu from "./Menu";

import "./style/index.css";
import { useState } from "react";

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Header handleMenuOpen={() => {
        setOpenMenu(!openMenu)
      }}
              openMenu={openMenu}
      />
      <Menu openMenu={openMenu} handleMenuOpen={() => {
        setOpenMenu(!openMenu)
      }} />
      <section className="rapidmd_cabinet__content">{children}</section>
    </>
  );
};

export default Layout;
