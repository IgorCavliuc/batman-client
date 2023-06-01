// import AvatarIco from '../img/avatar 1.svg'
// import ArrowIco from '../img/small-right.svg'
import { Link } from "react-router-dom";
import "./style/index.scss";
import {connect} from "react-redux";
import {getAllUser} from "../../Redux/User/userSlice";

interface NavigationProfileType{
  user:any
}



const NavigationProfile = ({user}:NavigationProfileType) => {
const {name, lastname, root,img} =user?.user[0]
  return (
      <Link to='/profile' >
    <div className="batman-store__header-profile">
      <div className="batman-store__header-profile-img">
      <img src={img} alt="AvatarIco"/>
      </div>
      <div className="batman-store__header-profile_name-status">
        <p className="batman-store__header-profile_name">{lastname} {name} </p>
        <p className="batman-store__header-profile_status">{root} account</p>
      </div>
      {/*<img src={ArrowIco} alt="ArrowIco"/>*/}
    </div>
    </Link >
  );
};



const mapStateToProps = (state: any) => ({
  user: state?.userSlice,
});

export default connect(mapStateToProps, )(NavigationProfile);