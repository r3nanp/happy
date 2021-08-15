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
      </Head>

      <DefaultSeo {...SEO} />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
