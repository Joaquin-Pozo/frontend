import httpClient from "../http-common";

// obtiene todas las herramientas
const getAll = () => {
  return httpClient.get("/api/v1/tools/");
}

// obtiene una herramienta por id
const get = (id) => {
  return httpClient.get(`/api/v1/tools/${id}`);
}

// agrega una nueva herramienta
const create = (data) => {
  return httpClient.post("/api/v1/tools/", data);
}

// actualiza una herramienta
const update = (data) => {
  return httpClient.put("/api/v1/tools/", data);
}
/*
// elimina una herramienta
const remove = (id) => {
  return httpClient.delete(`/api/v1/tools/${id}`);
}
*/
// cambia el estado de una herramienta
const changeState = (id, newState) => {
  return httpClient.put(`/api/v1/tools/${id}/state?newState=${newState}`);
}

// obtiene una herramienta por nombre (opcional)
const getByName = (name) => {
  return httpClient.get(`/api/v1/tools/by-name?name=${name}`);
}

export default { getAll, get, create, update, changeState, getByName };