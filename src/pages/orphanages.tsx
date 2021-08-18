import { GetStaticProps } from 'next'
import { api } from 'services/api'
import { OrphanagesTemplate } from 'templates/Orphanages'

type Orphanage = {
  id: number
  name: string
  latitude: number
  longitude: number
}

type OrphanagesProps = {
  orphanages: Orphanage[]
}

export default function Orphanages({ orphanages }: OrphanagesProps) {
  return <OrphanagesTemplate orphanages={orphanages} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/orphanages')

  return {
    props: {
      orphanages: data
    }
  }
}
