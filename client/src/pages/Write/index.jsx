import Layout from "../../components/Layout";
import React from "react";
import EditorJS from '@editorjs/editorjs';
import { editorConfig } from "../../utils/editorConfig";
import axios from 'axios';
import { ENDPOINTS } from "../../utils/endpoints";

const Write = () => {

    const editor = new EditorJS(editorConfig);

    const SubmitPost = () => {
        editor.save()
        .then(async output => {
            console.log(output);
            const data = {
                "email": "nehjoshi5@gmail.com",
                "title": "Get Rich Quick!",
                "description": "This is a description",
                "body": output.blocks
            }
            await axios.post(ENDPOINTS.NEW_POST, data);
        })
        
    }

    return (
        <Layout>
            <div id="editor" style={{fontSize: "1.2rem"}}>

            </div>
            <button onClick={SubmitPost}>Submit</button>
        </Layout>
    )
}
export default Write;