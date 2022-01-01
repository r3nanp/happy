import { ButtonHTMLAttributes, ReactNode } from 'react'
import { MotionProps } from 'framer-motion'

import { Spinner } from 'components'
import * as S from './styles'

type Button = MotionProps & ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children: ReactNode
  isLoading?: boolean
  isSuccessPage?: boolean
  disabled?: boolean
  scale?: number
} & Button

export function Button({
  children,
  type,
  isLoading = false,
  isSuccessPage = false,
  disabled = false,
  scale = 1,
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
      {isLoading ? <Spinner /> : children}
    </S.Button>
  )
}
