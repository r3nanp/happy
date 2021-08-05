import dynamic from 'next/dynamic'
import { Sidebar } from 'components/Sidebar'

export function OrphanageTemplate() {
  const Map = dynamic(() => import('components/Map'), {
    ssr: false
  })

  return (
    <>
      <Sidebar />
      <Map />
    </>
  )
}
