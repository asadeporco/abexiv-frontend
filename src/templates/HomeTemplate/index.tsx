import { Box, Grid, Stack, Typography } from '@mui/material'

import { GridCustom } from 'components/GridCustom'
import { green } from 'global/data/Green'

export function HomeTemplate() {
  console.log(green)
  return (
    <Stack textAlign="center">
      <GridCustom height="40hv" spacing={3}>
        <Grid item xs={10} sm={5} justifyContent="center">
          <Stack spacing={5} textAlign="start">
            <Typography variant="h1" fontSize={45}>
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
            height="100%"
            width="100%"
            src="https://freesvg.org/img/erp.png"
          />
        </Grid>
      </GridCustom>
    </Stack>
  )
}
