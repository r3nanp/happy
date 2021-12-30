import { useState, useEffect, useCallback } from 'react'
import toast from 'react-hot-toast'

import { PositionProps } from 'types/Map'
import { INITIAL_LATITUDE, INITIAL_LONGITUDE } from 'constants/initial-position'

type LatLng = {
  latitude: number
  longitude: number
}

export const useGeolocation = () => {
  const [position, setPosition] = useState<PositionProps>({
    latitude: INITIAL_LATITUDE,
    longitude: INITIAL_LONGITUDE
  })
  const [loaded, setLoaded] = useState(false)

  const handleChangePosition = useCallback(
    ({ longitude, latitude }: LatLng) => {
      setLoaded(true)

      setPosition({
        longitude,
        latitude
      })
    },
    []
  )

  const onError = useCallback((error: GeolocationPositionError) => {
    setLoaded(true)

    toast.error(error.message)
  }, [])

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      setLoaded(true)
      toast.error('Geolocation is not supported.')
    }

    navigator.geolocation.getCurrentPosition(
      position => handleChangePosition(position.coords),
      error => onError(error)
    )
  }, [onError, handleChangePosition])

  return {
    position,
    loaded,
    handleChangePosition
  }
}
