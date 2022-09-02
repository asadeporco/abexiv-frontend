import * as React from 'react'
import { Card, CardContent, Box, Typography, Stack } from '@mui/material'

type CardCustomProps = {
  title?: string
  image?: string
}

export function CardCustom({ title, image }: CardCustomProps) {
  return (
    <Card sx={{ maxWidth: 400, border: 'none', boxShadow: 'none' }}>
      <Stack>
        <Box maxHeight={225} component="img" src={image} />
        <CardContent>
          <Stack>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  )
}
