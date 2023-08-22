import { Bell, NewPolicy, Basket } from "./icons";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import BurgerMenu from "../../../ui/Burger";

const Header = ({ user , handleMenuOpen, openMenu}: any) => {
  return (
    <header className="rapidmd_cabinet__header">
      <div className="rapidmd_cabinet__header--burger"

      >
      <BurgerMenu onClick={handleMenuOpen} open={openMenu}/>
      </div>
      <a href="/" className="rapidmd_cabinet__header__language">
        RU
      </a>
      <NavLink
        to={"/create-post"}
        className="rapidmd_cabinet__header__new_policy"
      >
        <NewPolicy />
        New announcement
      </NavLink>
      <button className="rapidmd_cabinet__header__notifications">
        <Bell />
        <span className="rapidmd_cabinet__header__notifications__length">
          2
        </span>
      </button>
      <button className="rapidmd_cabinet__header__basket">
        <Basket />
      </button>
      <button className="rapidmd_cabinet__header__user">
        {user?.lastname?.slice(0, 1)}
        {user?.name?.slice(0, 1)}
      </button>
    </header>
  );
};

const mapStateToProps = (state: any) => ({
  user: state?.userSlice.user,
});

export default connect(mapStateToProps)(Header);
