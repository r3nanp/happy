import { GetStaticProps } from 'next'
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
  return {
    props: {
      orphanages: [
        {
          id: 1,
          name: 'Reasnkdsand',
          latitude: -3.7305253,
          longitude: -38.5311193
        }
      ]
    }
  }
}
