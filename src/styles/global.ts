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
  ${({ theme, removeBg }) => css`
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

      ${!removeBg &&
      css`
        background-color: ${theme.colors.white};
      `}
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
