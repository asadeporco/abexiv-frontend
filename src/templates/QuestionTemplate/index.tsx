import { Container, Grid, Stack } from '@mui/material'

import { GridCustom } from 'components/GridCustom'
import { AskContainer } from './AskContainer'
import { ResponseTemplate } from './ResponseTemplate'
import { SimilarQuestions } from './SimilarQuestions'

export function QuestionTemplate({ userLogged }: any) {
  return (
    <Stack>
      <Container>
        <GridCustom spacing={10}>
          <Grid item xs={6}>
            <Stack spacing={10}>
              <AskContainer
                username="pedro"
                avatar=""
                questionTitle="dacueba"
                questionDescription=""
                date="10/10/2021"
                userLogged={userLogged}
              />
              <ResponseTemplate
                avatar=""
                username="pedro alvares cabral"
                response="boa pergunta"
                date="10/10/2021"
              />
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <SimilarQuestions />
          </Grid>
        </GridCustom>
      </Container>
    </Stack>
  )
}
