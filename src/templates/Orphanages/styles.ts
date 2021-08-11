import styled, { css } from 'styled-components'
import { FiPlus, FiArrowLeft } from 'react-icons/fi'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;

    .create-orphanage {
      z-index: ${theme.layers.alwaysOnTop};
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
        background-color: ${theme.colors['blue-hover']};
      }
    }
  `}
`

export const ContentSidebar = styled.aside`
  ${({ theme }) => css`
    width: 35rem;
    background: ${theme.colors.blue};
    padding: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    header {
      img {
        width: 7rem;
      }

      .title {
        font-size: ${theme.font.sizes.xxlarge};
        font-weight: ${theme.font.bold};
        line-height: 2.5rem;
        margin-top: 4rem;
      }

      p {
        line-height: 2.5rem;
        margin-top: 1.5rem;
      }
    }

    footer {
      display: flex;
      flex-direction: column;
      line-height: 1.5rem;

      strong {
        margin-top: 1rem;
        font-weight: ${theme.font.bold};
      }

      span {
        margin-bottom: 2rem;
      }
    }

    .back-to-menu {
      width: 4rem;
      height: 4rem;

      background: ${theme.colors.yellow};
      border-radius: 1.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${theme.colors['blue-hover']};
      }
    }
  `}
`

export const ArrowBack = styled(FiArrowLeft)`
  width: 2.5rem;
  height: 2.5rem;
  color: white;
`

export const PlusIcon = styled(FiPlus)`
  width: 2.5rem;
  height: 2.5rem;
  color: white;
`
