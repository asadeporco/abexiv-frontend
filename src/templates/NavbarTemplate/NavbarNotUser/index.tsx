import { Grid, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { AppBarCustom } from 'components/AppbarCustom'
import { ButtonCustom } from 'components/ButtonCustom'
import { GridCustom } from 'components/GridCustom'

export function NavbarNotUser() {
  const navigate = useNavigate()

  return (
    <AppBarCustom>
      <GridCustom padding={1.5}>
        <Grid item xs={6}>
          <Stack
            spacing={0.5}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <ButtonCustom
              onClick={() => navigate('../')}
              variant="text"
              color="inherit"
            >
              <Typography variant="h1" fontSize={'55px'}>
                Σ
              </Typography>
              <Typography variant="h1">Respondidos&#xb2;</Typography>
            </ButtonCustom>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack
            spacing={6}
            justifyContent="center"
            alignItems="center"
            direction="row"
          >
            <ButtonCustom onClick={() => navigate('../login')}>
              Fazer Login
            </ButtonCustom>
            <ButtonCustom onClick={() => navigate('../register')} color="info">
              Registrar-se
            </ButtonCustom>
          </Stack>
        </Grid>
      </GridCustom>
    </AppBarCustom>
  )
}
