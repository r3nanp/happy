import { render, screen } from 'utils/tests/test-utils'
import { Button } from '.'

describe('<Button />', () => {
  it('Should be able to render a button', () => {
    const { container } = render(<Button>Button</Button>)

    expect(screen.getByRole('button', { name: /button/i })).toHaveStyle({
      height: '4rem',
      'border-radius': '1.5rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should render a button in the success page', () => {
    render(<Button isSuccessPage={true}>Button</Button>)

    expect(screen.getByText('Button')).toHaveStyleRule(
      'background-color',
      '#31b272'
    )
  })

  it('Should render a disabled Button', () => {
    render(<Button disabled>Button</Button>)

    expect(screen.getByRole('button', { name: /button/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })
})
