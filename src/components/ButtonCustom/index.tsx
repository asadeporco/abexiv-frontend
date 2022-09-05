import { ReactNode } from 'react'
import { Button, ButtonProps } from '@mui/material'

type ButtonCustomProps = {
  children: ReactNode
} & ButtonProps

export function ButtonCustom({ children, ...props }: ButtonCustomProps) {
  return (
    <Button variant={props.variant ?? 'contained'} {...props}>
      {children}
    </Button>
  )
}
