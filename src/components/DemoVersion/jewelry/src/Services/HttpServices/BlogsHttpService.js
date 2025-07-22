import {httpClient} from "../HttpClientService.js";
import environment from "../../environment.dev";

export const getBlogs = async (app_id) => {
    try {
        return await httpClient.get(`/blogs/${environment.appId}`);
    } catch (error) {
        console.error('Error fetching about:', error);
    }
}