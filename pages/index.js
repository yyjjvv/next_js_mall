import Head from "next/head";
import { useState, useEffect } from "react";

import axios from "@/api/axios";
import styles from "@/styles/Home.module.css";
//components
import SearchForm from "@/components/SearchForm";
import ProductList from "@/components/ProductList";

const Home = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const res = await axios.get(`/products`);
        const newProducts = res.data.results;
        setProducts(newProducts);
    };

    useEffect(() => {
        getProducts();
    }, []);

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
