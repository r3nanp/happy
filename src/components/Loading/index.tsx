import { Lottie } from '@crello/react-lottie'
import styled from 'styled-components'
import animation from 'animations/loading.json'

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export function Loading() {
  return (
    <Wrapper>
      <Lottie
        width="50%"
        height="50%"
        className="lottie-container basic"
        config={{
          animationData: animation,
          loop: true,
          autoplay: true
        }}
      />
    </Wrapper>
  )
}
