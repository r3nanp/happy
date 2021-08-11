import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

const customRender = (UI: ReactElement, { ...rest }: RenderOptions = {}) =>
  render(<ThemeProvider theme={theme}>{UI}</ThemeProvider>, rest)

export * from '@testing-library/react'
export { customRender as render }
