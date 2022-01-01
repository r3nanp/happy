import { useQuery } from 'react-query'
import { api } from 'services/api'
import { QueryConfig } from 'utils/query-client'
import { OrphanageData } from '../types/OrphanageData'

export const getAllOrphanages = async (): Promise<OrphanageData[]> => {
  const { data } = await api.get('/orphanages')

  return data
}

type UseOrphanagesOptions = {
  config?: QueryConfig<typeof getAllOrphanages>
}

export const useOrphanages = ({ config }: UseOrphanagesOptions = {}) => {
  return useQuery({
    ...config,
    queryKey: ['orphanages'],
    queryFn: () => getAllOrphanages()
  })
}
