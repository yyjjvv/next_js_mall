import "@/styles/global.css";

import Header from "@/components/Layout/Header";
import Container from "@/components/Layout/Container";

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Header />
            <Container>
                <Component {...pageProps} />
            </Container>
        </>
    );
};

export default App;
