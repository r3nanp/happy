import { render, screen, waitFor } from 'utils/tests/test-utils'
import userEvent from '@testing-library/user-event'
import { Input } from '.'

describe('<Input />', () => {
  it('Should be able to render a input component with label', () => {
    render(<Input label="Label" name="Label" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('Should be able to render without label', () => {
    render(<Input />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('Should be able to render with a placeholder', () => {
    render(<Input placeholder="testing" />)

    expect(screen.getByPlaceholderText('testing')).toBeInTheDocument()
  })

  it('Changes its value when typing', async () => {
    const onInputChange = jest.fn()
    render(<Input onInputChange={onInputChange} label="Input" name="Input" />)

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInputChange).toHaveBeenCalledTimes(text.length)
    })
    expect(onInputChange).toHaveBeenCalledWith(text)
  })

  it('Does not changes its value when disabled', async () => {
    const onInputChange = jest.fn()
    render(
      <Input
        onInputChange={onInputChange}
        label="Input"
        name="Input"
        disabled
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInputChange).not.toHaveBeenCalled()
  })

  it('Should render as a textarea', () => {
    render(<Input as="textarea" />)
    const input = screen.getByRole('textbox')

    expect(input).toHaveStyle({
      resize: 'vertical',
      padding: '1rem',
      'min-height': '7.5rem'
    })
  })

  it('Renders with error', () => {
    const { container } = render(<Input label="Error" error="Error message" />)

    expect(screen.getByText('Error message')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Is accessible by tab', () => {
    render(<Input label="Input" name="Input" />)

    const input = screen.getByLabelText('Input')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('Is not accessible by tab when disabled', () => {
    render(<Input label="Input" name="Input" disabled />)

    const input = screen.getByLabelText('Input')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })
})
