import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
    onClick: () => {
      alert('onClick button')
    }
  },
}

export const Secondary: Story = {
  args: {
    label: 'Button',
    onClick: () => {
      alert('onClick button')
    }
  },
}

export const Disabled: Story = {
  args: {
    primary: true,
    label: 'Button',
    disabled: true
  },
}