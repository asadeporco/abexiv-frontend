import { Stack, StackProps } from '@mui/material'

type AskContainerProps = {
  img: string
} & StackProps

export function AdContainer({ img, ...props }: AskContainerProps) {
  return (
    <Stack {...props}>
      <img height="100%" src={img} alt="Ask" />
    </Stack>
  )
}