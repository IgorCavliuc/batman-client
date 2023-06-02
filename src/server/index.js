import axios from "axios";


const url = "https://batman-server.vercel.app"


export const getAllNavigate = () => {
  return fetch(url + "/navigation")
    .then((res) => res.json())
    .then((res) => res);
};
export const getAllCategories = () => {
  return fetch(url + "/categories")
    .then((res) => res.json())
    .then((res) => res);
};
export const getAllProducts = async (categoryKey) => {
  try {
    const response = await axios.get(url + "/products", {
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
      url + "/create-post",
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
    const response = await axios.get(url + "/users", {
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
