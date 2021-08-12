import { Meta, Story } from '@storybook/react/types-6-0'
import { Input, InputProps } from '.'

export default {
  title: 'Form/Input',
  component: Input,
  args: {
    label: 'E-mail',
    name: 'Email',
    initialValue: '',
    disabled: false
  },
  argTypes: {
    onInput: { action: 'changed' }
  }
} as Meta

export const Default: Story<InputProps> = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <Input {...args} />
  </div>
)

export const withError: Story<InputProps> = args => <Input {...args} />

withError.args = {
  error: 'Something went wrong'
}
