import { render, screen } from 'utils/tests/test-utils'
import userEvent from '@testing-library/user-event'
import { Sidebar } from '.'

describe('<Sidebar />', () => {
  it('should render with logo', () => {
    render(<Sidebar />)

    expect(
      screen.getByRole('img', {
        name: /logo/i
      })
    )
  })

  it('should render with a button', () => {
    render(<Sidebar />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should go to the previous page', () => {
    render(<Sidebar />)

    const button = screen.getByRole('button')

    userEvent.click(button)

    expect(button).toHaveBeenCalledWith(1)
  })
})
