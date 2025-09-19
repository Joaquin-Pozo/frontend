import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get("/api/v1/loans/");
}

const get = (id) => {
    return httpClient.get(`/api/v1/loans/${id}`);
}

const create = (data) => {
    return httpClient.post("/api/v1/loans/", data);
}

const returnLoan = (data) => {
    return httpClient.put("/api/v1/loans/return", data);
}

const getFine = (id) => {
    return httpClient.get(`/api/v1/loans/fine/${id}`);
}

export default { getAll, get, create, returnLoan, getFine };