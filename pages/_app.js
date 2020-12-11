import '../styles/globals.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <div>
    <Head>
    <link rel="shortcut icon" href="./android-chrome-512x512.png" />
    <script src="https://use.fontawesome.com/fd44fba7ee.js"></script>
    <title>neWWWs</title>
    </Head>
    <Component {...pageProps} />
    </div>
}

export default MyApp
