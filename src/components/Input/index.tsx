import { ChangeEvent, InputHTMLAttributes, useCallback, useState } from 'react'
import * as S from './styles'

export type InputProps = {
  onInputChange?: (value: string) => void
  label?: string
  error?: string
  initialValue?: string
  disabled?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export function Input({
  label,
  name,
  error,
  onInputChange,
  initialValue = '',
  disabled = false,
  ...rest
}: InputProps) {
  const [value, setValue] = useState(initialValue)

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.currentTarget.value
      setValue(newValue)

      !!onInputChange && onInputChange(newValue)
    },
    [onInputChange]
  )

  return (
    <>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.Input
        type="text"
        disabled={disabled}
        name={name}
        value={value}
        onChange={onChange}
        {...(label ? { id: name } : {})}
        {...rest}
      />
      {!!error && <S.Error>{error}</S.Error>}
    </>
  )
}
