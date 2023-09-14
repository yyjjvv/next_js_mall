import Link from "next/link";

import styles from "./ProductList.module.css";
//components
import Product from "./Product";

const ProductList = ({ className = "", products }) => {
    return (
        <ul className={`${styles.productList} ${className}`}>
            {products?.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </ul>
    );
};

export default ProductList;
