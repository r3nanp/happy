import { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

import { Content } from 'components/Content'
import { Loading } from 'components/Loading'
import * as S from './styles'

type Image = {
  id: string
  url: string
}

export type OrphanageProps = {
  name: string
  latitude: number
  longitude: number
  about: string
  instructions: string
  openingHours: string
  openOnWeekends: boolean
  images: Image[]
}

export function OrphanageTemplate(props: OrphanageProps) {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    openingHours,
    openOnWeekends,
    images
  } = props

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
    <Content isOrphanagePage={true}>
      <S.Banner>
        <Image
          src={images[activeImageIndex].url}
          alt={name}
          width={300}
          height={300}
          objectFit="cover"
          className="banner"
        />
      </S.Banner>

      <S.ImagesContainer>
        {images.map((image, index) => {
          return (
            <S.ButtonSelect
              key={image.id}
              onClick={() => setActiveImageIndex(index)}
              isActiveIndex={activeImageIndex === index}
            >
              <Image
                src={image.url}
                alt={name}
                width={88}
                height={88}
                className="image-select"
              />
            </S.ButtonSelect>
          )
        })}
      </S.ImagesContainer>

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
            {openingHours}
          </S.OpeningHours>

          {openOnWeekends ? (
            <S.OpenOnWeekends openOnWeekends>
              <S.InfoIcon />
              Atendemos <br />
              fim de semana
            </S.OpenOnWeekends>
          ) : (
            <S.OpenOnWeekends openOnWeekends={false}>
              <S.InfoIcon className="not-open" />
              Não atendemos <br />
              fim de semana
            </S.OpenOnWeekends>
          )}
        </S.OpeningDetails>
      </S.Details>
    </Content>
  )
}
