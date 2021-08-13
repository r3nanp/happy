import { FiArrowRight } from 'react-icons/fi'
import styled, { css } from 'styled-components'
import { MapProps } from '.'

type ModifierProps = Pick<MapProps, 'showSmallMap'>

const containerModifier = {
  showSmallMap: () => css`
    width: 100%;
    height: 18rem;
    margin-bottom: 1.5rem;
  `,
  container: () => css`
    border-radius: 1.5rem;
  `
}

export const Container = styled.div<ModifierProps>`
  ${({ theme, showSmallMap }) => css`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;

    ${showSmallMap && containerModifier.showSmallMap}

    .leaflet-container {
      ${showSmallMap && containerModifier.container}
    }

    .map-helper {
      position: absolute;
      bottom: 0;
      z-index: ${theme.layers.alwaysOnTop};
      width: 100%;
      padding: 1rem;
      border-radius: 0 0 1.5rem 1.5rem;
      text-align: center;
      background: ${theme.colors.input};

      .text {
        font-size: ${theme.font.sizes.small};
        font-weight: ${theme.font.bold};
        color: #0089a5;
        line-height: 1.5rem;
      }
    }

    .map-popup .leaflet-popup-content-wrapper {
      background: rgba(255, 255, 255, 0.8);
      border-radius: 1.2rem;
      box-shadow: none;
    }
    .map-popup .leaflet-popup-content {
      color: #0089a5;
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.bold};
      margin: 0.5rem 0.8rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .map-popup .leaflet-popup-content a {
      width: 2.5rem;
      height: 2.5rem;
      background: ${theme.colors['blue-hover']};
      box-shadow: ${theme.shadows};
      border-radius: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .map-popup .leaflet-popup-tip-container {
      display: none;
    }
  `}
`
export const ArrowRight = styled(FiArrowRight)`
  width: 3rem;
  height: 3rem;
  color: white;
`
