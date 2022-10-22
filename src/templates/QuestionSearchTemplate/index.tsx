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
    <Stack alignItems="center" spacing={10} paddingBottom="50px">
      <Typography variant="h1">Resultados da busca</Typography>
      <Grid container justifyContent="center" direction="row" spacing={4}>
        <Grid item md={2} border="2px solid red" width="300px"></Grid>
        <Grid item md={5}>
          <Stack alignItems="center" spacing={5}>
            <QuestionsContainer questions={questions} />
            <NavigationSearch sentence={sentence} count={numberOfQuestions} />
          </Stack>
        </Grid>
        <Grid item md={3}>
          <Stack spacing={5}>
            <QuestionsCardCustom title="Perguntas em destaque" />
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
