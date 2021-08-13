import { GetStaticPaths, GetStaticProps } from 'next'
import { api } from 'services/api'
import { OrphanageTemplate } from 'templates/Orphanage'

type Image = {
  id: string
  path: string
}

type Orphanage = {
  id: string
  name: string
  latitude: number
  longitude: number
  about: string
  instructions: string
  opening_hours: string
  open_on_weekends: boolean
  images: Image[]
}

export default function Orphanage(props: Orphanage) {
  return <OrphanageTemplate {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get<Orphanage[]>('/orphanages')

  const paths = data.map(orphanage => {
    return {
      params: {
        id: orphanage.id
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

  const { data } = await api.get(`/orphanage/${id}`)

  const orphanage = {
    id: data.id,
    name: data.name,
    latitude: data.latitude,
    longitude: data.longitude,
    about: data.about,
    instructions: data.instructions,
    opening_hours: data.minutes.padStart(2, '0').split(''),
    open_on_weekends: data.open_on_weekends,
    images: data.images
  }

  return {
    props: {
      orphanage
    },
    revalidate: 60 * 60 * 24 * 3
  }
}
