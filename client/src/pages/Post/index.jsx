import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageLoader from '../../components/PageLoader';
import styles from '../../sass/Post.module.scss';
import { FetchPost } from './handler';
import EditorJS from '@editorjs/editorjs';
import Layout from '../../components/Layout';

const Post = () => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [blocks, setBlocks] = useState([]);
    const [data, setData] = useState({});
    new EditorJS({
        holder: 'editor',
        readOnly: true,
        data: {
            blocks: blocks
        }
    });
    useEffect(() => {
        FetchPost(id)
            .then(res => {
                console.log(res);
                setData(res.data);
                setBlocks(res.data.body);
                setLoading(false);
            })
    }, [id])
    return loading ? <PageLoader /> : (
        <Layout>
            <h3 className={styles.title}>{data.title}</h3>
            <div id="editor" className={styles.editor}>

            </div>
        </Layout>
    )
}
export default Post;