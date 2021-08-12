import Router from 'next/router'
import Image from 'next/image'
import { Button } from 'components/Button'
import * as S from './styles'

export type ActionProps = {
  isExcludePage: boolean
  orphanageName?: string
}

export function ActionTemplate({
  isExcludePage = false,
  orphanageName
}: ActionProps) {
  function goToHome() {
    Router.push('/orphanages')
  }

  return (
    <S.Container isExcludePage={isExcludePage}>
      <S.Content>
        {isExcludePage ? (
          <>
            <h1>Excluir!</h1>
            <p>Você tem certeza que quer excluir {orphanageName}?</p>
          </>
        ) : (
          <>
            <h1>Ebaaaa!</h1>
            <p>O cadastro deu certo e foi enviado.</p>
            <Button type="button" isSuccessPage={true} onClick={goToHome}>
              Voltar para home
            </Button>
          </>
        )}
      </S.Content>
      <S.ImageWrapper>
        <Image
          src={
            isExcludePage ? '/img/exclude-child.svg' : '/img/success-child.svg'
          }
          alt="Ilustração de uma criança"
          width={400}
          height={400}
        />
      </S.ImageWrapper>
    </S.Container>
  )
}
