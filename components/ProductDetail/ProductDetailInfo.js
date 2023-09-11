import styles from "@/styles/Product.module.css";

import StarRating from "@/components/StarRating";

const ProductDetailInfo = ({ product }) => {
    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>제품 정보</h2>
            <div className={styles.info}>
                <ul className={styles.infoTable}>
                    <li>
                        <span className={styles.infoTitle}>브랜드 / 품번</span>
                        <span>
                            {product.brand} / {product.productCode}
                        </span>
                    </li>
                    <li>
                        <span className={styles.infoTitle}>제품명</span>
                        <span>{product.name}</span>
                    </li>
                    <li>
                        <span className={styles.infoTitle}>가격</span>
                        <span>
                            <span className={styles.salePrice}>
                                {product.price.toLocaleString()}원
                            </span>{" "}
                            {product.salePrice.toLocaleString()}원
                        </span>
                    </li>
                    <li>
                        <span className={styles.infoTitle}>포인트 적립</span>
                        <span>{product.point.toLocaleString()}</span>
                    </li>
                    <li>
                        <span className={styles.infoTitle}>구매 후기</span>
                        <span className={styles.starRating}>
                            <StarRating value={product.starRating} />{" "}
                            {product.starRatingCount.toLocaleString()}
                        </span>
                    </li>
                    <li>
                        <span className={styles.infoTitle}>좋아요</span>
                        <span className={styles.like}>
                            ♥{product.likeCount.toLocaleString()}
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default ProductDetailInfo;
