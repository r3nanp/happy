import { darken } from 'polished'
import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;

    background: ${darken(0.2, theme.colors.blue)};
  `}
`

export const Content = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    width: 60%;
  }
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.bold};
    line-height: 2rem;
    margin-bottom: 2rem;
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    line-height: 2rem;
    margin-top: 1rem;
  `}
`
