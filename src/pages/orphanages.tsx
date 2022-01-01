import { GetStaticProps } from 'next'
import {
  getAllOrphanages,
  useOrphanages
} from 'features/orphanages/apis/getAllOrphanages'
import { OrphanagesTemplate } from 'templates/Orphanages'
import { dehydrate, QueryClient } from 'react-query'

export default function Orphanages() {
  const { data } = useOrphanages()

  return <OrphanagesTemplate orphanages={data} />
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['orphanages', 10], getAllOrphanages, {
    staleTime: 1000 * 5 // 5 seconds
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
