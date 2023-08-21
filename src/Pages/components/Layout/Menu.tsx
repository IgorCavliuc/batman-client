import { ReactNode, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { LoginOut } from "./icons";
import { connect } from "react-redux";
import { setAllNavigation } from "../../../Redux/Navigation/navigationSlice";
import { INavigationType } from "../../../type";
import { getAllNavigate } from "../../../server";

const MenuItem: React.FC<{ to: string; children?: ReactNode }> = ({
  to,
  children,
}) => {


  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "rapidmd_cabinet__menu__item rapidmd_cabinet__menu__item_active"
          : "rapidmd_cabinet__menu__item"
      }
          to={to}>

      {children}
    </NavLink>
  );
};

const loginOut = () => {
  sessionStorage.removeItem("accessToken")
  window.location.reload()
}

const Menu = ({navigation, setAllNavigation}:any) => {

  useEffect(() => {
    getAllNavigate()
      .then((res:any) => setAllNavigation(res));

  }, [setAllNavigation]);
  return (
    <div className="rapidmd_cabinet__menu">
      <div className="rapidmd_cabinet__menu__logo_content">
        <a href="#">Batman<span>.</span></a>
      </div>
      <nav>

        {navigation?.items?.map((item:INavigationType, i:string) => {
          return (
            <MenuItem to={item?.url} key={i}>
              {item?.value}
            </MenuItem>
          )
        })}

      </nav>
      <div className="rapidmd_cabinet__menu__footer">
        <h4>Setări</h4>
        <button className="rapidmd_cabinet__menu__footer__login_out" onClick={loginOut}>
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

export default connect(mapStateToProps, {setAllNavigation})(Menu);

