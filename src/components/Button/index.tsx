import { ButtonHTMLAttributes, ReactNode } from 'react'
import { MotionProps } from 'framer-motion'
import * as S from './styles'

type Button = MotionProps & ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children: ReactNode
  isSuccessPage?: boolean
  disabled?: boolean
  scale?: number
} & Button

export function Button({
  children,
  type,
  isSuccessPage = false,
  disabled = false,
  scale = 0,
  ...props
}: ButtonProps) {
  return (
    <S.Button
      isSuccessPage={isSuccessPage}
      disabled={disabled}
      type={type}
      whileHover={{ scale }}
      {...props}
    >
      {children}
    </S.Button>
  )
}
