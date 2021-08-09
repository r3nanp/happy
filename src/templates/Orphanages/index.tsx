import { useEffect, useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

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
  const Map = useMemo(
    () =>
      dynamic(() => import('components/Map'), {
        ssr: false,
        // eslint-disable-next-line react/display-name
        loading: () => <Loading />
      }),
    []
  )

  const [position, setPosition] = useState({
    latitude: -3.7305253,
    longitude: -38.5311193
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords

        setPosition({
          latitude,
          longitude
        })
      },
      error => console.error(error)
    )
  }, [])

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

      <Link href="/orphanage/create-orphanage">
        <a className="create-orphanage">
          <S.PlusIcon />
        </a>
      </Link>
    </S.Container>
  )
}
