import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'
import type { LeafletMouseEvent } from 'leaflet'
import { useRouter } from 'next/router'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { createOrphanageValidation, FieldErrors } from 'utils/validations'
import { api } from 'services/api'

import { Button } from 'components/Button'
import { Content } from 'components/Content'
import { Input } from 'components/Input'
import { Loading } from 'components/Loading'

import { container } from 'animations/variants'
import * as S from './styles'

export function CreateOrphanageTemplate() {
  const { push } = useRouter()

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

  const [values, setValues] = useState({
    name: '',
    about: '',
    instructions: '',
    openingHours: ''
  })

  const [openOnWeekends, setOpenOnWeekends] = useState(false)
  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const [images, setImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])

  const handleInput = useCallback((field: string, value: string) => {
    setValues(state => ({ ...state, [field]: value }))
  }, [])

  // Next.js image loader to preview images
  const myLoader = ({ src }) => {
    return src
  }

  const handleSelectImages = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) {
        return
      }

      const selectedImages = Array.from(event.target.files)

      setImages(selectedImages)

      const selectedImagesPreview = selectedImages.map(image => {
        return URL.createObjectURL(image)
      })

      setPreviewImages(selectedImagesPreview)
    },
    []
  )

  const removeFromPreview = (index: number) => {
    const imagePreview = previewImages.splice(index, 1)

    return imagePreview
  }

  const handleSelectOnMap = useCallback((event: LeafletMouseEvent) => {
    const { lng: longitude, lat: latitude } = event.latlng

    setPosition({
      latitude,
      longitude
    })
  }, [])

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault()

      const { latitude, longitude } = position
      const { name, about, openingHours, instructions } = values

      const inputValues = {
        name,
        about,
        latitude,
        longitude,
        openingHours,
        instructions,
        openOnWeekends,
        images
      }

      const errors = createOrphanageValidation(inputValues)

      if (Object.keys(errors).length) {
        setFieldError(errors)
        return
      }

      setFieldError({})

      const data = new FormData()

      data.append('name', name)
      data.append('latitude', String(latitude))
      data.append('longitude', String(longitude))
      data.append('about', about)
      data.append('instructions', instructions)
      data.append('opening_hours', openingHours)
      data.append('open_on_weekends', String(openOnWeekends))

      images.forEach(image => {
        data.append('images', image)
      })

      await api.post('/orphanages', data)

      push('/success')
    },
    [images, openOnWeekends, position, push, values]
  )

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
    <Content>
      <S.Form
        initial="hidden"
        animate="visible"
        variants={container}
        onSubmit={handleSubmit}
      >
        <S.Register>
          <legend>Dados</legend>
          <Map
            showSmallMap
            initialLatitude={position.latitude}
            initialLongitude={position.longitude}
            handleSelectOnMap={handleSelectOnMap}
            height={280}
            position={{
              latitude: position.latitude,
              longitude: position.longitude
            }}
          />

          <Input
            label="Nome"
            name="name"
            onInputChange={value => handleInput('name', value)}
            error={fieldError?.name}
          />

          <Input
            as="textarea"
            label="Sobre"
            name="about"
            onInputChange={value => handleInput('about', value)}
            error={fieldError?.about}
          />

          <label htmlFor="images">Fotos</label>

          <S.ImageContainer>
            {previewImages.map((image, index) => {
              return (
                <div key={index} className="image-wrapper">
                  <Image
                    loader={myLoader}
                    width={96}
                    height={96}
                    src={image}
                    alt="Imagem do orfanato"
                    objectFit="cover"
                  />

                  <button
                    className="remove-select"
                    onClick={() => removeFromPreview(index)}
                  >
                    <S.ExcludeIcon />
                  </button>
                </div>
              )
            })}

            <label htmlFor="images" className="new-image">
              <S.PlusIcon />
            </label>
            <input
              id="images"
              multiple
              type="file"
              onChange={handleSelectImages}
            />
          </S.ImageContainer>
        </S.Register>

        <S.Visit>
          <legend>Visitação</legend>

          <Input
            as="textarea"
            label="Instruções"
            name="instructions"
            onInputChange={value => handleInput('instructions', value)}
            error={fieldError?.instructions}
          />

          <Input
            label="Horário de funcionamento"
            name="openingHours"
            onInputChange={value => handleInput('openingHours', value)}
            error={fieldError?.openingHours}
          />

          <label htmlFor="open-on-weekends">
            Funciona nos finais de semana?
          </label>
          <S.ButtonSelect>
            <button
              type="button"
              className={openOnWeekends ? 'open' : ''}
              onClick={() => setOpenOnWeekends(true)}
            >
              Sim
            </button>
            <button
              type="button"
              className={!openOnWeekends ? 'not-open' : ''}
              onClick={() => setOpenOnWeekends(false)}
            >
              Não
            </button>
          </S.ButtonSelect>

          <Button scale={1.2} type="submit">
            Confirmar
          </Button>
        </S.Visit>
      </S.Form>
    </Content>
  )
}
