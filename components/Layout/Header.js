import Link from "next/link";
import styles from "./Header.module.css";
import Container from "./Container";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Link className={styles.logo} href="/">
                    ShoppingMall
                </Link>
                <Link className={styles.setting} href="/setting">
                    설정
                </Link>
            </Container>
        </header>
    );
};

export default Header;
