/**
 * Get countries
 */

import { apiClient } from './apiClients.service';

const getCountries = async () => {
    try {
        const response = await apiClient.get();
        return response.data;
    } catch (e) {
        throw new Error(e);
    }
};

export default {
    getCountries,
};