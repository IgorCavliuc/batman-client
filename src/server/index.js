import axios from "axios";

export const getAllNavigate = () => {
  return fetch("http://localhost:3000/navigation")
    .then((res) => res.json())
    .then((res) => res);
};
export const getAllCategories = () => {
  return fetch("http://localhost:3000/categories")
    .then((res) => res.json())
    .then((res) => res);
};
export const getAllProducts = async (categoryKey) => {
  try {
    const response = await axios.get("http://localhost:3000/products", {
      params: {
        subcategory: categoryKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const addPost = async (postData) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/create-post",
      postData
    );
    return response;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getUser = async (login, password) => {
  // const params = {
  //   login: login,
  //   password: password,
  // };
  try {
    const response = await axios.get("http://localhost:3000/users", {
      params: {
        login: login,
        password: password,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
