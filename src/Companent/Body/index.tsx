import "./style/index.scss";
import { Banner, Benefits, FAQ } from "../../ui";
import { connect } from "react-redux";

const Body = ({ user }: any) => {


  return (
    <div className="batman-store__container">
      <p>Hi, {user?.name}! </p>
      <h1>What will you learn today?</h1>
      <div className="batman-store__container_banner">
        <Banner />
        <Benefits />
      </div>
      <FAQ />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  user: state?.userSlice.user,
});

export default connect(mapStateToProps)(Body);
