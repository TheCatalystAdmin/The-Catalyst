import styles from "../sass/Global.module.scss";
import { Link } from "react-router-dom";
import { BsPenFill } from "react-icons/bs";
const Navbar = () => {
    return (
        <nav className={styles.navWrapper}>
            <h2>The Catalyst</h2>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link to='/write' style={{ color: "inherit" }}>
                        <BsPenFill /> &nbsp;Tell a Story
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link to='/premium' className={styles.purchase}>Premium</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;