import { ReactNode } from 'react'
import { Container, Stack, StackProps } from '@mui/material'

type BoxQuestionProps = {
  children: ReactNode
} & StackProps

export function BoxQuestion({ children, ...props }: BoxQuestionProps) {
  return (
    <Stack
      textAlign="start"
      paddingY={4}
      paddingX={3}
      borderRadius={2}
      border="2.4px solid"
      {...props}
    >
      <Container maxWidth="sm">{children}</Container>
    </Stack>
  )
}
