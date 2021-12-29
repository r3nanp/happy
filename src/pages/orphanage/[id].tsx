import { GetStaticPaths, GetStaticProps } from 'next'
import { api } from 'services/api'
import { OrphanageData } from 'types/Orphanage'
import { OrphanageTemplate } from 'templates/Orphanage'

type OrphanageProps = {
  orphanage: OrphanageData
}

export default function Orphanage({ orphanage }: OrphanageProps) {
  return <OrphanageTemplate {...orphanage} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get<OrphanageData[]>('/orphanages')

  const paths = data.map(path => {
    return {
      params: {
        id: path.id
      }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params

  const { data } = await api.get<OrphanageData>(`/orphanages/${id}`)

  return {
    props: {
      orphanage: data
    },
    revalidate: 60 * 60 * 24 * 3 // 3 days
  }
}
