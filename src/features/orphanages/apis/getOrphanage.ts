import { useQuery } from 'react-query'

import { api } from 'services/api'
import { QueryConfig } from 'utils/query-client'
import { CreateOrphanageData } from '../types/OrphanageData'

export const getOrphanage = async ({
  orphanageId
}: {
  orphanageId: string
}): Promise<CreateOrphanageData> => {
  const { data } = await api.get(`/orphanages/${orphanageId}`)

  return data
}

type UseOrphanageOptions = {
  orphanageId: string
  config?: QueryConfig<typeof getOrphanage>
}

export const useOrphanage = ({ config, orphanageId }: UseOrphanageOptions) => {
  return useQuery({
    ...config,
    queryKey: ['orphanage', orphanageId],
    queryFn: () =>
      getOrphanage({
        orphanageId
      })
  })
}
