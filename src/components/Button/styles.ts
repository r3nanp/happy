import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type ModifierProps = Pick<ButtonProps, 'disabled' | 'isSuccessPage'>

export const modifier = {
  disabled: () => css`
    cursor: not-allowed;
    filter: brightness(0.9);
  `,
  isSucessPage: (theme: DefaultTheme) => css`
    background-color: #31b272;
    transition: background-color ${theme.transition.default};

    &:hover {
      background-color: #3bd689;
    }
  `
}

export const Button = styled.button<ModifierProps>`
  ${({ theme, disabled, isSuccessPage }) => css`
    margin-top: 4rem;
    width: 100%;
    height: 4rem;
    border: 0;
    background: ${theme.colors.green};
    border-radius: 1.5rem;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color ${theme.transition.fast};

    ${isSuccessPage && modifier.isSucessPage(theme)}

    &:disabled {
      ${disabled && modifier.disabled()}
    }

    &:not(:disabled):hover {
      background: ${theme.colors['green-hover']};
    }
  `}
`
