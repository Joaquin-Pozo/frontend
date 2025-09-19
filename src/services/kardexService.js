import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get("/api/v1/kardex/");
}

const getByTool = (toolId) => {
    return httpClient.get(`/api/v1/kardex/tool/${toolId}`);
}

const getByDateRange = (start, end) => {
    httpClient.get("/api/v1/kardex/date-range", {
        params: { start, end },
    });
}

export default { getAll, getByTool, getByDateRange };