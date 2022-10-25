import { Container, Grid, Stack, Typography } from '@mui/material'

import { QuestionsContainer } from './QuestionsContainer'

import { AdContainer } from 'components/AdContainer'
import { QuestionsCardCustom } from 'components/QuestionsCardCustom'
import { NavigationSearch } from 'components/NavigationSearch'

export function QuestionsSearchTemplate() {
  return (
    <Container maxWidth="lg">
      <Stack alignItems="center" spacing={10}>
        <Typography variant="h1">Resultados da busca</Typography>
        <Grid container justifyContent="space-evenly">
          <Grid item md={5}>
            <QuestionsContainer />
            <Stack alignItems="center" paddingTop={5}>
              <NavigationSearch />
            </Stack>
          </Grid>
          <Grid item md={4}>
            <Stack spacing={2} sx={{ display: { xs: 'none', md: 'block' } }}>
              <QuestionsCardCustom title="Perguntas em destaque" />
              <QuestionsCardCustom title="Perguntas mais pesquisadas" />
            </Stack>
            <AdContainer
              height="1000px"
              maxWidth="500px"
              img="https://c4.wallpaperflare.com/wallpaper/145/963/593/propaganda-winston-overwatch-overwatch-gamer-wallpaper-preview.jpg"
            />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  )
}
