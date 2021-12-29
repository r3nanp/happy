import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

//* CUSTOM IMPORTS
import { Toaster } from 'react-hot-toast'
import { theme } from 'styles/theme'
import { GlobalStyle } from 'styles/global'
import nextSeoConfig from '../../next-seo.config'

type AppProviderProps = {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Happy</title>
      </Head>

      <DefaultSeo {...nextSeoConfig} />
      <GlobalStyle />

      <Toaster />

      <div id="provider">{children}</div>
    </ThemeProvider>
  )
}
