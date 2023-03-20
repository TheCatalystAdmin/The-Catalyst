import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import styles from "../../sass/Home.module.scss";
const Home = () => {
    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.hero}>
                    <h1 className={styles.name}>The Catalyst.</h1>
                    <p className={styles.description}>Welcome to the world of success.<br/>
                    Ready to begin your journey of motivation?<br />
                    Join the club. With thousands of others. <br />
                    And share your story of passion.</p>
                    <div className={styles.buttonWrapper}>
                        <Link to='/signup'><div className={styles.button}>Sign Up</div></Link>
                        <div className={`${styles.button} ${styles.button2}`}>Visit Feed</div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Home;