import { useState, useEffect } from "react";

import axios from "@/lib/axios";
//components
import SearchForm from "@/components/SearchForm";
import ProductList from "@/components/ProductList";

const Home = () => {
    const [products, setProducts] = useState([]);
    console.log(products)

    const getProducts = async () => {
        const res = await axios.get(`/products`);
        const newProducts = res.data.results;
        setProducts(newProducts);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <h1>Codeitmall</h1>
            <SearchForm />
            <ProductList products={products} />
        </div>
    );
};

export default Home;
