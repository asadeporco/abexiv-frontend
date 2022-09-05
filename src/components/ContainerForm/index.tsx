import { ReactNode } from 'react'
import { Stack, Box, BoxProps, Container } from '@mui/material'

type ContainerFormProps = {
  children?: ReactNode
  spacing?: number
} & BoxProps

export function ContainerForm({
  children,
  spacing,
  ...props
}: ContainerFormProps) {
  return (
    <Container maxWidth="sm">
      <Box component="form" autoComplete="off" {...props}>
        <Stack spacing={spacing}>{children}</Stack>
      </Box>
    </Container>
  )
}
