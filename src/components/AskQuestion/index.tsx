import { ReactNode } from 'react'
import { Stack, StackProps } from '@mui/material'

type AskQuestionProps = {
  children: ReactNode
} & StackProps

export function AskQuestion({ children, ...props }: AskQuestionProps) {
  return (
    <Stack textAlign="start" p={3} borderRadius={5} boxShadow={10} {...props}>
      {children}
    </Stack>
  )
}
