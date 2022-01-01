import { AppProps } from 'next/app'
import { Hydrate, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { AppProvider } from 'providers/AppProvider'
import { useQueryClient } from 'hooks/useQueryClient'

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = useQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />}
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
