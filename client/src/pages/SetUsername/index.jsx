import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import styles from "../../sass/Login.module.scss";
import TextField from '@mui/material/TextField';
import { AiFillWarning } from 'react-icons/ai';
import Loader from '../../components/Loader';
import { CheckExists, SubmitUsername } from './handler';
import { useNavigate } from 'react-router-dom';

const SetUsername = () => {
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [isError, setIsError] = useState(false);
    const [username, setUsername] = useState('');
    const [available, setAvailable] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!sessionStorage.getItem("id")) navigate('/login');
    }, [navigate]);

    const checkIfExists = (e) => {
        setUsername(e.target.value);
        setErrorMsg('');
        setIsError(false);
        const uname = "@" + e.target.value;
        CheckExists({ username: uname })
            .then(res => {
                console.log(res.data);
                setLoading(false);
                setAvailable(true);
                setIsError(false);
            })
            .catch(err => {
                setErrorMsg(err.response.data.message);
                setLoading(false);
                setAvailable(false);
                setIsError(true);
            })
    }
    const submitUsername = () => {
        setLoading(true);
        setErrorMsg('');
        setIsError(false);
        const uname = "@" + username;
        SubmitUsername({ username: uname, id: sessionStorage.getItem("id") })
            .then(res => {
                console.log(res.data);
                setLoading(false);
                navigate('/home');
            })
            .catch(err => {
                setErrorMsg(err.response.data.message);
                setLoading(false);
                setIsError(true);
            })
    }

    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.box}>
                    <h2>Create a Username</h2><br />
                    <p>This will be displayed in your profile page, and for your URL</p>
                    <TextField autoComplete="off" className={styles.input} onChange={checkIfExists} placeholder='johnsnow123' label="Username" variant="standard" />
                    {(isError && !loading) && <span className={styles.error}><><AiFillWarning /> {errorMsg}</></span>}
                    {(available && !loading && username!=="") &&<span className={styles.success}> <>{"@" + username} is available</></span>}
                    {!loading && <>
                        {(username==="" || isError) ?
                            <button className={`${styles.button} ${styles.signIn} ${styles.disabled}`}>Finish</button> :
                            <button onClick={submitUsername} className={`${styles.button} ${styles.signIn}`}>Finish</button>
                        }
                    </>}
                    {loading && <Loader />}
                    <hr className={styles.divider} />
                </div>
            </div>
        </Layout>
    )
}
export default SetUsername;