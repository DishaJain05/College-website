// Navbar.jsx
import Links from "./links/Links";
import styles from "./navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src="./logo.jpeg" alt="Logo" />
            </div>
            <div className={styles.links}>
                <Links />
            </div>
        </div>
    );
};

export default Navbar;
