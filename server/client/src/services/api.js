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

export const getLevels = async () => {
  try {
    const response = await api.get("levels");

    return response;
  } catch (err) {
    console.error("error => ", err);
  }
};

export const getLevel = async (id) => {
  try {
    const response = await api.get(`level/${id}`);

    return response;
  } catch (err) {
    console.error("error => ", err);
  }
};

export const postDevelopers = async (name, idade, hobby, nivel) => {
  try {
    api.post("post", {
      name: name,
      idade: idade,
      hobby: hobby,
      nivel: nivel,
    });
  } catch (err) {
    console.error("error => ", err);
    return false;
  }
};

export const postLevel = async (level) => {
  try {
    api.post("level/post", {
      level: level,
    });
  } catch (err) {
    console.error("error => ", err);
    return false;
  }
};

export const delDevelopers = async (id) => {
  try {
    api.delete(`delete/${id}`);
  } catch (err) {
    console.error("error => ", err);
  }
};

export const delLevels = async (id) => {
  const x = await api.delete(`level/delete/${id}`).catch((error) => {
    return error.message;
  });
  Promise.resolve(x);
  return x;
};

export const patchLevels = async (id, level) => {
  try {
    api.patch(`level/update/${id}`, {
      level: level,
    });
  } catch (err) {
    console.error("error => ", err);
  }
};

export const patchDevelopers = async (id, name, idade, hobby, nivel) => {
  try {
    api.patch(`update/${id}`, {
      name: name,
      idade: idade,
      hobby: hobby,
      nivel: nivel,
    });
  } catch (err) {
    console.error("error => ", err);
  }
};
