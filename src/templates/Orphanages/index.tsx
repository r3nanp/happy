import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

export function OrphanagesTemplate() {
  const Map = dynamic(() => import('components/Map'), {
    ssr: false
  })

  return (
    <S.Container>
      <S.ContentSidebar>
        <header>
          <Image
            src="/img/marker.svg"
            alt="Happy Logo"
            width={400}
            height={400}
          />

          <h2 className="title">Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita :)</p>
        </header>

        <footer>
          <strong>Fortaleza</strong>
          <span>Ceará</span>

          <Link href="/">
            <a className="back-to-menu">
              <S.ArrowBack />
            </a>
          </Link>
        </footer>
      </S.ContentSidebar>

      <Map initialLatitude={-3.7305253} initialLongitude={-38.5311193} />

      <Link href="/orphanage/create">
        <a className="create-orphanage">
          <S.PlusIcon />
        </a>
      </Link>
    </S.Container>
  )
}
