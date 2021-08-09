import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children: ReactNode
  disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, type, disabled = false }: ButtonProps) {
  return (
    <S.Button disabled={disabled} type={type}>
      {children}
    </S.Button>
  )
}
