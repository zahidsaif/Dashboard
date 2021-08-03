import '../styles/globals.css'
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
            <link
                rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                crossOrigin="anonymous"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Lato&family=Noto+Sans+JP&family=Raleway:wght@400;700&display=swap" rel="stylesheet"/>
            <script
                src = "https://code.jquery.com/jquery-3.6.0.min.js"
                integrity = "sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                crossOrigin = "anonymous">
            </script>
            <script
                src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"
                integrity = "sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4"
                crossOrigin = "anonymous">
            </script>
            <script
                src = "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"
                integrity = "sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF"
                crossOrigin = "anonymous">
            </script>
        </Head>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
