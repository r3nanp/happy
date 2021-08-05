import 'leaflet/dist/leaflet.css'
import { ReactNode } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import Link from 'next/link'

import * as S from './styles'

type MapProps = { children: ReactNode }

export default function Map() {
  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

  return (
    <S.Container>
      <MapContainer
        center={[-3.7305253, -38.5311193]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={
            MAPBOX_TOKEN
              ? `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_ACCESS_MAPBOX_TOKEN}`
              : 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
          }
        />

        <Link href="/orphanage/create">
          <a className="create-orphanage">
            <S.PlusIcon />
          </a>
        </Link>
      </MapContainer>
    </S.Container>
  )
}
