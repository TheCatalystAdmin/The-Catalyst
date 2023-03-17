import styles from "../sass/Global.module.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className={styles.navWrapper}>
            <h2>The Catalyst</h2>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link to='/' style={{ color: "inherit" }}>Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to='/about' style={{ color: "inherit" }}>About</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to='/login' style={{ color: "inherit" }}>Login</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to='/premium' className={styles.purchase}>Premium</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;