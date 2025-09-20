import httpClient from "../http-common";

// obtiene todos los kardexs
const getAll = () => {
    return httpClient.get("/api/v1/kardex/");
}

// obtiene los kardex por id de herramienta
const getByTool = (toolId) => {
    return httpClient.get(`/api/v1/kardex/tool/${toolId}`);
}

// obtiene los kardex por rango de fechas en formato yyyy-mm-dd
const getByDateRange = (start, end) => {
    return httpClient.get("/api/v1/kardex/date-range", {
        params: { start, end },
    });
}

// permite filtrar por fecha, herramienta o ambas
const filter = (toolId, start, end) => {
    const params = {};
    if (toolId) params.toolId = toolId;
    if (start) params.start = start;
    if (end) params.end = end;
    return httpClient.get("/api/v1/kardex/filter", { params });
}

export default { getAll, getByTool, getByDateRange, filter };