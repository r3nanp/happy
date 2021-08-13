import { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

import { Content } from 'components/Content'
import { Loading } from 'components/Loading'
import * as S from './styles'

type Image = {
  id: string
  path: string
}

export type OrphanageProps = {
  name: string
  latitude: number
  longitude: number
  about: string
  instructions: string
  opening_hours: string
  open_on_weekends: boolean
  images: Image[]
}

export function OrphanageTemplate({
  name,
  about,
  latitude,
  longitude,
  opening_hours,
  open_on_weekends,
  images,
  instructions
}: OrphanageProps) {
  const Map = useMemo(
    () =>
      dynamic(() => import('components/Map'), {
        ssr: false,
        // eslint-disable-next-line react/display-name
        loading: () => <Loading />
      }),
    []
  )

  const [activeImageIndex, setActiveImageIndex] = useState(0)

  return (
    <Content>
      <Image
        src={images[activeImageIndex].path}
        alt={name}
        width={400}
        height={400}
      />

      <S.ImagesContainer></S.ImagesContainer>

      <S.Details>
        <h1>{name}</h1>
        <p>{about}</p>

        <Map
          initialLatitude={latitude}
          initialLongitude={longitude}
          height={280}
          dragging={false}
          touchZoom={false}
          zoomControl={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          showSmallMap={true}
          isGoogleMaps={true}
          position={{
            latitude,
            longitude
          }}
        />

        <hr />

        <h2>Instruções para visita</h2>
        <p>{instructions}</p>

        <S.OpeningDetails>
          <S.OpeningHours>
            <S.ClockIcon />
            Segunda à Sexta <br />
            {opening_hours}
          </S.OpeningHours>

          {open_on_weekends ? (
            <S.OpenOnWeekends open_on_weekends>
              <S.InfoIcon />
              Atendemos <br />
              fim de semana
            </S.OpenOnWeekends>
          ) : (
            <S.OpenOnWeekends open_on_weekends={false}>
              <S.ClockIcon className="not-open" />
              Não atendemos <br />
              fim de semana
            </S.OpenOnWeekends>
          )}
        </S.OpeningDetails>
      </S.Details>
    </Content>
  )
}
