import axios from "axios";


// const url = "http://localhost:3001"
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

export const getIdProduct = async (id) => {

  try {
    const response = await axios.get(url + `/product/${id}` );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
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

export const addUser = async (postData) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await axios.post(url + "/create-user", postData, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getUser = async (login, password) => {
  // const params = {
  //   login: login,
  //   password: password,
  // };
  try {
    const response = await axios.get(url + "/register", {
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


export const signIn = async (data   ) => {
  try {
    const response = await axios.post('http://localhost:3001/api/login',  data );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};