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

// paga la multa
const payFine = (data) => {
    return httpClient.put("/api/v1/loans/payFine", data);
}

// actualiza los prestamos atrasados
const updateOverdueLoans = () => {
    return httpClient.post("/api/v1/loans/update-overdue", null);
}
// obtiene a los clientes con prestamos atrasados
const getClientswithDelays = () => {
    return httpClient.get("/api/v1/loans/clients-with-delays");
}

// obtiene los prestamos activos
const getActiveLoans = () => {
    return httpClient.get("/api/v1/loans/active-loans");
}

// obtiene los prestamos activos por rango de fechas
const getActiveLoansByDate = (fromDate, toDate) => {
    const params = {fromDate, toDate};
    return httpClient.get("/api/v1/loans/active-loans/filter", { params });
}

// ranking de mejores herramientas por rango de fechas
const getRankingByDate = (fromDate, toDate) => {
    const params = {fromDate, toDate};
    return httpClient.get("/api/v1/loans/most-loaned-tools-by-date", { params });
}

// ranking de mejores herramientas
const getRanking = () => {
    return httpClient.get("/api/v1/loans/most-loaned-tools");
}

export default { getAll, get, create, returnLoan, getFine, payFine, 
    updateOverdueLoans, getRankingByDate, getRanking, getClientswithDelays, 
    getActiveLoans, getActiveLoansByDate };