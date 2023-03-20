import React, { useState } from 'react';
import Layout from '../../components/Layout';
import styles from "../../sass/Login.module.scss";
import TextField from '@mui/material/TextField';
import { BsGoogle, BsFacebook } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillWarning } from 'react-icons/ai';
import Loader from '../../components/Loader';
import { SignIn } from './handler';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [isError, setIsError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        setLoading(true);
        SignIn(email, password)
        .then(res => {
            console.log(res.data);
            sessionStorage.setItem('token', res.data.token);
            navigate('/feed');
        })
        .catch(err => {
            console.log(err);
            setErrorMsg(err.response.data.message);
            setLoading(false);
            setIsError(true);
        })
    }

    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.box}>
                    <h2>Let's Get You Signed In</h2>
                    <TextField className={styles.input} onChange={e => setEmail(e.target.value)} placeholder='abc@gmail.com' label="E-mail" variant="outlined" />
                    <TextField className={styles.input} onChange={e => setPassword(e.target.value)} label="Password" type="password" variant="outlined" />
                    <span className={styles.error}>{(isError && !loading) && <><AiFillWarning /> {errorMsg}</> }</span>
                    {!loading && 
                    <>
                    {(email === "") || (password === "") ? 
                    <button className={`${styles.button} ${styles.signIn} ${styles.disabled}`} >Sign In</button> :
                    <button onClick={handleLogin} className={`${styles.button} ${styles.signIn}`}>Sign In</button>}
                    </>

                    }
                    {loading && <Loader />}
                    <span className={styles.or}>OR</span>
                    <button className={`${styles.button} ${styles.google}`}>
                        <BsGoogle className={styles.icon} />
                        Continue With Google
                    </button>
                    <button className={`${styles.button} ${styles.facebook}`}>
                        <BsFacebook className={styles.icon} />
                        Continue With Facebook
                    </button>
                    <hr className={styles.divider} />
                    <p className={styles.text}>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
                </div>
            </div>
        </Layout>
    )
}
export default Login;