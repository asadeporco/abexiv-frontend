import { Grid, Stack, Typography } from '@mui/material'

import { QuestionProps } from 'global/types/QuestionProps'
import { QuestionsContainer } from './QuestionsContainer'

import { AdContainer } from 'components/AdContainer'
import { QuestionsCardCustom } from 'components/QuestionsCardCustom'
import { NavigationSearch } from 'components/NavigationSearch'

type QuestionsSearchTemplateProps = {
  questions?: QuestionProps[]
  sentence: string | null
  numberOfQuestions: number
}

export function QuestionsSearchTemplate({
  numberOfQuestions,
  questions,
  sentence
}: QuestionsSearchTemplateProps) {
  return (
    <Stack alignItems="center" spacing={10}>
      <Typography variant="h1">Resultados da busca</Typography>
      <Grid container justifyContent="space-evenly" direction="row">
        <Grid item md={5}>
          <QuestionsContainer questions={questions} />
          <Stack alignItems="center" paddingTop={5}>
            <NavigationSearch sentence={sentence} count={numberOfQuestions} />
          </Stack>
        </Grid>
        <Grid item md={3}>
          <Stack spacing={2}>
            <QuestionsCardCustom title="Perguntas em destaque" />
            <QuestionsCardCustom title="Perguntas mais pesquisadas" />
            <AdContainer
              height="1000px"
              maxWidth="500px"
              img="https://blog.arboimoveis.com.br/wp-content/uploads/2021/10/black-november-arbo.jpg"
            />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  )
}
