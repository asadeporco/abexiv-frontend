import { Stack } from '@mui/material'

import { DescriptionTemplate } from './DescriptionTemplate'
import { CardCategories } from './CardCategories'

export function HomeTemplate() {
  return (
    <Stack spacing={15}>
      <DescriptionTemplate />
      <CardCategories />
    </Stack>
  )
}
