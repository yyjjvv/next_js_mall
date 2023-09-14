import { useRouter } from "next/router";
import Head from "next/head";
import { useState, useEffect } from "react";

import axios from "@/api/axios";
import styles from "@/styles/Search.module.css";
//components
import SearchForm from "@/components/SearchForm";
import ProductList from "@/components/ProductList";

const Search = () => {
    const [products, setProducts] = useState([]);
    const router = useRouter();
    const { q } = router.query;

    const getProducts = async (query) => {
        const res = await axios.get(`/products/?q=${query}`);
        const newProducts = res.data.results;
        setProducts(newProducts);
    };

    useEffect(() => {
        getProducts(q);
    }, [q]);

    return (
        <>
            <Head>
                <title>{q} 검색 결과 - Codeitmall</title>
            </Head>
            <SearchForm initialValue={q} />
            <h2 className={styles.title}>
                <span className={styles.keyword}>{q}</span> 검색 결과
            </h2>
            <ProductList className={styles.productList} products={products} />
        </>
    );
};

export default Search;
