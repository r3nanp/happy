import { useMemo } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { useGeolocation } from 'hooks/useGeolocation'
import { Loading } from 'components/Loading'
import * as S from './styles'

type Orphanages = {
  id: number
  name: string
  latitude: number
  longitude: number
}

type OrphanageProps = {
  orphanages: Orphanages[]
}

export function OrphanagesTemplate({ orphanages }: OrphanageProps) {
  const { position } = useGeolocation()

  const Map = useMemo(
    () =>
      dynamic(() => import('components/Map'), {
        ssr: false,
        // eslint-disable-next-line react/display-name
        loading: () => <Loading />
      }),
    []
  )

  return (
    <S.Container>
      <S.ContentSidebar>
        <header>
          <Image
            src="/img/marker.svg"
            alt="Happy Logo"
            width={400}
            height={400}
          />

          <h2 className="title">Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita :)</p>
        </header>

        <footer>
          <strong>Fortaleza</strong>
          <span>Ceará</span>

          <Link href="/">
            <a className="back-to-menu">
              <S.ArrowBack />
            </a>
          </Link>
        </footer>
      </S.ContentSidebar>

      <Map
        initialLatitude={position.latitude}
        initialLongitude={position.longitude}
        orphanages={orphanages}
      />

      <Link href="/orphanage/create-orphanage" passHref>
        <motion.a whileHover={{ scale: 1.2 }} className="create-orphanage">
          <S.PlusIcon />
        </motion.a>
      </Link>
    </S.Container>
  )
}
