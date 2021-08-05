import Link from 'next/link'
import Image from 'next/image'
import * as S from './styles'

export function Sidebar() {
  return (
    <S.Container>
      <div className="image-wrapper">
        <Image src="/img/logo.svg" alt="Logo" layout="fill" />
      </div>

      <div className="go-back">
        <Link href="/">
          <a>
            <S.ArrowBack />
          </a>
        </Link>
      </div>
    </S.Container>
  )
}
