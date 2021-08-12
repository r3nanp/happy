import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'
import { ActionProps } from '.'

type ModifierProps = Pick<ActionProps, 'isExcludePage'>

const modifier = {
  isExcludePage: (theme: DefaultTheme) => css`
    background: ${darken(0.2, theme.colors.red)};
  `
}

export const Container = styled.main<ModifierProps>`
  ${({ theme, isExcludePage }) => css`
    width: 100vw;
    height: 100vh;

    display: grid;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);
    color: ${theme.colors.white};
    background: ${darken(0.2, theme.colors.green)};

    ${isExcludePage && modifier.isExcludePage(theme)}
  `}
`

export const Content = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: ${theme.font.sizes.huge};
      font-weight: ${theme.font.bold};
      line-height: 1.5rem;
      margin-bottom: 2rem;
    }

    p {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`

export const ImageWrapper = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
