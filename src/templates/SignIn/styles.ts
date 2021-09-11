import styled, { css } from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ImageWrapper = styled.section`
  ${({ theme }) => css`
    background: ${theme.gradient};

    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`

export const FormWrapper = styled.section`
  ${({ theme }) => css`
    width: 40%;
    height: 100%;

    border-left: 2px solid ${theme.colors.black};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`

export const Form = styled.form``

export const Login = styled.fieldset`
  ${({ theme }) => css`
    border: 0;

    > legend {
      width: 100%;
      font-size: ${theme.font.sizes.xxlarge};
      line-height: 2.2rem;
      color: ${theme.colors.base};
      font-weight: ${theme.font.bold};
      border-bottom: 1px solid #d3e2e5;
      margin-bottom: 2.5rem;
      padding-bottom: 1.5rem;
    }
  `}
`
