import '../styles/globals.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <div>
    <Head>
    <link rel="shortcut icon" href="./android-chrome-512x512.png" />
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400&display=swap" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"></link>
    <script src="https://use.fontawesome.com/fd44fba7ee.js"></script>
    <title>neWWWs</title>
    </Head>
    <Component {...pageProps} />
    </div>
}

export default MyApp
