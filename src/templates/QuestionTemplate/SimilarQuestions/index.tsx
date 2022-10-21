import { Stack, Typography, Divider, Box, Container } from '@mui/material'
import { QuestionProps } from 'global/types/QuestionProps'

type SimilarQuestionsProps = {
  similarQuestions?: QuestionProps[]
}

export function SimilarQuestions({ similarQuestions }: SimilarQuestionsProps) {
  return (
    <Stack p={3} height={'400px'} borderRadius={5} boxShadow={10}>
      <Typography m={4}>Mais perguntas</Typography>
      <Divider />
      <Stack textAlign="start">
        {similarQuestions?.map((question: QuestionProps) => (
          <Box key={question.id}>
            <Container>
              <Typography fontSize={20}>{question.title}</Typography>
            </Container>
            <Divider />
          </Box>
        ))}
      </Stack>
    </Stack>
  )
}
