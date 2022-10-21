import { ReactNode } from 'react'
import { Stack, StackProps } from '@mui/material'

type BoxQuestionProps = {
  children: ReactNode
} & StackProps

export function BoxQuestion({ children, ...props }: BoxQuestionProps) {
  return (
    <Stack
      textAlign="start"
      p={4}
      borderRadius={3}
      border="2px solid"
      {...props}
    >
      {children}
    </Stack>
  )
}
