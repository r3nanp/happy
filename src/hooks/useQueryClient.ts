import { useState } from 'react'
import { QueryClient } from 'react-query'

export const useQueryClient = () => {
  const [queryClient] = useState(() => new QueryClient())

  return queryClient
}
