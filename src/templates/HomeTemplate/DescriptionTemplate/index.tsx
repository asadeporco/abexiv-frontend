import { Box, Grid, Stack, Typography } from '@mui/material'

import { GridCustom } from 'components/GridCustom'

export function DescriptionTemplate() {
  return (
    <Stack>
      <GridCustom spacing={3}>
        <Grid item xs={10} sm={5}>
          <Stack spacing={5} textAlign="start">
            <Typography variant="h1" fontSize={42}>
              Tem alguma pergunta?
            </Typography>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit sit vel porro debitis ipsum maxime, nostrum,
              corrupti numquam, eveniet deserunt neque pariatur magni architecto
              ducimus eaque? Placeat ea est numquam.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={10} sm={5}>
          <Box
            component="img"
            height="600px"
            width="500px"
            src="https://freesvg.org/img/erp.png"
          />
        </Grid>
      </GridCustom>
    </Stack>
  )
}
