export type PositionProps = {
  longitude: number
  latitude: number
}

export type OrphanageProps = {
  id: string
  name: string
} & PositionProps
