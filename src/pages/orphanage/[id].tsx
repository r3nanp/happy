import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { dehydrate, QueryClient } from 'react-query'
import { OrphanageTemplate } from 'templates/Orphanage'
import {
  getOrphanage,
  useOrphanage
} from 'features/orphanages/apis/getOrphanage'

export default function Orphanage() {
  const router = useRouter()

  const orphanageId = router.query.id as string

  const { data } = useOrphanage({
    orphanageId
  })

  return <OrphanageTemplate {...data} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.id as string

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['orphanage', id], () =>
    getOrphanage({ orphanageId: id })
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
