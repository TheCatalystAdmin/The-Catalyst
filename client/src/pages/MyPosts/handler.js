import axios from "axios";
import { ENDPOINTS } from "../../utils/endpoints";
export const GetMyPosts = async () => {
    const id = sessionStorage.getItem("_id");
    return await axios.get(ENDPOINTS.GET_USER_POSTS + "?id=" + id);
}