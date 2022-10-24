import { ReactNode } from 'react'
import { Stack, StackProps } from '@mui/material'

type BoxQuestionProps = {
  children: ReactNode
  maxWidthContainer?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
} & StackProps

export function BoxQuestion({ children, ...props }: BoxQuestionProps) {
  return (
    <Stack
      textAlign="start"
      paddingY={props.paddingY ?? 2}
      paddingX={props.paddingX ?? 2}
      borderRadius={2}
      border="2.4px solid"
      {...props}
    >
      {children}
    </Stack>
  )
}
