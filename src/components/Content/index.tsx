import { ReactNode } from 'react'
import { Sidebar } from 'components/Sidebar'
import * as S from './styles'

export type ContentProps = {
  children: ReactNode
  isOrphanagePage?: boolean
}

export function Content({ children, isOrphanagePage = false }: ContentProps) {
  return (
    <S.Container isOrphanagePage={isOrphanagePage}>
      <Sidebar />
      <S.Wrapper>
        <S.Content isOrphanagePage={isOrphanagePage}>{children}</S.Content>
      </S.Wrapper>
    </S.Container>
  )
}
