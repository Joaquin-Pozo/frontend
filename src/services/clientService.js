import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get("/api/v1/clients/");
}

const get = (id) => {
    return httpClient.get(`/api/v1/clients/${id}`);
}

const create = (data) => {
    return httpClient.post("/api/v1/clients/", data);
}

const update = (data) => {
    return httpClient.put("/api/v1/clients/", data);
}

const remove = (id) => {
    return httpClient.delete(`/api/v1/clients/${id}`);
}

const changeState = (id, newState) => {
    return httpClient.put(`/api/v1/clients/${id}/state?newState=${newState}`);
}

export default { getAll, get, create, update, remove, changeState };