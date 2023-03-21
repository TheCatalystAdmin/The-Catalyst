import styles from "../sass/Global.module.scss";
import { CircularProgress } from "@mui/material";
const PageLoader = () => {
    return (
        <div className={styles.pageLoader}>
            <CircularProgress />
        </div>
    )
}
export default PageLoader;