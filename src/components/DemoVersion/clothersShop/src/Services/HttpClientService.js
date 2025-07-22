import axios from "axios";
import { environment } from "../environment.dev.js";
import { handlerFor404Error } from "../inteceptors/Interceptors.js";

export const httpClient = axios.create({
    baseURL: environment.api,
});

httpClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

handlerFor404Error(httpClient);
