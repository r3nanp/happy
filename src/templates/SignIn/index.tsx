import { FormEvent, useCallback, useState } from 'react'
import Image from 'next/image'

import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { FieldErrors, loginValidation } from 'utils/validations'

import * as S from './styles'

const INITIAL_STATE = {
  email: '',
  password: ''
}

export function SignInTemplate() {
  const [values, setValues] = useState(INITIAL_STATE)

  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const handleInput = useCallback((field: string, value: string) => {
    setValues(state => ({ ...state, [field]: value }))
  }, [])

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault()

      const errors = loginValidation(values)

      if (Object.keys(errors).length) {
        setFieldError(errors)
        return
      }

      setFieldError({})
    },
    [values]
  )

  return (
    <S.Container>
      <S.ImageWrapper>
        <Image
          src="/img/logo-full.svg"
          alt="Happy logo"
          width={500}
          height={500}
        />
      </S.ImageWrapper>

      <S.FormWrapper>
        <S.Form onSubmit={handleSubmit}>
          <S.Login>
            <legend>Acesse o dashboard</legend>
            <Input
              label="Email"
              name="email"
              onInputChange={value => handleInput('email', value)}
              error={fieldError?.name}
            />

            <Input
              label="Senha"
              name="password"
              onInputChange={value => handleInput('password', value)}
              error={fieldError?.name}
            />

            <Button scale={1.1} type="submit">
              Entrar
            </Button>
          </S.Login>
        </S.Form>
      </S.FormWrapper>
    </S.Container>
  )
}
