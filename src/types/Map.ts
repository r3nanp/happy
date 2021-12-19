export type PositionProps = {
  longitude: number
  latitude: number
}

export type OrphanageProps = {
  id: number
  name: string
} & PositionProps
