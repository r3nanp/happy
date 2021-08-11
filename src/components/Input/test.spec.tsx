import { render, screen } from 'utils/tests/test-utils'
import { Input } from '.'

describe('<Input />', () => {
  it('Should be able to render a input component with label', () => {
    render(<Input label="Name" name="Label" />)

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
  })
})
