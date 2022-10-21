import { Container, Grid, Stack } from '@mui/material'

import { AskContainer } from './AskContainer'
import { GridCustom } from 'components/GridCustom'
import { QuestionsCardCustom } from 'components/QuestionsCardCustom'

import { QuestionProps } from 'global/types/QuestionProps'
import { AnswerProps } from 'global/types/AnswerProps'
import { AnswerTemplate } from './AnswerTemplate'

type QuestionTemplateProps = {
  question?: QuestionProps
  answers?: AnswerProps[]
}

export function QuestionTemplate({ question, answers }: QuestionTemplateProps) {
  return (
    <Stack>
      <Container>
        <GridCustom alignItems="start" spacing={10}>
          <Grid item xs={12} sm={7}>
            <Stack spacing={10}>
              <AskContainer question={question} />
              <AnswerTemplate answers={answers} />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4.5}>
            <QuestionsCardCustom title="titulo generico 29" />
          </Grid>
        </GridCustom>
      </Container>
    </Stack>
  )
}
