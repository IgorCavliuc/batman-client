import { NavLink } from "react-router-dom";
import "./style/index.scss";
import {connect} from "react-redux";
import { useCallback } from "react";

interface NavigationProfileType{
  user:any
}



const NavigationProfile = ({user}:NavigationProfileType) => {
const {name, lastname, root,img} =user

  const signOutChange = useCallback(()=>{
    sessionStorage.removeItem("accessToken")
      window.location.reload()
  },[])
  return (
    <div className='batman-store__header-profile--wallpaper'>
      <NavLink to='/profile' >
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
    </NavLink >
      <p onClick={signOutChange} className='batman-store__header-profile--signout'>SignOut</p>
</div>
  );
};



const mapStateToProps = (state: any) => ({
});

export default connect(mapStateToProps, )(NavigationProfile);