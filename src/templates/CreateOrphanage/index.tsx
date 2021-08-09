import { FormEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { LeafletMouseEvent } from 'leaflet'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import { createOrphanageValidation, FieldErrors } from 'utils/validations'

import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { Sidebar } from 'components/Sidebar'
import { TextField } from 'components/TextField'
import { Loading } from 'components/Loading'

import * as S from './styles'

export function CreateOrphanageTemplate() {
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

  const [openOnWeekends, setOpenOnWeekends] = useState(true)
  const [fieldError, setFieldError] = useState<FieldErrors>({})

  // const [images, setImages] = useState<File[]>([])
  // const [previewImages, setPreviewImages] = useState<string[]>([])

  const handleInput = (field: string, value: string) => {
    setValues(state => ({ ...state, [field]: value }))
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
        openOnWeekends
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
      data.append('openingHours', openingHours)
      data.append('openOnWeekends', String(openOnWeekends))

      Router.push('/orphanages')
    },
    [openOnWeekends, position, values]
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
    <S.Container>
      <Sidebar />

      <S.Wrapper>
        <S.Form onSubmit={handleSubmit}>
          <S.Register>
            <legend>Dados</legend>
            <Map
              height={280}
              initialLatitude={position.latitude}
              initialLongitude={position.longitude}
              handleSelectOnMap={handleSelectOnMap}
              mapOnForm={true}
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

            <TextField
              label="Sobre"
              name="about"
              onInputChange={value => handleInput('about', value)}
              error={fieldError?.about}
            />
          </S.Register>

          <S.Visit>
            <legend>Visitação</legend>

            <TextField
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

            <label className="open-on-weekends" htmlFor="open-on-weekends">
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

            <Button type="submit">Confirmar</Button>
          </S.Visit>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  )
}
