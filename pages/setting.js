import Head from "next/head";

import { useTheme } from "@/context/ThemeContext";

import styles from "@/styles/Setting.module.css";
//components
import Dropdown from "@/components/Layout/Dropdown";

const Setting = () => {
    const { theme, setTheme } = useTheme();
    return (
        <>
        <Head>
                <title>설정 - Codeitmall</title>
            </Head>
            <h1 className={styles.title}>설정</h1>
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>테마 설정</h2>
                <Dropdown
                    className={styles.input}
                    name="theme"
                    value={theme}
                    onChange={(name, value) => setTheme(value)}
                    options={[
                        { label: "라이트", value: "light" },
                        { label: "다크", value: "dark" },
                    ]}
                />
            </section>
        </>
    );
};

export default Setting;
