import { Meta, Story } from '@storybook/react/types-6-0'
import { Input, InputProps } from '.'

export default {
  title: 'Form/Input',
  component: Input,
  args: {
    label: 'E-mail',
    name: 'email',
    placeholder: 'john.cage@gmail.com',
    disabled: false
  }
} as Meta

export const Default: Story<InputProps> = args => <Input {...args} />

export const withError: Story<InputProps> = args => <Input {...args} />

withError.args = {
  error: 'Something went wrong'
}
