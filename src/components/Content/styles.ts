import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.bg};
  `}
`

export const Wrapper = styled.div`
  flex: 1;
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 44rem;
    margin: 4rem auto;
    background: ${theme.colors.white};
    border: 1px solid #d3e2e5;
    border-radius: 1.5rem;
    padding: 4rem 5rem;
    overflow: hidden;
  `}
`
