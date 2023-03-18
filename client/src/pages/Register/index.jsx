import React, { useState } from 'react';
import Layout from '../../components/Layout';
import styles from "../../sass/Login.module.scss";
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillWarning } from 'react-icons/ai';
import Loader from '../../components/Loader';
import { SignUp } from './handler';
import { generateUsername } from '../../utils/generateUsername';

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [isError, setIsError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        setIsError(false);
        setLoading(true);
        setErrorMsg('');
        if (password !== confirmPassword) {
            setErrorMsg("Passwords don't match");
            setIsError(true);
            setLoading(false);
        }
        else {
            const username = generateUsername(email);
            const data = { username, email, password, firstName, lastName }
            SignUp(data)
                .then(res => {
                    console.log(res.data);
                    sessionStorage.setItem("id", res.data._id);
                    navigate('/set-username');
                })
                .catch(err => {
                    setErrorMsg(err.response.data.message);
                    setLoading(false);
                    setIsError(true);
                })
        }
    }

    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.box}>
                    <h2>Tell Us About Yourself</h2>
                    <TextField className={styles.input} onChange={e => setFirstName(e.target.value)} placeholder='John' label="First Name" variant="outlined" />
                    <TextField className={styles.input} onChange={e => setLastName(e.target.value)} placeholder='Snow' label="Last Name" variant="outlined" />
                    <TextField className={styles.input} onChange={e => setEmail(e.target.value)} placeholder='abc@gmail.com' label="E-mail" variant="outlined" />
                    <TextField className={styles.input} onChange={e => setPassword(e.target.value)} label="Password" type="password" variant="outlined" />
                    <TextField className={styles.input} onChange={e => setConfirmPassword(e.target.value)} label="Confirm Password" type="password" variant="outlined" />
                    <span className={styles.error}>{(isError && !loading) && <><AiFillWarning /> {errorMsg}</>}</span>
                    {!loading && <>
                        {(firstName === "") || (lastName === "") || (email === "") || (password === "") || (confirmPassword === "") ?
                            <button className={`${styles.button} ${styles.signIn} ${styles.disabled}`}>Sign Up</button> :
                            <button onClick={handleRegister} className={`${styles.button} ${styles.signIn}`}>Sign Up</button>
                        }
                    </>}
                    {loading && <Loader />}
                    <hr className={styles.divider} />
                    <p className={styles.text}>Already have an account? <Link to='/login'>Sign In</Link></p><br />
                    <p className={styles.text} style={{ color: "#8a8a8a", fontSize: '0.8rem' }}>By signing up, you agree to the <Link to="/terms">terms and conditions</Link>.</p>
                </div>
            </div>
        </Layout>
    )
}
export default Register;