import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";

import axios from "@/api/axios";
import styles from "@/styles/Product.module.css";
//components
import SizeReviewList from "@/components/SizeReviewList";
import ProductDetailInfo from "@/components/ProductDetail/ProductDetailInfo";

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
        <>
            <h1 className={styles.name}>
                {product.name}
                <span className={styles.englishName}>
                    {product.englishName}
                </span>
            </h1>
            <div className={styles.content}>
                <div className={styles.image}>
                    <Image src={product.imgUrl} alt={product.name} sizes="100%" fill />
                </div>
                <div>
                    <ProductDetailInfo product={product} />
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>사이즈 추천</h2>
                        <SizeReviewList sizeReviews={sizeReviews ?? []} />
                    </section>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>사이즈 추천하기</h2>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Product;
