import { AppBar, Grid, Stack, Typography } from '@mui/material'

import { ButtonCustom } from 'components/ButtonCustom'

export function NavbarTemplate() {
  return (
    <AppBar position="fixed" elevation={4}>
      <Grid
        container
        py={1.5}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Grid item xs={6}>
          <Stack
            spacing={0.5}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h1" fontSize={'55px'}>
              Σ
            </Typography>
            <Typography variant="h1">Respondidos&#xb2;</Typography>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack
            spacing={6}
            justifyContent="center"
            alignItems="center"
            direction="row"
          >
            <ButtonCustom>Fazer Login</ButtonCustom>
            <ButtonCustom color="info">Registrar-se</ButtonCustom>
          </Stack>
        </Grid>
      </Grid>
    </AppBar>
  )
}
