import "./style/index.scss";
import { NavigationList, NavigationProfile, Button } from "../../ui";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const BatmanLogoIco = require("../ico/1.png");

// const HomeIco = require("../../ui/img/home.svg");
const SignInIco = require("../ico/key.svg").default;

const NonProfile = () => {
  return (
    <div className="batman-store__header-nonprofile">
      <NavLink to="/signin">
        SignIn <img src={SignInIco} alt="SignInIco" />{" "}
      </NavLink>
    </div>
  );
};

const Navbar = ({ user }: any) => {
  return (
    <div className="batman-store__header">
      <div className="batman-store__header-container">
        <div className="batman-store__header-container_logo">
          <NavLink to="/">
            {/* <p>
                            Batman <span>.</span>
                        </p> */}
            <img src={BatmanLogoIco} alt="BatmanLogoIco" />
          </NavLink>
        </div>
        <NavLink
          to={"/create-post"}
          className={({ isActive }) =>
            isActive
              ? "batman-store__header-button--active"
              : "batman-store__header-button"
          }
        >
          <Button children="Add post" theme="added" />
        </NavLink>
        <NavigationList />
      </div>
      {user.user[0] ? <NavigationProfile /> : <NonProfile />}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  user: state?.userSlice,
});

export default connect(mapStateToProps)(Navbar);
