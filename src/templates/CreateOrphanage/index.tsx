import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { api } from 'services/api'
import type { LeafletMouseEvent } from 'leaflet'

import { useGeolocation } from 'hooks/useGeolocation'
import { createOrphanageValidation, FieldErrors } from 'utils/validations'
import { Button, Content, Input, Loading } from 'components'
import { container } from 'constants/animations'
import * as S from './styles'

export function CreateOrphanageTemplate() {
  const { push } = useRouter()
  const { position, handleChangePosition } = useGeolocation()

  const Map = useMemo(
    () =>
      dynamic(() => import('components/Map'), {
        ssr: false,
        // eslint-disable-next-line react/display-name
        loading: () => <Loading />
      }),
    []
  )

  const [values, setValues] = useState({
    name: '',
    about: '',
    instructions: '',
    openingHours: ''
  })

  const [openOnWeekends, setOpenOnWeekends] = useState(false)
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [isLoading, setIsLoading] = useState(false)

  const [images, setImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])

  const handleInput = useCallback((field: string, value: string) => {
    setValues(state => ({ ...state, [field]: value }))
  }, [])

  // Next.js image loader to preview images
  const myLoader = ({ src }: { src: string }) => {
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

  const removeFromPreview = useCallback(
    (index: number) => {
      const imageDeleted = previewImages.filter((_, i) => i !== index)

      setPreviewImages(imageDeleted)
    },
    [previewImages]
  )

  const handleSelectOnMap = useCallback(
    (event: LeafletMouseEvent) => {
      const { lng: longitude, lat: latitude } = event.latlng

      handleChangePosition({
        latitude,
        longitude
      })
    },
    [handleChangePosition]
  )

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault()
      setIsLoading(true)

      try {
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

        toast.promise(api.post('/orphanages', data), {
          loading: 'Salvando...',
          success: <p>Dados do orfanato enviados!</p>,
          error: <p>Dados não foram enviados.</p>
        })
        setIsLoading(false)
        await api.post('/orphanages', data)

        push('/success')
      } catch (e) {
        toast.error(e.message)
        throw new Error(e)
      }
    },
    [images, openOnWeekends, position, push, values]
  )

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
            initialLatitude={position.latitude}
            initialLongitude={position.longitude}
            handleSelectOnMap={handleSelectOnMap}
            showSmallMap={true}
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
                    type="button"
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

          <Button scale={1.2} type="submit" isLoading={isLoading}>
            Confirmar
          </Button>
        </S.Visit>
      </S.Form>
    </Content>
  )
}
