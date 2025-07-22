// Services/getProductById.js
import { httpClient } from "../HttpClientService.js";

export const getProductById = async (productId) => {
    try {
        const res = await httpClient.get(`/product/${productId}`);
        return res.data.data;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
};
