import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'components/Button'

import * as S from './styles'

export function FourOhFourTemplate() {
  return (
    <S.Container>
      <Image
        src="/img/exclude-child.svg"
        alt="Ilustração de uma criança"
        width={380}
        height={285}
      />

      <S.Content>
        <S.Title>Ops...</S.Title>
        <S.Description>
          Esta página não existe. <br /> Volte para a home e procure os
          orfanatos próximos de você
        </S.Description>
        <Link href="/orphanages" passHref>
          <Button>Voltar para home</Button>
        </Link>
      </S.Content>
    </S.Container>
  )
}
