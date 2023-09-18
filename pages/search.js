import Head from "next/head";

import axios from "@/api/axios";
import styles from "@/styles/Search.module.css";
//components
import SearchForm from "@/components/SearchForm";
import ProductList from "@/components/ProductList";

//왜 정적 생성이 아닌 서버 사이드 렌더링?
//검색어는 매번 바뀌기 때문에 정적 생성으로 미리 만들어 놓을 수 없기 때문
export const getServerSideProps = async (context) => {
    const q = context.query["q"];
    const res = await axios.get(`/products/?q=${q}`);
    const products = res.data.results;
    return {
        props: {
            q,
            products,
        },
    };
};
const Search = ({ q, products }) => {
    // const [products, setProducts] = useState([]);
    // const router = useRouter();
    // const { q } = router.query;

    // const getProducts = async (query) => {
    //     const res = await axios.get(`/products/?q=${query}`);
    //     const newProducts = res.data.results;
    //     setProducts(newProducts);
    // };

    // useEffect(() => {
    //     getProducts(q);
    // }, [q]);

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
