import styled from 'styled-components'
import { FiArrowRight } from 'react-icons/fi'
import landingImg from '../../images/landing.svg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--primary);

  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 15px;
  padding-bottom: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Wrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  background: url(${landingImg}) no-repeat 80% center;

  > a {
    position: absolute;
    right: 0;
    bottom: 0;

    width: 80px;
    height: 80px;

    background: var(--yellow);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;

    &:hover {
      background: #96feff;
    }
  }

  > main {
    max-width: 350px;

    > h1 {
      font-size: 76px;
      font-weight: 900;
      line-height: 70px;
    }

    > p {
      margin-top: 40px;
      font-size: 24px;
      line-height: 34px;
    }
  }

  @media (max-width: 768px) {
    background: none;

    align-items: center;
    > a {
      position: inherit;
      flex-direction: column;
    }
  }
`

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;
  text-align: right;

  > strong {
    font-weight: 800px;
  }

  @media (max-width: 768px) {
    position: inherit;
    text-align: center;
  }
`
export const ArrowIcon = styled(FiArrowRight)`
  size: 26;
  color: rgba(0, 0, 0, 0.6);
`
