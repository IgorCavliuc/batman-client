import React, { useState } from "react";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "../../ui";
import Atach from "../../svg/atach";
import { addUser } from "../../server";
import Compressor from "compressorjs";

// const AsigAdmin = require("../ico/mainlogo.png");

type FormData = {
  name: string;
  lastName: string;
  email: string;
  login: string;
  password: string;
  data_birthday: string;
  img: string;
  position: string;
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
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const navigate = useNavigate();
  const onSubmit = (data: any) => {
    const totalData = { ...data, img: base64Image, root: "user" };
    addUser(totalData).then((res) => {
      if (res) {
        navigate("/signin");
      }
    });

    reset();
    setBase64Image("");
  };

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    const file = e.target.files[0];

    if (file) {
      try {
        const compressedFile = await new Promise<File>((resolve, reject) => {
          new Compressor(file, {
            quality: 0.3,
            success: (compressed) => {
              //@ts-ignore
              resolve(compressed);
            },
            error: (error) => {
              reject(error);
            },
          });
        });

        const base64 = await convertBase64(compressedFile);

        //@ts-ignore
        setBase64Image(base64);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="batman-ui--sign-up-content content">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h1>Sign Up</h1>
        {/* Name */}
        <div className="batman-ui--sign-up-content--flex">
          <input
            {...register("name", {
              required: "Name is require field!",
            })}
            type="text"
            placeholder="Name"
          />
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
        </div>

        <div className="batman-ui--sign-up-content--flex">
          {/* Email */}
          <input
            {...register("email", {
              required: "Email is require field!",
              pattern: {
                value:
                  // eslint-disable-next-line
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
          {/* Login */}
          <input
            {...register("login", {
              required: "Login is require field!",
            })}
            placeholder="Login"
          />{" "}
          {errors?.login && (
            <div style={{ color: "#3a48f5" }}>*{errors.login.message}</div>
          )}
        </div>
        {/* password  */}
        <input
          {...register("password", {
            required: "Password is require field!",
            pattern: {
              value:
                // eslint-disable-next-line
                /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
              message:
                "Please enter valid email. String contains at least one number, one special character, at least one Latin letter in lower case, at least one uppercase latin letter, string consists of at least 6 of the above.",
            },
          })}
          type="password"
          placeholder="Password"
        />
        {errors?.password && (
          <div style={{ color: "#3a48f5" }}>*{errors.password.message}</div>
        )}
        {/* Data Birthday */}
        <input
          {...register("data_birthday", {
            required: "Data Birthday is required!",
          })}
          type="text"
          placeholder="Data Birthday"
        />
        {errors?.data_birthday && (
          <div style={{ color: "#3a48f5" }}>
            *{errors.data_birthday.message}
          </div>
        )}

        {/* Img */}
        <div className="agent-store--ui-profile-input-media">
          {base64Image ? (
            <img
              src={base64Image}
              onClick={() => setBase64Image("")}
              alt="base64Image"
            />
          ) : (
            <>
              <input
                {...register("img", {
                  required: "Image is required!",
                })}
                type="file"
                accept="image/*"
                onChange={handleChange}
              />

              <Atach />
            </>
          )}
        </div>

        {errors?.img && (
          <div style={{ color: "#3a48f5" }}>*{errors.img.message}</div>
        )}

        <div className="batman-ui--submit-button">
          <Button children="Submit" />
          <Link to="/signin">Sign In</Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
