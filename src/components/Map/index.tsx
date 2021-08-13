import { LeafletMouseEvent } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import Link from 'next/link'
import {
  MapContainer,
  TileLayer,
  MapContainerProps,
  useMapEvents,
  Marker,
  Popup
} from 'react-leaflet'
import { mapIcon } from 'utils/map-icon'

import * as S from './styles'

type PositionProps = {
  longitude: number
  latitude: number
}

type OrphanageProps = {
  id: number
  name: string
  latitude: number
  longitude: number
}

export type MapProps = {
  initialLatitude: number
  initialLongitude: number
  height?: string | number
  showSmallMap?: boolean
  isGoogleMaps?: boolean
  position?: PositionProps
  orphanages?: OrphanageProps[]
  handleSelectOnMap?: (event: LeafletMouseEvent) => void
} & MapContainerProps

export default function Map({
  initialLatitude,
  initialLongitude,
  height,
  handleSelectOnMap,
  showSmallMap,
  isGoogleMaps = false,
  position,
  orphanages,
  ...rest
}: MapProps) {
  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
  function ClickComponent() {
    useMapEvents({
      click: event => handleSelectOnMap(event)
    })

    return null
  }

  return (
    <S.Container showSmallMap={showSmallMap}>
      <MapContainer
        center={[initialLatitude, initialLongitude]}
        zoom={15}
        zoomControl={false}
        style={{ width: '100%', height: `${height ?? '100%'}` }}
        {...rest}
      >
        <TileLayer
          url={
            MAPBOX_TOKEN
              ? `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_ACCESS_MAPBOX_TOKEN}`
              : 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
          }
        />

        {!!position && position.latitude !== 0 && (
          <Marker
            interactive={false}
            icon={mapIcon}
            position={[position.latitude, position.longitude]}
          />
        )}

        {!!handleSelectOnMap && <ClickComponent />}

        {orphanages &&
          orphanages.map(orphanage => {
            return (
              <Marker
                key={orphanage.id}
                icon={mapIcon}
                position={[orphanage.latitude, orphanage.longitude]}
              >
                <Popup closeButton={false} minWidth={248} className="map-popup">
                  {orphanage.name}
                  <Link href={`/orphanages/${orphanage.id}`}>
                    <a>
                      <S.ArrowRight />
                    </a>
                  </Link>
                </Popup>
              </Marker>
            )
          })}
      </MapContainer>

      {showSmallMap && (
        <footer className="map-helper">
          {isGoogleMaps ? (
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${initialLatitude},${initialLongitude}`}
              target="__blank"
              rel="noopener noreferrer"
              className="text"
            >
              Ver rotas no Google Maps
            </a>
          ) : (
            <p className="text">Clique no mapa para adicionar a localização</p>
          )}
        </footer>
      )}
    </S.Container>
  )
}
