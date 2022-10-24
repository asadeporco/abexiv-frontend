import { Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'

type IconWithLabelProps = {
  icon: ReactNode
  label?: string
}

export function IconWithLabel({ icon, label }: IconWithLabelProps) {
  return (
    <Stack direction="row" spacing={0.2}>
      {icon}
      <Typography fontSize="16px">{label}</Typography>
    </Stack>
  )
}
