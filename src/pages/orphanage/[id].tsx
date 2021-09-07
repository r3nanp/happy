import { GetStaticPaths, GetStaticProps } from 'next'
import { api } from 'services/api'
import { OrphanageTemplate } from 'templates/Orphanage'

type Image = {
  id: string
  url: string
}

type Orphanage = {
  id: string
  name: string
  latitude: number
  longitude: number
  about: string
  instructions: string
  openingHours: string
  openOnWeekends: boolean
  images: Image[]
}

type OrphanageProps = {
  orphanage: Orphanage
}

export default function Orphanage({ orphanage }: OrphanageProps) {
  return <OrphanageTemplate {...orphanage} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get<Orphanage[]>('/orphanages')

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

  const { data } = await api.get(`/orphanages/${id}`)

  const orphanage: Orphanage = {
    id: data.id,
    name: data.name,
    latitude: data.latitude,
    longitude: data.longitude,
    about: data.about,
    instructions: data.instructions,
    openingHours: data.opening_hours,
    openOnWeekends: data.open_on_weekends,
    images: data.images
  }

  return {
    props: {
      orphanage
    },
    revalidate: 60 * 60 * 24 * 3
  }
}
