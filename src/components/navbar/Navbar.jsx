import Links from "./links/Links";
import Image from "next/image"; 
import styles from "./navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/logo.jpeg" alt="Logo" width={100} height={100} />
            </div>
            <div className={styles.links}>
                <Links />
            </div>
        </div>
    );
};

export default Navbar;
