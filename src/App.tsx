import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import { connect } from "react-redux";
import { getAllUser } from "./Redux/User/userSlice";
import { getUser } from "./server";
import Body from "./Companent/Body";

import Navbar from "./Companent/Navbar";
import Product from "./Companent/Product";
import Profile from "./Companent/Profile";
import SignIn from "./Companent/SignIn";
import SignUp from "./Companent/SignUp";
import "./clear.css";
import "./index.css";
import AddPost from "./Companent/AddPost";
import { setAllNavigation } from "./Redux/Navigation/navigationSlice";

export const AuthorisedAccount = ({ component }: any) => {
  const login = sessionStorage.getItem("users") ?? "";
  return login ? (
    <div className="batman-store">
      <Navbar />
      {component}
    </div>
  ) : (
    <Navigate to={"/signin"} />
  );
};
export const NotAuthorisedAccount = ({ component }: any) => {
  const login = sessionStorage.getItem("users") ?? "";

  return (
    <div className="batman-store">
      {!login ? component : <Navigate to={"/"} />}
    </div>
  );
};

function App({ user, getAllUser }: any) {
  const location = useLocation();

  const sectionPath = location?.pathname?.split("section")?.[1]?.split("/")[1];

  useEffect(() => {
    const dataString = sessionStorage.getItem("users") ?? "";
    const data = JSON.parse(dataString || "[]")[0];
    if (data) {
      if (!(new Date().getTime() < data.expires)) {
        sessionStorage.removeItem("users");
      }
    }
  }, []);

  useEffect(() => {
    const dataString = sessionStorage.getItem("users");
    if (dataString) {
      const user = JSON.parse(dataString)[0];
      getUser(user?.login, user?.password).then((res) => {
        if (res) {
          getAllUser(res);
        }
      });
    }
  }, [getAllUser]);

  return (
    <div className="batman-store">
      <Routes>
        <Route
          path="/signin"
          element={<NotAuthorisedAccount component={<SignIn />} />}
        />
        <Route
          path="/signup"
          element={<NotAuthorisedAccount component={<SignUp />} />}
        />

        <Route path="/" element={<AuthorisedAccount component={<Body />} />} />
        <Route
          path="/profile"
          element={<AuthorisedAccount component={<Profile />} />}
        />
        <Route
          path="/create-post"
          element={<AuthorisedAccount component={<AddPost />} />}
        />
        <Route
          path={"/section/" + sectionPath}
          element={
            <AuthorisedAccount component={<Product name={sectionPath} />} />
          }
        />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  user: state?.userSlice,
});

export default connect(mapStateToProps, { getAllUser })(App);
