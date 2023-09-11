import { useRouter } from "next/router";
import { useState, useEffect } from "react";
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
        <div>
            <h1>search 페이지</h1>
            <SearchForm initialValue={q} />
            <h2>{q} 검색 결과</h2>
            <ProductList products={products} />
        </div>
    );
};

export default Search;
