import {
  ChangeEvent,
  TextareaHTMLAttributes,
  useCallback,
  useState
} from 'react'
import * as S from './styles'

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  label?: string
  error?: string
  initialValue?: string
  maxLength?: number
  disabled?: boolean
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export function TextField({
  onInputChange,
  error,
  disabled = false,
  maxLength = 300,
  initialValue = '',
  name,
  label,
  ...rest
}: TextFieldProps) {
  const [value, setValue] = useState(initialValue)

  const onChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = event.currentTarget.value
      setValue(newValue)

      !!onInputChange && onInputChange(newValue)
    },
    [onInputChange]
  )

  return (
    <>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.Textarea
        disabled={disabled}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        {...(label ? { id: name } : {})}
        {...rest}
      />
      {!!error && <S.Error>{error}</S.Error>}
    </>
  )
}
