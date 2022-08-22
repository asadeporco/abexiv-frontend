import { Navbar } from 'components/Navbar'
import { Grid, Box, Typography, Stack, Container } from '@mui/material'

import { style } from './style'

export function NotLoggedNavbarTemplate() {
  return (
    <Navbar>
      <Grid container justifyContent={'space-between'}>
        <Grid item>
          <Container>
            <Box sx={style.image} component="img" alt="logo" />
          </Container>
        </Grid>
        <Grid item>
          <Stack direction="row" spacing={5}>
            <Typography>Entrar</Typography>
            <Typography>Cadastre-se</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Navbar>
  )
}
