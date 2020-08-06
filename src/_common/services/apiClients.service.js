/**
 * @file
 * Contains API clients service.
 */

import createClient from './apiClientFactory.service';
import { MAIN_API_URL } from '../constants/apiEnpoints.constant';

const apiClient = createClient({
    baseUrl: MAIN_API_URL,
});

export {
    apiClient,
};