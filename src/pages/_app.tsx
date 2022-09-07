import {GlobalStyle, MainContainer} from "../styles";
import Head from "next/head";
import * as React from "react";
import {Footer} from "../components/Footer";

import { AppProps /*, AppContext */ } from 'next/app';
import MainMenu from "../components/MainMenu/MainMenu";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>

            <Head>
                <link rel="icon" type="image/png" href="/logo.png" />

            </Head>
        <GlobalStyle />
            <MainContainer id={"main"}>
                <MainMenu />
                <Component {...pageProps} />

                <Footer />

            </MainContainer>


        </>
)
}

export default MyApp

