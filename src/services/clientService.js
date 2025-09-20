import httpClient from "../http-common";

// obtiene todos los clientes
const getAll = () => {
    return httpClient.get("/api/v1/clients/");
}

// obtiene un cliente por id
const get = (id) => {
    return httpClient.get(`/api/v1/clients/${id}`);
}

// crea un nuevo cliente
const create = (data) => {
    return httpClient.post("/api/v1/clients/", data);
}

// actualiza a un cliente
const update = (data) => {
    return httpClient.put("/api/v1/clients/", data);
}

// elimina a un cliente
const remove = (id) => {
    return httpClient.delete(`/api/v1/clients/${id}`);
}

// cambia el estado de un cliente
const changeState = (id, newState) => {
    return httpClient.put(`/api/v1/clients/${id}/state?newState=${newState}`);
}

export default { getAll, get, create, update, remove, changeState };