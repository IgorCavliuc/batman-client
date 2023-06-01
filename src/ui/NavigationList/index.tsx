import { NavigationItem } from "../index";
import "./stytle.scss";
import {  useEffect } from "react";
import { INavigationType } from "../../type";
import {connect} from "react-redux";
import { setAllNavigation} from "../../Redux/Navigation/navigationSlice";
const { getAllNavigate } = require("../../server/index");
// import HomeIco from '../img/home.svg'

// interface CurrentNavigation {
//   dataNavigation: INavigationType[];
// }

const NavigationList = ({navigation, setAllNavigation}:any) => {
  useEffect(() => {
if(navigation?.items?.length <1) {
    getAllNavigate()
        .then((res:any) => setAllNavigation(res));
}
  }, [navigation?.items, setAllNavigation]);
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
