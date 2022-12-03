import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme";
import { RecoilRoot } from "recoil";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <RecoilRoot>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width"
          />
          <meta property="og:title" content="AccountBook" />
          <meta
            property="og:description"
            content="React study group accountBook"
          />
          <meta property="og:image" content="/meta.png" />
          <link rel="icon" href="/favicon.ico" />
          <title>🥸 AccountBook Admin</title>
        </Head>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
};

export default MyApp;
