import { ReactNode } from 'react'
import { Stack, StackProps } from '@mui/material'

type BoxQuestionProps = {
  children: ReactNode
} & StackProps

export function BoxQuestion({ children, ...props }: BoxQuestionProps) {
  return (
    <Stack textAlign="start" p={3} borderRadius={5} boxShadow={10} {...props}>
      {children}
    </Stack>
  )
}
