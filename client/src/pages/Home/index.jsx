import React from 'react';
import Layout from '../../components/Layout';
import styles from "../../sass/Home.module.scss";
const Home = () => {
    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.hero}>
                    <h1 className={styles.name}>The Catalyst.</h1>
                    <p className={styles.description}>Welcome to the world of success.</p>
                    <p className={styles.description}>Ready to begin your journey of motivation?</p>
                    <p className={styles.description}>Join the club. With thousands of others.</p>
                    <p className={styles.description}>And share your story of passion.</p>
                    <div className={styles.buttonWrapper}>
                        <div className={styles.button}>Sign Up</div>
                        <div className={`${styles.button} ${styles.button2}`}>Visit Feed</div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Home;