import Link from "next/link";
import Image from "next/image";

import styles from "./Product.module.css";
import StarRating from "./StarRating";

const Product = ({ product }) => {
    return (
        <li>
            <Link className={styles.product} href={`/items/${product.id}`}>
                <div className={styles.image}>
                    <Image src={product.imgUrl} alt={product.name} sizes="100%" fill />
                </div>
                <div className={styles.content}>
                    <div>
                        <span className={styles.name}>{product.name}</span>
                        <div className={styles.prices}>
                            <span className={styles.originalPrice}>
                                {product.price.toLocaleString()}원
                            </span>
                            {product.salePrice.toLocaleString()}원
                        </div>
                    </div>
                    <hr className={styles.divider} />
                    <div>
                        <div className={styles.starRating}>
                            <StarRating value={product.starRating} />
                            {product.starRatingCount.toLocaleString()}
                        </div>
                        <div className={styles.likeCount}>
                            ♥{product.likeCount.toLocaleString()}
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default Product;
