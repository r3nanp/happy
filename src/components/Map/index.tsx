import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'

import * as S from './styles'

export type MapProps = {
  initialLatitude: number
  initialLongitude: number
}

export default function Map({ initialLatitude, initialLongitude }: MapProps) {
  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

  return (
    <S.Container>
      <MapContainer
        center={[initialLatitude, initialLongitude]}
        zoom={15}
        zoomControl={false}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={
            MAPBOX_TOKEN
              ? `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_ACCESS_MAPBOX_TOKEN}`
              : 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
          }
        />
      </MapContainer>
    </S.Container>
  )
}
