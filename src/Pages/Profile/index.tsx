import { getAllUser } from "../../Redux/User/userSlice";
import { connect } from "react-redux";

const Profile = ({ getAllUser, user }: any) => {
  // const userSession = sessionStorage.getItem("users");
  //
  // useEffect(() => {
  //   if (userSession) {
  //     const user = JSON.parse(userSession || "[]");
  //     getUser(user?.login, user?.password).then((res) => getAllUser(res));
  //   } else {
  //     window.location.pathname = "/signin";
  //   }
  // }, [getAllUser, userSession]);

  return <div>Profile</div>;
};

const mapStateToProps = (state: any) => ({
  user: state?.userSlice,
});

export default connect(mapStateToProps, { getAllUser })(Profile);
