import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children: ReactNode
  isSuccessPage?: boolean
  disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children,
  type,
  isSuccessPage = false,
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <S.Button
      isSuccessPage={isSuccessPage}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </S.Button>
  )
}
