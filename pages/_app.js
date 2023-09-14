import "@/styles/global.css";
import { ThemeProvider } from "@/context/ThemeContext";

import Header from "@/components/Layout/Header";
import Container from "@/components/Layout/Container";

const App = ({ Component, pageProps }) => {
    return (
        <ThemeProvider>
            <Header />
            <Container>
                <Component {...pageProps} />
            </Container>
        </ThemeProvider>
    );
};

export default App;
