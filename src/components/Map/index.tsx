import 'leaflet/dist/leaflet.css'
import { LeafletMouseEvent } from 'leaflet'
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
import { OrphanageProps, PositionProps } from 'types/Map'
import { MAPBOX_TOKEN, MAP_STYLE_ID } from 'constants/mapbox'
import * as S from './styles'

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

export default function MapComponent({
  initialLatitude,
  initialLongitude,
  position,
  orphanages,
  height = '100%',
  showSmallMap = false,
  isGoogleMaps = false,
  handleSelectOnMap,
  ...rest
}: MapProps) {
  const MapClick = () => {
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
        style={{ width: '100%', height }}
        {...rest}
      >
        <TileLayer
          url={
            MAPBOX_TOKEN
              ? `https://api.mapbox.com/styles/v1/mapbox/${MAP_STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_TOKEN}`
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

        {!!handleSelectOnMap && <MapClick />}

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
                  <Link href={`/orphanage/${orphanage.id}`}>
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
