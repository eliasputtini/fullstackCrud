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
