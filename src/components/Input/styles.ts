import styled, { css } from 'styled-components'
import { InputProps } from '.'

type ModifierProps = Pick<InputProps, 'disabled' | 'as'> & { error?: boolean }

const modifier = {
  isTextarea: () => css`
    min-height: 7.5rem;
    max-height: 15rem;
    resize: vertical;
    padding: 1rem;
    line-height: 1.8rem;
  `
}

export const Label = styled.label`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.text};
    font-weight: ${theme.font.bold};
    margin-bottom: 0.5rem;
    line-height: 1.5rem;
  `}
`

export const Input = styled.input<ModifierProps>`
  ${({ theme, error, disabled, as }) => css`
    width: 100%;
    background: ${theme.colors.input};
    border: 1px solid #d3e2e5;
    border-radius: 1.5rem;
    outline: none;

    height: 4rem;
    padding: 0 1rem;

    margin-bottom: 1rem;

    border-color: ${error ? theme.colors.red : theme.colors.border};
    color: ${error ? theme.colors.red : theme.colors.base};
    cursor: ${disabled ? 'not-allowed' : 'normal'};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.bg};
    }

    ${as === 'textarea' && modifier.isTextarea()}
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
    margin-bottom: 1.5rem;
  `}
`
