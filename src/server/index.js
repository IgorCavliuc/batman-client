import axios from "axios";


const local = window.location.href.includes('localhost')
const url = local ? "http://localhost:3000" : "https://batman-server.vercel.app";
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
    const response = await axios.get(url + `/product/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const addPost = async (postData) => {
  try {
    const response = await axios.post(url + "/create-post", postData);
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

export const signIn = async (data) => {
  try {
    const response = await axios.post(url + '/api/login', data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Ваша функция getUser тоже требует исправлений, чтобы использовать правильный метод (например, POST), но для этого мне нужно больше контекста.
