import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { connect } from "react-redux";
import { getAllUser, updateUser } from "./Redux/User/userSlice";
import Body from "./Pages/Body";

import Product from "./Pages/Product";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import "./clear.css";
import "./index.css";
import AddPost from "./Pages/AddPost";
import ProductDetail from "./Pages/ProductDetail";
import { Layout } from "./Pages/components";

interface DecodedToken {
  userId: string;
  iat: number;
  exp: number;
}

export const Authorised = ({ component }: any) => {
  const location = useLocation();

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");

    if (accessToken) {
      try {
        const decodedToken = jwt_decode<DecodedToken>(accessToken);
        const currentTime = Math.floor(Date.now() / 1000);

        if (decodedToken.exp && decodedToken.exp < currentTime) {
          sessionStorage.removeItem("accessToken");
          window.location.reload();
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, []);
  const sectionPath = location?.pathname?.split("section")?.[1]?.split("/")[1];

  return (
    <div className="batman-store">
      <Layout>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Body />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-post" element={<AddPost />} />
          <Route
            path={"/section/" + sectionPath}
            element={<Product name={sectionPath} />}
          />
          <Route
            path={`/section/${sectionPath}/:productId`}
            element={<ProductDetail />}
          />
        </Routes>
      </Layout>
    </div>
  );
};
export const Unauthorised = ({ component }: any) => {
  return (
    <div className="batman-store">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="signin" />} />
      </Routes>
    </div>
  );
};

function App({ user, updateUser }: any) {
  const accessToken = sessionStorage.getItem("accessToken");

  useEffect(() => {
    const userData: any = localStorage.getItem("userData");
    const userObjectData = JSON.parse(userData);
    updateUser(userObjectData);
  }, [updateUser]);

  const Page = accessToken ? Authorised : Unauthorised;

  return (
    <div className="batman-store">
      <Page />
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  user: state?.userSlice,
});

export default connect(mapStateToProps, { getAllUser, updateUser })(App);
