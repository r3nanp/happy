import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Wrapper, Location, ArrowIcon } from './styles'

import logoImg from '../../images/logo.svg'

const Landing: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <img src={logoImg} alt="Logo"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>Fortaleza</strong>
          <span>Ceará</span>
        </Location>

        <Link to="/app">
          <ArrowIcon />
        </Link>
      </Wrapper>
    </Container>

  )
}

export default Landing
