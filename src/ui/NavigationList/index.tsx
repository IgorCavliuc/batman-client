import { NavigationItem } from "../index";
import "./stytle.scss";
import { INavigationType } from "../../type";
import {connect} from "react-redux";
import { setAllNavigation} from "../../Redux/Navigation/navigationSlice";
// import HomeIco from '../img/home.svg'


const NavigationList = ({navigation, setAllNavigation}:any) => {


  return (
    <nav className="batman-store__header-container_navigation">
      <ul className="batman-store__header-container_navigation-list">
        {navigation?.items?.map((item:INavigationType, i:string) => {
          return <NavigationItem key={i} item={item} />;
        })}
      </ul>
    </nav>
  );
};


const mapStateToProps = (state: any) => ({
    navigation: state?.navigationSlice,
});

export default connect(mapStateToProps, {setAllNavigation})(NavigationList);
