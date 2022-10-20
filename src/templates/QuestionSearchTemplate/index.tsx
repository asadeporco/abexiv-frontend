import { Container, Stack, Typography } from '@mui/material'

import { QuestionProps } from 'global/types/QuestionProps'
import { QuestionsContainer } from './QuestionsContainer'

type QuestionsSearchTemplateProps = {
  questions?: QuestionProps[]
}

export function QuestionsSearchTemplate({
  questions
}: QuestionsSearchTemplateProps) {
  return (
    <Container sx={{ paddingBottom: '50px' }}>
      <Stack spacing={10}>
        <Typography variant="h1">Resultados da busca</Typography>
        <Stack spacing={3}>
          <Container maxWidth="lg">
            <QuestionsContainer questions={questions} />
          </Container>
        </Stack>
      </Stack>
    </Container>
  )
}
