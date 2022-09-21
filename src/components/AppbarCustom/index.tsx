import { ReactNode } from 'react'
import { Stack, AppBar, Toolbar, AppBarProps } from '@mui/material'

type AppBarCustomProps = {
  children: ReactNode
} & AppBarProps

export function AppBarCustom({ children, ...args }: AppBarCustomProps) {
  return (
    <Stack padding={10}>
      <AppBar position="fixed" elevation={4} {...args}>
        <Toolbar>{children}</Toolbar>
      </AppBar>
    </Stack>
  )
}
