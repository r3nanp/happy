import styled, { css } from 'styled-components'
import { FaArrowRight } from 'react-icons/fa'

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.gradient};
  display: grid;
  grid-template-columns: 1fr 1fr 20rem;
  padding: 7rem;

  @media screen and (max-width: 768px) {
    padding: 2rem;

    grid-template-columns: 1fr;
    place-items: center;
  }
`

export const Children = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Content = styled.section`
  ${({ theme }) => css`
    max-width: 35rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    .image-wrapper {
      width: 25rem;
    }

    h1 {
      font-size: ${theme.font.sizes.huge};
      font-weight: ${theme.font.bold};
      line-height: 5rem;
    }

    p {
      letter-spacing: 0.075rem;
      margin-top: 2.5rem;
      line-height: 1.5rem;
    }

    @media screen and (max-width: 768px) {
      .image-wrapper {
        width: 20rem;
      }

      h1 {
        font-size: ${theme.font.sizes.xxlarge};
        line-height: 2.5rem;
      }

      p {
        font-size: ${theme.font.sizes.large};
      }
    }
  `}
`

export const Wrapper = styled.div`
  position: relative;

  .arrow {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 5rem;
    height: 5rem;
    background: ${({ theme }) => theme.colors.yellow};
    border-radius: 35%;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color ${({ theme }) => theme.transition.default};

    &:hover {
      background-color: #96feff;
    }
  }
`

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  line-height: 2rem;
  display: flex;
  flex-direction: column;
  text-align: right;

  > strong {
    font-weight: ${({ theme }) => theme.font.bold};
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ArrowIcon = styled(FaArrowRight)`
  width: 2rem;
  height: 2rem;
  color: rgba(0, 0, 0, 0.6);
`
