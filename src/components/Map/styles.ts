import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;

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
