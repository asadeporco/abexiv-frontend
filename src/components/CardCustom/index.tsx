import { Card, CardContent, Box, Typography, Stack } from '@mui/material'

type CardCustomProps = {
  title: string
  image: string
}

export function CardCustom({ title, image }: CardCustomProps) {
  return (
    <Card sx={{ border: 'none', boxShadow: 'none' }}>
      <Stack alignItems="center">
        <Box maxHeight={{ xs: 200, sm: 190 }} component="img" src={image} />
        <CardContent>
          <Typography variant="h5">{title}</Typography>
        </CardContent>
      </Stack>
    </Card>
  )
}
