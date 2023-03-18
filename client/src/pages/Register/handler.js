import axios from 'axios';
import { ENDPOINTS } from "../../utils/endpoints";
export const SignUp = async (data) => {
    return await axios.post(ENDPOINTS.REGISTER, data);
}