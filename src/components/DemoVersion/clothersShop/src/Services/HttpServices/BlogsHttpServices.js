import {httpClient} from "../HttpClientService.js";
import {environment} from "../../environment.dev.js";

export const getBlogs = async () => {
    try {
        return await httpClient.get(`/blogs/${environment.appId}`);
    } catch (error) {
        console.error('Error fetching about:', error);
    }
}