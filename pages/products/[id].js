import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import axios from "@/lib/axios";

import SizeReviewList from "@/components/SizeReviewList";

const Product = () => {
    const [product, setProduct] = useState();
    const [sizeReviews, setSizeReviews] = useState();
    const router = useRouter();
    const { id } = router.query; // 왜 id? [파일명]을 따라감. 즉, 만약 파일명이 [productId] 라면, productId 이 될 것

    const getProduct = async (targetId) => {
        const res = await axios.get(`/products/${targetId}`);
        const newProduct = res.data;
        setProduct(newProduct);
    };

    const getSizeReviews = async (targetId) => {
        const res = await axios.get(`/size_reviews/?product_id=${targetId}`);
        const newSizeReviews = res.data.results ?? [];
        setSizeReviews(newSizeReviews);
    };

    useEffect(() => {
        if (!id) return;
        getProduct(id);
        getSizeReviews(id);
    }, [id]);

    if (!product) return null;

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.imgUrl} alt={product.name} />

            <SizeReviewList sizeReviews={sizeReviews} />
        </div>
    );
};

export default Product;
