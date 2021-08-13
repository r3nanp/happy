import styled, { css, DefaultTheme } from 'styled-components'
import { FiPlus } from 'react-icons/fi'

const modifier = {
  legend: (theme: DefaultTheme) => css`
    width: 100%;
    font-size: 2rem;
    line-height: 2.2rem;
    color: ${theme.colors.base};
    font-weight: ${theme.font.bold};
    border-bottom: 1px solid #d3e2e5;
    margin-bottom: 2.5rem;
    padding-bottom: 1.5rem;
  `,
  label: (theme: DefaultTheme) => css`
    display: flex;
    color: ${theme.colors.text};
    font-weight: ${theme.font.bold};
    margin-bottom: 1rem;
    line-height: 1.5rem;
  `
}

export const Form = styled.form`
  ${({ theme }) => css`
    label {
      ${modifier.label(theme)}
    }

    input[type='file'] {
      visibility: hidden;
    }

    .new-image {
      width: 100%;
      height: 6rem;
      background: ${theme.colors.input};
      border: 1px dashed #96d2f0;
      border-radius: 1.5rem;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}
`

export const Register = styled.fieldset`
  ${({ theme }) => css`
    border: 0;

    legend {
      ${modifier.legend(theme)}
    }
  `}
`

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;

  .image-wrapper {
    width: 100%;
    height: 7rem;
    img {
      object-fit: cover;
      border-radius: 1.5rem;
    }
  }
`

export const Visit = styled.fieldset`
  ${({ theme }) => css`
    margin-top: 4rem;
    border: 0;

    legend {
      ${modifier.legend(theme)}
    }
  `}
`

export const ButtonSelect = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    button {
      height: 4rem;
      background: ${theme.colors.input};
      border: 1px solid #d3e2e5;
      color: ${theme.colors.base};
    }

    .open {
      background: ${theme.colors['green-low']};
      color: ${theme.colors.green};
    }

    .not-open {
      background: ${theme.colors['red-low']};
      color: ${theme.colors.red};
    }

    button:first-child {
      border-radius: 1.2rem 0px 0px 1.2rem;
    }

    button:last-child {
      border-radius: 0 1.2rem 1.2rem 0;
      border-left: 0;
    }
  `}
`

export const PlusIcon = styled(FiPlus)`
  size: 24;
  color: #15b6d6;
`
