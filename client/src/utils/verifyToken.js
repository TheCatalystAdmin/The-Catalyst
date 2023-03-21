import axios from 'axios';
import { ENDPOINTS } from './endpoints';
export const verifyToken = async (id, token) => {
    return await axios.get(ENDPOINTS.CHECK_STATUS + "?id=" + id + "&token=" + token);
}