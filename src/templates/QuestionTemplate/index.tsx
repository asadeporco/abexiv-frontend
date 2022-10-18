import { Container, Grid, Stack } from '@mui/material'

import { GridCustom } from 'components/GridCustom'
import { AskContainer } from './AskContainer'
import { ResponseTemplate } from './ResponseTemplate'
import { SimilarQuestions } from './SimilarQuestions'

import { useQuestion } from 'hooks/useQuestion'

export function QuestionTemplate({ userLogged, questionId }: any) {
  const { question, answers } = useQuestion(questionId)

  return (
    <Stack>
      <Container>
        <GridCustom spacing={10}>
          <Grid item xs={12} sm={6}>
            <Stack spacing={10}>
              <AskContainer question={question} userLogged={userLogged} />
              <ResponseTemplate answers={answers} />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <SimilarQuestions />
          </Grid>
        </GridCustom>
      </Container>
    </Stack>
  )
}
