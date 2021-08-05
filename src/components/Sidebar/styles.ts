import styled, { css } from 'styled-components'
import { FaArrowLeft } from 'react-icons/fa'

export const Container = styled.aside`
  ${({ theme }) => css`
    width: 7rem;
    height: 100%;
    background: ${theme.colors.blue};
  `}
`

export const ArrowBack = styled(FaArrowLeft)`
  width: 3rem;
  height: 3rem;
  color: white;
`
