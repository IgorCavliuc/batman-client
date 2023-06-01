import React, { useCallback } from "react";
import "./SignIn.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { getAllUser } from "../../Redux/User/userSlice";
import { getUser } from "../../server";
import { Button } from "../../ui";
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

  const onSubmit = useCallback(
    async (data: FormValues) => {
      try {
        const res = await getUser(data?.login, data?.password);
        getAllUser(res);

        const dataUser = {
          login: data?.login,
          password: data?.password,
          expires: new Date().getTime() + 5000,
        };

        if (!sessionStorage.getItem("users")) {
          sessionStorage.setItem("users", JSON.stringify(dataUser));
          window.location.href = "/";
        }
      } catch (error) {
        console.error(error);
      }
    },
    [getAllUser]
  );

  return (
    <div className="batman-ui--sign-in-content content ">
      <form onSubmit={handleSubmit(onSubmit)} className="batman-ui--form">
        <h1>Sign In</h1>
        <input
          {...register("login", {
            required: "Login is a required field!",
            pattern: {
              value:
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
