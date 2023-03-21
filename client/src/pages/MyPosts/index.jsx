import Layout from "../../components/Layout";
import React, { useState, useEffect } from "react";
import styles from "../../sass/Write.module.scss"
import PageLoader from "../../components/PageLoader";
import { verifyToken } from "../../utils/verifyToken";
import { GetMyPosts } from "./handler";
import { Link } from "react-router-dom";

const MyPosts = () => {
    const [verified, setVerified] = useState(false);
    const token = sessionStorage.getItem("token");
    const id = sessionStorage.getItem("_id");
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        if (token && id) {
            verifyToken(id, token)
                .then(async () => {
                    const response = await GetMyPosts();
                    console.log(response);
                    setPosts(response.data)
                    setVerified(true);
                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            console.log("Token or ID do not exist");
        }
    }, [id, token])
    return !verified ? <Layout><PageLoader /></Layout> : (
        <Layout>
            {posts.map(post => {
                return (
                    <Link to={`/post/${post.id}`}>
                        <div className={styles.infoBox}>
                            <h3 className={styles.boxTitle}>{post.title}</h3>
                            <p className={styles.boxName}>{post.authorName} &nbsp; {post.authoruserName}</p>
                            <p className={styles.boxDescription}>{post.description}</p>
                        </div>
                    </Link>
                )
            })
            }
        </Layout>
    )
}
export default MyPosts;