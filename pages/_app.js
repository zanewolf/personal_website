import '../styles/globals.css'
import Layout from "../components/Layout";
import Head from "next/head";
import {ParallaxProvider} from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  return (
      <>
          <Head>
              <title>{Component.title}</title>
              {Component.keywords &&
                  <meta className="keywords" content={Component.keywords}/>
              }

          </Head>

          <ParallaxProvider>
            <Layout>
                  <Component {...pageProps} />
            </Layout>
        </ParallaxProvider>
      </>
  )
}

export default MyApp
