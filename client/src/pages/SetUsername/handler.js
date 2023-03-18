import axios from 'axios';
import { ENDPOINTS } from '../../utils/endpoints';

export const CheckExists = async (data) => {
    return await axios.get(ENDPOINTS.CHECK_USERNAME_EXISTS + `?username=${data.username}`);
}

export const SubmitUsername = async (data) => {
    return await axios.put(ENDPOINTS.SET_USERNAME, data);
}