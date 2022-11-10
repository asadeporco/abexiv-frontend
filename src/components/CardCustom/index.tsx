import { Card, Box, Typography, Stack } from '@mui/material'

type CardCustomProps = {
  title: string
  image: string
}

export function CardCustom({ title, image }: CardCustomProps) {
  return (
    <Card sx={{ boxShadow: 'none' }}>
      <Stack alignItems="center" width="100%" height="100%">
        <Box
          component="img"
          src={image}
          width={{ xs: '50%', sm: '100%' }}
          height={{ xs: '100%', sm: '220px' }}
        />
        <Typography variant="h5">{title}</Typography>
      </Stack>
    </Card>
  )
}
