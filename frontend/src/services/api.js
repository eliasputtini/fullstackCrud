import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000/api/",
});

export const getDevelopers = async () => {
  try {
    const response = await api.get("getAll");

    return response;
  } catch (err) {
    console.error("error => ", err);
  }
};

export const postDevelopers = async (name, idade, hobby) => {
  try {
    api.post("post", {
      name: name,
      idade: idade,
      hobby: hobby,
    });
  } catch (err) {
    console.error("error => ", err);
  }
};

export const delDevelopers = async (id) => {
  try {
    api.delete(`delete/${id}`);
  } catch (err) {
    console.error("error => ", err);
  }
};
