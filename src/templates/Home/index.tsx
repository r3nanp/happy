import Link from 'next/link'
import Image from 'next/image'
import * as S from './styles'

export function HomeTemplate() {
  return (
    <S.Container>
      <S.ImageWrapper>
        <Image src="/img/logo-full.svg" alt="Logo" width={500} height={500} />
      </S.ImageWrapper>

      <S.Location>
        <strong>Fortaleza</strong>
        <span>Ceará</span>
      </S.Location>

      <Link href="/map">
        <a>
          <S.ArrowIcon />
        </a>
      </Link>
    </S.Container>
  )
}
