import {httpClient} from "../HttpClientService.js";
import environment from "../../environment.dev";


export const getTopProductById = async () => {
    try {
        const response = await httpClient.get(`product/top-product/${environment.appId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product:', error);
        return null;
    }
}


