import Layout from "../../components/Layout";
import React, { useState, useEffect } from "react";
import styles from "../../sass/Write.module.scss"
import PageLoader from "../../components/PageLoader";
import { verifyToken } from "../../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, Button } from "@mui/material";
import { SavePost } from "./handler";
import EditorJS from '@editorjs/editorjs';


const Write = () => {

    const [editor, setEditor] = useState(null);
    const [verified, setVerified] = useState(false);
    const token = sessionStorage.getItem("token");
    const id = sessionStorage.getItem("_id");
    const [dialogOpen, setDialogOpen] = useState(false);
    const [description, setDescription] = useState("");
    const [topics, setTopics] = useState(["", "", "", "", ""]);
    const navigate = useNavigate();
    useEffect(() => {
        if (token && id) {
            verifyToken(id, token)
                .then(res => {
                    setVerified(true);
                    setTimeout(() => {
                        setEditor(new EditorJS({
                            holder: 'editor',
                            placeholder: 'Begin writing here...',
                        }));
                    }, 1000);
                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            console.log("Token or ID do not exist");
            navigate("/error/login");
        }
    }, [id, token, navigate])

    const SubmitPost = () => {
        const data = {
            id: id,
            title: document.getElementById("title").value,
            description: description,
            topics: topics,
        }
        SavePost(editor, data)
            .then((res) => {
                console.log(res)
                navigate('/post/' + res.data._id);
            })
    }
    const GenerateModalSubjectInputs = () => {
        let count = 4;
        let elements = [];
        for (let i = 0; i < count; i++) {
            elements.push(
                <TextField
                    fullWidth
                    className={styles.modalDesc}
                    multiline
                    variant="outlined"
                    label={`Subject ${i + 1}`}
                    value={topics[i]}
                    onChange={e => setTopics(topics.map((topic, index) => index === i ? e.target.value : topic))}
                    autoFocus
                />
            )
        }
        return elements;
    }

    return !verified ? <Layout><PageLoader /></Layout> : (
        <Layout>
            <textarea id="title" wrap="soft" placeholder="Title of your story" className={styles.title}></textarea>
            <div id="editor" className={styles.editor} ></div>
            <button className={styles.review} onClick={() => setDialogOpen(true)}>Review Options</button>
            <Dialog className={styles.dialog} fullWidth open={dialogOpen} onClose={() => setDialogOpen(false)} >
                <DialogTitle className={styles.dialogTitle}>Review Post Before Submission</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <p className={styles.dialogText}>Enter a description for your post.</p>
                        <TextField
                            fullWidth
                            className={styles.modalDesc}
                            multiline
                            variant="outlined"
                            label="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            inputProps={{ maxLength: 150 }}
                        />
                        <p className={styles.dialogText}>Choose 4 subjects that best highlight your post.</p>
                        {GenerateModalSubjectInputs()}
                    </DialogContentText>
                    <Button className={styles.dialogButton} onClick={SubmitPost}>Submit Post</Button>
                </DialogContent>
            </Dialog>
        </Layout>
    )
}
export default Write;