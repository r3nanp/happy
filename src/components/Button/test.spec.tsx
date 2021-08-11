import { render, screen } from 'utils/tests/test-utils'
import { Button } from '.'

describe('<Button />', () => {
  it('Should be able to render a button', () => {
    render(<Button>Button</Button>)

    expect(screen.getByText('Button')).toBeInTheDocument()
  })
})
