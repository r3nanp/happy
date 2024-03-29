import { useRouter } from 'next/router'
import Image from 'next/image'
import * as S from './styles'

export function Sidebar() {
  const { back } = useRouter()

  return (
    <S.Container>
      <S.ImageWrapper>
        <Image src="/img/logo.svg" alt="Logo" width={400} height={400} />
      </S.ImageWrapper>

      <S.GoBack>
        <button onClick={() => back()}>
          <S.ArrowBack />
        </button>
      </S.GoBack>
    </S.Container>
  )
}
