import axios from "axios";
import { ENDPOINTS } from "../../utils/endpoints";
export const SavePost = async (editor, data) => {
    console.log(editor);
    console.log(data);
    const resp = await editor.save();
    data = {
        ...data, 
        "body": resp.blocks
    }
    return await axios.post(ENDPOINTS.NEW_POST, data);
}