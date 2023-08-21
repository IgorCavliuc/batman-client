import "./SignIn.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { getAllUser } from "../../Redux/User/userSlice";
import { Button } from "../../ui";
import { signIn } from "../../server";
const AsigAdmin = require("../ico/mainlogo.png");

type FormValues = {
  login: string;
  password: string;
};

type SignInProps = {
  getAllUser: (res: any) => void;
};

const SignIn: React.FC<SignInProps> = ({ getAllUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const onSubmit = async (data:any) => {
    signIn(data).then(res=> {
      if(res.app_code === "ACCESS_TOKEN") {
        sessionStorage.setItem("accessToken", res.token)
        localStorage.setItem("userData", JSON.stringify(res.data))
        window.location.reload();
      }
    })
  };

  return (
    <div className="batman-ui--sign-in-content content ">
      <form onSubmit={handleSubmit(onSubmit)} className="batman-ui--form">
        <h1>Sign In</h1>
        <input
          {...register("login", {
            required: "Login is a required field!",
            pattern: {
              value:
              // eslint-disable-next-line
                /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
              message: "Please enter a valid login.",
            },
          })}
          type="login"
          placeholder="Login"
        />
        {errors?.login && (
          <div style={{ color: "#3a48f5" }}>*{errors.login.message}</div>
        )}
        <input
          {...register("password", {
            required: "Password is a required field!",
            pattern: {
              value:
                /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
              message:
                "Please enter a valid password. It should contain at least one number, one special character, at least one Latin letter in lower case, at least one uppercase Latin letter, and should consist of at least 6 of the above.",
            },
          })}
          type="password"
          placeholder="Password"
        />
        {errors?.password && (
          <div style={{ color: "#3a48f5" }}>*{errors.password.message}</div>
        )}
        <div className="batman-ui--submit-button">
          <Button children="Submit" />
          <Link to="/signup"> Sign Up</Link>
        </div>
      </form>
      <div className="batman-ui--sign-in-image">
        <img src={AsigAdmin} alt="AsigAdmin" />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  user: state?.userSlice,
});

export default connect(mapStateToProps, { getAllUser })(SignIn);
