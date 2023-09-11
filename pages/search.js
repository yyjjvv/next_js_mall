import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import axios from "@/api/axios";
import styles from "@/styles/Search.module.css";
//components
import Header from "@/components/Layout/Header";
import Container from "@/components/Layout/Container";
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
        <div>
            <Header />
            <Container>
                <SearchForm initialValue={q} />
                <h2 className={styles.title}>
                    <span className={styles.keyword}>{q}</span> 검색 결과
                </h2>
                <ProductList
                    className={styles.productList}
                    products={products}
                />
            </Container>
        </div>
    );
};

export default Search;
