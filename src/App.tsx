import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';

import { connect } from "react-redux";
import { getAllUser, updateUser } from "./Redux/User/userSlice";
import Body from "./Companent/Body";

import Navbar from "./Companent/Navbar";
import Product from "./Companent/Product";
import Profile from "./Companent/Profile";
import SignIn from "./Companent/SignIn";
import SignUp from "./Companent/SignUp";
import "./clear.css";
import "./index.css";
import AddPost from "./Companent/AddPost";
import ProductDetail from "./Companent/ProductDetail";


interface DecodedToken {
  userId: string;
  iat: number;
  exp: number;
}

export const AuthorisedAccount = ({ component }: any) => {

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');

    if (accessToken) {
      try {
        const decodedToken = jwt_decode<DecodedToken>(accessToken);
        const currentTime = Math.floor(Date.now() / 1000);

        if (decodedToken.exp && decodedToken.exp < currentTime) {
          sessionStorage.removeItem('accessToken');
          window.location.reload();
        }
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);


  const accessToken =  sessionStorage.getItem('accessToken')
  return accessToken ? (
    <div className="batman-store">
      <Navbar />
      {component}
    </div>
  ) : (
    <Navigate to={"/signin"} />
  );
};
export const NotAuthorisedAccount = ({ component }: any) => {
  const login = sessionStorage.getItem("accessToken") ?? "";

  return (
    <div className="batman-store">
      {!login ? component : <Navigate to={"/"} />}
    </div>
  );
};

function App({ user, updateUser }: any) {
  const location = useLocation();

  const sectionPath = location?.pathname?.split("section")?.[1]?.split("/")[1];

  // const accessToken =  sessionStorage.getItem('accessToken')
  useEffect(() => {
    const userData = localStorage.getItem('userData')
    const userObjectData = JSON.parse(userData??'')
    updateUser(userObjectData)
  }, [updateUser]);


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
        <Route path={`/section/${sectionPath}/:productId`} element={
          <AuthorisedAccount component={<ProductDetail  />} />
        }
               />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  user: state?.userSlice,
});

export default connect(mapStateToProps, { getAllUser, updateUser })(App);
