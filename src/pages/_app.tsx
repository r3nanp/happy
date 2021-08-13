import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

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

      <DefaultSeo {...SEO} />

      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
