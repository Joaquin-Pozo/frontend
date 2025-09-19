import httpClient from "../http-common";

const getAll = () => {
  return httpClient.get("/api/v1/tools/");
}

const get = (id) => {
  return httpClient.get(`/api/v1/tools/${id}`);
}

const create = (data) => {
  return httpClient.post("/api/v1/tools/", data);
}

const update = (data) => {
  return httpClient.put("/api/v1/tools/", data);
}

const remove = (id) => {
  return httpClient.delete(`/api/v1/tools/${id}`);
}

// Cambiar estado
const changeState = (id, newState) => {
  return httpClient.put(`/api/v1/tools/${id}/state?newState=${newState}`);
}

// Buscar por nombre
const getByName = (name) => {
  return httpClient.get(`/api/v1/tools/by-name?name=${name}`);
}

export default { getAll, get, create, update, remove, changeState, getByName };