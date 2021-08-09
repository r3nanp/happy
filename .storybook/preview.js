import '../.jest/next-image.mock.js'

import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/styles/theme'
import { GlobalStyle } from '../src/styles/global'

export const parameters = {
  backgrounds: {
    default: 'happy-light',
    values: [
      {
        name: 'happy-light',
        value: theme.colors.white
      },
      {
        name: 'happy-dark',
        value: theme.colors.black
      }
    ] // Add background options
  }
}

addDecorator(withNextRouter)

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyle removeBg />
      <Story />
    </ThemeProvider>
  )
]
