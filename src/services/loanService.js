import httpClient from "../http-common";

// obtiene todos los prestamos
const getAll = () => {
    return httpClient.get("/api/v1/loans/");
}

// obtiene un prestamo por id
const get = (id) => {
    return httpClient.get(`/api/v1/loans/${id}`);
}

// crea un nuevo prestamo
const create = (data) => {
    return httpClient.post("/api/v1/loans/", data);
}

// devuelve un prestamo
const returnLoan = (data) => {
    return httpClient.put("/api/v1/loans/return", data);
}

// obtiene la multa por id de prestamo
const getFine = (id) => {
    return httpClient.get(`/api/v1/loans/fine/${id}`);
}

export default { getAll, get, create, returnLoan, getFine };