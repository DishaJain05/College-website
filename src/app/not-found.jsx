import Link from "next/link";

const notfound = () => {
    return (
        <div>
            <h2>Page Not Found</h2>
            <Link href="/">Return Home</Link>
        </div>
    );
};

export default notfound;