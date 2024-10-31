import React from 'react'

export type ButtonProps = {
  primary: boolean
  label: string
  onClick?: () => void
  disabled?: boolean
}

export const Button = ({
  primary = false,
  label,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type="button"
      style={{ background: primary ? 'red' : 'white' }}
      {...props}
    >
      {label}
    </button>
  )
}
