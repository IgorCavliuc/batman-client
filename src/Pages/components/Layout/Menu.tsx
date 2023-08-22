import { ReactNode, useEffect, } from "react";
import { NavLink } from "react-router-dom";

import { LoginOut, NewPolicy } from "./icons";
import { connect } from "react-redux";
import { setAllNavigation } from "../../../Redux/Navigation/navigationSlice";
import { INavigationType } from "../../../type";
import { getAllNavigate } from "../../../server";
import ClassNames from "classnames";

const MenuItem: React.FC<{ to: string; children?: ReactNode; handleMenuOpen: ()=>void }> = ({
  to,
  children,
handleMenuOpen
}) => {


  return (
    <NavLink
      onClick={handleMenuOpen}
      className={({ isActive }) =>
        isActive
          ? "rapidmd_cabinet__menu__item rapidmd_cabinet__menu__item_active"
          : "rapidmd_cabinet__menu__item"
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};

const loginOut = () => {
  sessionStorage.removeItem("accessToken");
  window.location.reload();
};

const Menu = ({ navigation, setAllNavigation, openMenu,handleMenuOpen }: any) => {
  useEffect(() => {
    getAllNavigate().then((res: any) => setAllNavigation(res));
  }, [setAllNavigation]);

  const className = ClassNames("rapidmd_cabinet__menu", {
    "rapidmd_cabinet__menu--open": openMenu,
  });

  return (
    <div className={className}>
      <div className="rapidmd_cabinet__menu__logo_content">
        <a href="https://batman-client.vercel.app/signin">
          Batman<span>.</span>
        </a>
      </div>
      <nav>
        <NavLink
          to={"/create-post"}
          className="rapidmd_cabinet__header__new_policy"
        >
          <NewPolicy />
          New announcement
        </NavLink>
        {navigation?.items?.map((item: INavigationType, i: string) => {
          return (
            <MenuItem to={item?.url} key={i} handleMenuOpen={handleMenuOpen}>
              {item?.value}
            </MenuItem>
          );
        })}
      </nav>
      <div className="rapidmd_cabinet__menu__footer">
        <h4>Setări</h4>
        <button
          className="rapidmd_cabinet__menu__footer__login_out"
          onClick={loginOut}
        >
          <LoginOut />
          Ieșire
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  navigation: state?.navigationSlice,
});

export default connect(mapStateToProps, { setAllNavigation })(Menu);
