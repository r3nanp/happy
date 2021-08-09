import styled, { css, DefaultTheme } from 'styled-components'

export const Container = styled.main`
  display: flex;
`

export const Wrapper = styled.div`
  flex: 1;
`

export const Form = styled.form`
  ${({ theme }) => css`
    width: 44rem;
    margin: 4rem auto;
    background: ${theme.colors.white};
    border: 1px solid #d3e2e5;
    border-radius: 1.5rem;
    padding: 4rem 5rem;
    overflow: hidden;
  `}
`

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
  `
}

export const Register = styled.fieldset`
  ${({ theme }) => css`
    border: 0;

    legend {
      ${modifier.legend(theme)}
    }
  `}
`

export const Visit = styled.fieldset`
  ${({ theme }) => css`
    margin-top: 4rem;
    border: 0;

    legend {
      ${modifier.legend(theme)}
    }

    .open-on-weekends {
      display: flex;
      color: ${theme.colors.text};
      font-weight: ${theme.font.bold};
      margin-bottom: 1rem;
      line-height: 1.5rem;
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
