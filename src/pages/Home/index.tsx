import { Stack } from '@mui/material'

import { HomeTemplate } from 'templates/HomeTemplate'
import { CardCategories } from 'templates/CardCategories'

export function Home() {
  return (
    <Stack spacing={15}>
      <HomeTemplate />
      <CardCategories />
    </Stack>
  )
}
