import styled from 'styled-components'
import { FaArrowRight } from 'react-icons/fa'

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.gradient};
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));

  .image-wrapper {
    width: 20rem;
    height: 10rem;
  }
`

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 1rem;

  background: url('/img/children.svg') no-repeat center 80%;

  .arrow {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 5rem;
    height: 5rem;
    background: ${({ theme }) => theme.colors.yellow};
    border-radius: 25%;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: opacity ${({ theme }) => theme.transition.default};

    &:hover {
      opacity: 0.7;
    }
  }
`

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h1 {
    font-size: ${({ theme }) => theme.font.sizes.xxlarge};
    font-weight: ${({ theme }) => theme.font.bold};
    line-height: 5rem;
  }

  p {
    margin-top: 2.5rem;
    line-height: 1.5rem;
  }
`

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  line-height: 2rem;
  display: flex;
  flex-direction: column;
  text-align: right;

  > strong {
    font-weight: ${({ theme }) => theme.font.bold};
  }
`

export const ArrowIcon = styled(FaArrowRight)`
  width: 2rem;
  height: 2rem;

  color: white;
`
