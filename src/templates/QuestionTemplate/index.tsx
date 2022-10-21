import { Container, Grid, Stack } from '@mui/material'

import { GridCustom } from 'components/GridCustom'
import { AskContainer } from './AskContainer'
import { SimilarQuestions } from './SimilarQuestions'

import { QuestionProps } from 'global/types/QuestionProps'
import { AnswerProps } from 'global/types/AnswerProps'
import { AnswerTemplate } from './AnswerTemplate'

type QuestionTemplateProps = {
  question?: QuestionProps
  similarQuestions?: QuestionProps[]
  answers?: AnswerProps[]
}

export function QuestionTemplate({
  question,
  answers,
  similarQuestions
}: QuestionTemplateProps) {
  return (
    <Stack>
      <Container>
        <GridCustom alignItems="start" spacing={10}>
          <Grid item xs={12} sm={6}>
            <Stack spacing={10}>
              <AskContainer question={question} />
              <AnswerTemplate answers={answers} />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <SimilarQuestions similarQuestions={similarQuestions} />
          </Grid>
        </GridCustom>
      </Container>
    </Stack>
  )
}
