import Head from "next/head";
// import { useState, useEffect } from "react";

import axios from "@/api/axios";
import styles from "@/styles/Home.module.css";
//components
import SearchForm from "@/components/SearchForm";
import ProductList from "@/components/ProductList";

//정적 생성
//build할 때 html을 미리 만들어둠
//자주 바뀌는 데이터는 정적 생성이 부적합
export const getStaticProps = async () => {
    const res = await axios.get(`/products`);
    const products = res.data.results;
    return {
        props: {
            products,
        },
    };
};

const Home = ({ products }) => {
    // const [products, setProducts] = useState([]);

    // const getProducts = async () => {
    //     const res = await axios.get(`/products`);
    //     const newProducts = res.data.results;
    //     setProducts(newProducts);
    // };

    // useEffect(() => {
    //     getProducts();
    // }, []);

    return (
        <>
            <Head>
                <title>Codeitmall</title>
            </Head>
            <SearchForm />
            <ProductList className={styles.products} products={products} />
        </>
    );
};

export default Home;
