import styled, { css } from 'styled-components'
import { FiPlus } from 'react-icons/fi'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;

    .create-orphanage {
      z-index: 1000;
      position: absolute;
      right: 40px;
      bottom: 40px;

      width: 5rem;
      height: 5rem;

      border-radius: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${theme.colors.blue};
      transition: filter ${theme.transition.default};

      &:hover {
        filter: brightness(0.6);
      }
    }
  `}
`

export const PlusIcon = styled(FiPlus)`
  width: 2.5rem;
  height: 2.5rem;
  color: white;
`
