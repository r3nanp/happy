import styled, { css, DefaultTheme } from 'styled-components'
import { FiClock, FiInfo } from 'react-icons/fi'
import { OrphanageProps } from '.'

type ModifierProps = Pick<OrphanageProps, 'open_on_weekends'>

type ActiveProps = {
  isActiveIndex?: boolean
}

const modifier = {
  isNotOpenOnWeekend: (theme: DefaultTheme) => css`
    background: linear-gradient(154.16deg, #fdf0f5 7.85%, #ffffff 91.03%);
    color: ${theme.colors.red};
    border: 1px solid #ffbcd4;
  `,
  isActiveIndex: () => css`
    opacity: 1;
  `
}

export const Banner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  .banner {
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }
`

export const ImagesContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  margin: 2.5rem 2.5rem 0;
`

export const ButtonSelect = styled.button<ActiveProps>`
  ${({ isActiveIndex }) => css`
    border: 0;
    height: 5.5rem;
    background: none;
    cursor: pointer;
    border-radius: 1.5rem;
    overflow: hidden;
    outline: none;
    opacity: 0.6;

    ${isActiveIndex && modifier.isActiveIndex};

    .image-select {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `}
`

export const Details = styled.div`
  ${({ theme }) => css`
    padding: 5rem;

    h1 {
      color: ${theme.colors.base};
      font-size: ${theme.font.sizes.xxlarge};
      line-height: 3.5rem;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
    }

    h2 {
      color: ${theme.colors.base};
      font-size: ${theme.font.sizes.xlarge};
      line-height: 3.5rem;
      margin-bottom: 0.5rem;
    }

    p {
      line-height: 1.8rem;
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.base};
      margin-top: 2rem;
      margin-bottom: 2rem;
    }

    hr {
      width: 100%;
      height: 1px;
      border: 0;
      background: #d3e2e6;
      margin: 4rem 0;
    }
  `}
`

export const OpeningDetails = styled.div`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  div {
    padding: 2rem 1.5rem;
    border-radius: 1.5rem;
    line-height: 1.8rem;

    svg {
      display: block;
      margin-bottom: 1.5rem;
    }
  }
`

export const OpeningHours = styled.div`
  ${({ theme }) => css`
    background: linear-gradient(149.97deg, #e6f7fb 8.13%, #ffffff 92.67%);
    border: 1px solid #b3dae2;
    color: ${theme.colors.base};
  `}
`

export const OpenOnWeekends = styled.div<ModifierProps>`
  ${({ theme, open_on_weekends }) => css`
    background: linear-gradient(154.16deg, #edfff6 7.85%, #ffffff 91.03%);
    border: 1px solid #a1e9c5;
    color: ${theme.colors.green};

    ${!open_on_weekends && modifier.isNotOpenOnWeekend(theme)};
  `}
`

export const ClockIcon = styled(FiClock)`
  ${({ theme }) => css`
    size: 32;
    color: ${theme.colors.blue};
  `}
`

export const InfoIcon = styled(FiInfo)`
  ${({ theme }) => css`
    size: 32;
    color: ${theme.colors.green};

    .not-open {
      color: ${theme.colors.red};
    }
  `}
`
