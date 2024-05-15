// Links.jsx
import Link from "next/link";
import styles from "./links.module.css";

const Links = () => {
    const links = [
        { title: "Homepage", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
        { title: "Departments", path: "/departments", sublinks: ["CSE", "IT", "ECE"] },
    ];

    return (
        <div className={styles.links}>
            {links.map((link) => (
                <div key={link.title}>
                    {link.sublinks ? (
                        <div className={styles.dropdown}>
                            <button className={styles.dropbtn}>{link.title}</button>
                            <div className={styles.dropdownContent}>
                                {link.sublinks.map((sublink, index) => (
                                    <Link href={`${link.path}/${sublink.toLowerCase()}`} key={index}>
                                        {sublink}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <Link href={link.path} key={link.title}>
                            {link.title}
                        </Link>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Links;
