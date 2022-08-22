import React from 'react'
import { AppBar, AppBarProps, Toolbar, Container } from '@mui/material'

import { style } from './style'

type NavbarProps = {
  children?: React.ReactNode
} & AppBarProps

export function Navbar({ children }: NavbarProps) {
  return (
    <AppBar color={'primary'} sx={style.appBar}>
      <Container>
        <Toolbar>{children}</Toolbar>
      </Container>
    </AppBar>
  )
}
