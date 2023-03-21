import axios from "axios";
import { ENDPOINTS } from "../../utils/endpoints";
export const FetchPost = async (id) => {
    return await axios.get(ENDPOINTS.FETCH_POST + "?id=" + id);
}