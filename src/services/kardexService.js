import httpClient from "../http-common";

// obtiene todos los kardexs
const getAll = () => {
    return httpClient.get("/api/v1/kardex/");
}

// obtiene los kardex por id de herramienta
const getByTool = (toolId) => {
    return httpClient.get(`/api/v1/kardex/tool/${toolId}`);
}

// obtiene los kardex por rango de fechas
const getByDateRange = (start, end) => {
    httpClient.get("/api/v1/kardex/date-range", {
        params: { start, end },
    });
}

export default { getAll, getByTool, getByDateRange };