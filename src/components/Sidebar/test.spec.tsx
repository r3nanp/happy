import { render, screen } from 'utils/tests/test-utils'
import { Sidebar } from '.'

describe('<Sidebar />', () => {
  it('Should render with logo', () => {
    render(<Sidebar />)

    expect(
      screen.getByRole('img', {
        name: /logo/i
      })
    )
  })

  it('Should render with a button', () => {
    render(<Sidebar />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
