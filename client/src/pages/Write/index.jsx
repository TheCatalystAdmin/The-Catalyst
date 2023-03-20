import Layout from "../../components/Layout";
import React from "react";
import EditorJS from '@editorjs/editorjs';
import { editorConfig } from "../../utils/editorConfig";
import axios from 'axios';
import { ENDPOINTS } from "../../utils/endpoints";
import styles from "../../sass/Write.module.scss"

const Write = () => {

    const editor = new EditorJS(editorConfig);

    const SubmitPost = () => {
        editor.save()
        .then(async output => {
            console.log(output);
            const data = {
                "email": "nehjoshi5@gmail.com",
                "title": "THIS Book Has The Ability to Transform Your Life",
                "description": "This powerful book has the potential to profoundly transform your life for the better.",
                "body": output.blocks
            }
            await axios.post(ENDPOINTS.NEW_POST, data);
        })
        
    }

    return (
        <Layout>
            <div id="editor" className={styles.editor} >

            </div>
            <button onClick={SubmitPost}>Submit</button>
        </Layout>
    )
}
export default Write;