import { Grid, Stack } from '@mui/material'

import { AskContainer } from './AskContainer'
import { GridCustom } from 'components/GridCustom'
import { QuestionsCardCustom } from 'components/QuestionsCardCustom'

import { QuestionProps } from 'global/types/QuestionProps'
import { AnswerProps } from 'global/types/AnswerProps'
import { AnswerTemplate } from './AnswerTemplate'
import { BoxQuestion } from 'components/BoxQuestion'
import { CommentAnswerTemplate } from './CommentAnswerTemplate'

type QuestionTemplateProps = {
  question?: QuestionProps
  answers?: AnswerProps[]
}

export function QuestionTemplate({ question, answers }: QuestionTemplateProps) {
  return (
    <GridCustom alignItems="start" spacing={10}>
      <Grid item xs={12} sm={5}>
        <Stack spacing={10}>
          <BoxQuestion spacing={5}>
            <AskContainer question={question} />
            <CommentAnswerTemplate />
            <AnswerTemplate answers={answers} />
          </BoxQuestion>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={3}>
        <QuestionsCardCustom title="titulo generico 29" />
      </Grid>
    </GridCustom>
  )
}
