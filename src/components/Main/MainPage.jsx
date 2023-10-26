import { Link, Outlet } from "react-router-dom";
import styles from "./MainPage.module.css"

const MainPage = () => {
    console.log(styles)
    return (
        <>
            <nav>
                <ul className={styles.hedbarStyle}>
                    <li className={styles.logoStyle}>
                        <Link to='/'>
                            <img src="./jnj.jpg" className={styles.img}></img>
                        </Link>
                    </li>
                    <li className={styles.hedTextStyle}>
                        <Link to='/routes'>Routes</Link>
                    </li>
                    <li className={styles.hedTextStyle}>
                        <Link to='/rates'>Rates</Link>
                    </li>
                    <li className={styles.hedTextStyle}>
                        <Link to='/Drivers'>Drivers</Link>
                    </li>
                    <li className={styles.hedTextStyle}>
                        <Link to='/reviews'>Reviews</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <Outlet />
            <p></p>
        </>
    )
};

export default MainPage;