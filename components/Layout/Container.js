import styles from "./Container.module.css";

const Container = ({ className = "", page = false, children }) => {
    const classNames = `${styles.container} ${
        page ? styles.page : ""
    } ${className}`;
    return <div className={classNames}>{children}</div>;
};

export default Container;
