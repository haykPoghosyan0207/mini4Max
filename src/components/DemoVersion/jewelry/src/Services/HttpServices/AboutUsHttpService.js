import {httpClient} from "../HttpClientService.js";
import environment from "../../environment.dev";

export const getAboutPages = async (app_id) => {
    try {
        return await httpClient.get(`/about-pages/${environment.appId}`);
    } catch (error) {
        console.error('Error fetching about:', error);
    }
}