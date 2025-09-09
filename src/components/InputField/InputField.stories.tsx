import type { Meta, StoryObj } from '@storybook/react';
import InputField from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    value: {
      control: 'text',
    },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Your Name',
    placeholder: 'Enter your name',
    helperText: 'This is a helper text.',
    variant: 'outlined',
    size: 'md',
  },
};

export const Invalid: Story = {
  args: {
    ...Default.args,
    value: '',
    invalid: true,
    errorMessage: 'This field is required.',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    value: 'Disabled input',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
    value: 'Loading...',
  },
};

export const Variants: Story = {
  render: (args) => (
    <div className="space-y-4">
      <InputField {...args} label="Filled" variant="filled" placeholder="Filled input" />
      <InputField {...args} label="Outlined" variant="outlined" placeholder="Outlined input" />
      <InputField {...args} label="Ghost" variant="ghost" placeholder="Ghost input" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="space-y-4">
      <InputField {...args} label="Small" size="sm" placeholder="Small input" />
      <InputField {...args} label="Medium" size="md" placeholder="Medium input" />
      <InputField {...args} label="Large" size="lg" placeholder="Large input" />
    </div>
  ),
};
