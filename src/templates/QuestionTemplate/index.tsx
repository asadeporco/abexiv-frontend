import { Grid, Stack } from '@mui/material'

import { AskContainer } from './AskContainer'
import { GridCustom } from 'components/GridCustom'
import { QuestionsCardCustom } from 'components/QuestionsCardCustom'

import { AnswerTemplate } from './AnswerTemplate'
import { BoxQuestion } from 'components/BoxQuestion'
import { CommentAnswerTemplate } from './CommentAnswerTemplate'

export function QuestionTemplate() {
  return (
    <GridCustom alignItems="start" spacing={10}>
      <Grid item xs={10} sm={5}>
        <Stack spacing={10}>
          <BoxQuestion spacing={5}>
            <AskContainer />
            <CommentAnswerTemplate />
            <AnswerTemplate />
          </BoxQuestion>
        </Stack>
      </Grid>
      <Grid item xs={8} sm={3}>
        <QuestionsCardCustom title="Perguntas em destaque" />
        <QuestionsCardCustom title="Perguntas relacionadas" />
      </Grid>
    </GridCustom>
  )
}
