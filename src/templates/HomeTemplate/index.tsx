import { Box, Container, Grid, Stack, Typography } from '@mui/material'

import { GridCustom } from 'components/GridCustom'
import { SearchInput } from 'components/SearchInput'

export function HomeTemplate() {
  return (
    <Stack textAlign="center">
      <Container>
        <Stack>
          <SearchInput label="Pesquisar pergunta" />
        </Stack>
      </Container>
      <GridCustom height="40hv">
        <Grid item xs={4} justifyContent="center">
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
        <Grid item xs={4}>
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
