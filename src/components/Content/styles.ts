import styled, { css } from 'styled-components'
import { ContentProps } from '.'

type ModifierProps = Pick<ContentProps, 'isOrphanagePage'>

const modifier = {
  container: () => css`
    min-height: 100vh;
  `,
  removePadding: () => css`
    padding: 0;
  `
}

export const Container = styled.main<ModifierProps>`
  ${({ theme, isOrphanagePage }) => css`
    display: flex;
    background: ${theme.colors.bg};

    ${isOrphanagePage && modifier.container};
  `}
`

export const Wrapper = styled.section`
  flex: 1;
`

export const Content = styled.div<ModifierProps>`
  ${({ theme, isOrphanagePage }) => css`
    width: 44rem;
    margin: 4rem auto;
    background: ${theme.colors.white};
    border: 1px solid #d3e2e5;
    border-radius: 1.5rem;
    padding: 4rem 5rem;
    overflow: hidden;

    ${isOrphanagePage && modifier.removePadding};
  `}
`
