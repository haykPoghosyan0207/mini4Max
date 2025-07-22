import axios from 'axios';
import environment from "../environment.dev";

export const httpClient = axios.create({
    baseURL: environment.api,
});
