import { render, screen } from 'utils/tests/test-utils'
import { Content } from '.'

describe('<Content />', () => {
  it('should render properly', () => {
    render(<Content>Content</Content>)

    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('should render when is a orphanage page', () => {
    const { container } = render(<Content isOrphanagePage>content</Content>)

    expect(container.firstChild).toHaveStyle({
      'min-height': '100vh'
    })
  })
})
