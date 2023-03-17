import { ENDPOINTS } from "../../utils/endpoints";
import axios from 'axios';
export const SignIn = async (email, password) => {
    return await axios.post(ENDPOINTS.LOGIN, {
        email, password
    })
}