import { Card, CardContent, Box, Typography, Stack } from '@mui/material'

type CardCustomProps = {
  title?: string
  image?: string
}

export function CardCustom({ title, image }: CardCustomProps) {
  return (
    <Card sx={{ border: 'none', boxShadow: 'none' }}>
      <Stack direction="column">
        <Box maxHeight={225} component="img" src={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </Stack>
    </Card>
  )
}
