import { ReactNode } from 'react'
import { Stack, AppBar, Toolbar } from '@mui/material'

type AppBarCustomProps = {
  children: ReactNode
}

export function AppBarCustom({ children }: AppBarCustomProps) {
  return (
    <Stack padding={10}>
      <AppBar position="fixed" elevation={4}>
        <Toolbar>{children}</Toolbar>
      </AppBar>
    </Stack>
  )
}
