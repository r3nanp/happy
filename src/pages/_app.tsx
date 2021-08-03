import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Head from 'next/head'
import { GlobalStyle } from 'styles/global'
import { theme } from 'styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Happy</title>
        <link rel="shortcut icon" href="/img/logo.svg" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Leve felicidade para o mundo!" />
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
