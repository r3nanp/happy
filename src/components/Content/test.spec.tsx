import { render, screen } from 'utils/tests/test-utils'
import { Content } from '.'

describe('<Content />', () => {
  it('Should render properly', () => {
    render(<Content>Content</Content>)

    expect(screen.getByText('Content')).toBeInTheDocument()
  })
})
