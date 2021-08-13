import { ReactNode } from 'react'
import { Sidebar } from 'components/Sidebar'
import * as S from './styles'

type ContentProps = {
  children: ReactNode
}

export function Content({ children }: ContentProps) {
  return (
    <S.Container>
      <Sidebar />
      <S.Wrapper>
        <S.Content>{children}</S.Content>
      </S.Wrapper>
    </S.Container>
  )
}
