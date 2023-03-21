import Layout from "../../components/Layout";
import React, { useState, useEffect } from "react";
import EditorJS from '@editorjs/editorjs';
import { editorConfig } from "../../utils/editorConfig";
import axios from 'axios';
import { ENDPOINTS } from "../../utils/endpoints";
import styles from "../../sass/Write.module.scss"
import PageLoader from "../../components/PageLoader";
import { verifyToken } from "../../utils/verifyToken";
const Write = () => {

    const editor = new EditorJS(editorConfig);
    const [verified, setVerified] = useState(false);
    const token = sessionStorage.getItem("token");
    const id = sessionStorage.getItem("_id");
    const [title, setTitle] = useState("");
    useEffect(() => {
        if (token && id) {
            verifyToken(id, token)
                .then(res => {
                    setVerified(true);
                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            console.log("Token or ID do not exist");
        }
    }, [id, token])

    const SubmitPost = () => {
        editor.save()
            .then(async output => {
                console.log(output);
                const data = {
                    "email": "nehjoshi5@gmail.com",
                    "title": document.getElementById("title").value,
                    "description": "Why your fixed mindset is stopping you from where you want to get to.",
                    "body": output.blocks
                }
                await axios.post(ENDPOINTS.NEW_POST, data);
            })

    }

    return !verified ? <Layout><PageLoader /></Layout> : (
        <Layout>
            <textarea id="title" wrap="soft" placeholder="Title of your story" className={styles.title}></textarea>
            <div id="editor" className={styles.editor} >


            </div>
            <button onClick={SubmitPost}>Submit</button>
        </Layout>
    )
}
export default Write;