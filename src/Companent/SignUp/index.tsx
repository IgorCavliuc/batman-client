import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../../ui";

const AsigAdmin = require("../ico/mainlogo.png");

type FormData = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // console.log(data);
    reset();
  };

  return (
    <div className="batman-ui--sign-up-content content">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h1>Sign Up</h1>
        {/* Name */}
        <input
          {...register("name", {
            required: "Name is require field!",
          })}
          type="text"
          placeholder="Name"
        />{" "}
        {errors?.name && (
          <div style={{ color: "#3a48f5" }}>*{errors.name.message}</div>
        )}
        {/* Last Name */}
        <input
          {...register("lastName", {
            required: "Last Name is require field!",
          })}
          type="text"
          placeholder="Last Name"
        />{" "}
        {errors?.lastName && (
          <div style={{ color: "#3a48f5" }}>*{errors.lastName.message}</div>
        )}
        {/* Email */}
        <input
          {...register("email", {
            required: "Email is require field!",
            pattern: {
              value:
                /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
              message: "Please enter valid email",
            },
          })}
          type="email"
          placeholder="Email"
        />{" "}
        {errors?.email && (
          <div style={{ color: "#3a48f5" }}>*{errors.email.message}</div>
        )}
        {/* password  */}
        <input
          {...register("password", {
            required: "Password is require field!",
            pattern: {
              value:
                /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
              message:
                "Please enter valid email. String contains at least one number, one special character, at least one Latin letter in lower case, at least one uppercase latin letter, string consists of at least 6 of the above.",
            },
          })}
          type="password"
          placeholder="Password"
        />{" "}
        {errors?.password && (
          <div style={{ color: "#3a48f5" }}>*{errors.password.message}</div>
        )}
        <div className="batman-ui--submit-button">
          <Button children="Submit" />
          <Link to="/signin">Sign In</Link>
        </div>
      </form>
      <div className="batman-ui--sign-up-image">
        <img src={AsigAdmin} alt="Sign In" />
      </div>
    </div>
  );
}

export default SignUp;
