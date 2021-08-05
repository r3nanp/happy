import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

export const GlobalStyle: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    button {
      cursor: pointer;
      border: none;
    }

    html,
    body {
      color: ${theme.colors.white};
      background: ${theme.colors.bg};
    }

    body,
    input,
    button,
    textarea {
      font-family: ${theme.font.family};
      font-weight: ${theme.font.normal};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`
