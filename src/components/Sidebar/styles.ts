import styled, { css } from 'styled-components'
import { FaArrowLeft } from 'react-icons/fa'

export const Container = styled.aside`
  ${({ theme }) => css`
    position: fixed;

    padding: 3rem 2rem;
    width: 7rem;
    height: 100%;
    background: ${theme.colors['blue-hover']};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `}
`

export const ImageWrapper = styled.div`
  width: 5rem;
`

export const GoBack = styled.div`
  ${({ theme }) => css`
    button {
      width: 5rem;
      height: 5rem;
      border-radius: 35%;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: ${theme.colors.button};
      transition: background-color ${theme.transition.fast};

      &:hover {
        background: #17d6eb;
      }
    }
  `}
`

export const ArrowBack = styled(FaArrowLeft)`
  width: 3rem;
  height: 3rem;
  color: white;
`
