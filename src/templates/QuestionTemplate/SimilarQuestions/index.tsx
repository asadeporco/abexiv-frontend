import { Stack, Typography, Divider, Box } from '@mui/material'

import { similarQuestionsData } from './data'

export function SimilarQuestions() {
  return (
    <Stack p={3} height={'400px'} borderRadius={5} boxShadow={10}>
      <Typography m={4}>Mais perguntas</Typography>
      <Divider />
      <Stack textAlign="start">
        {similarQuestionsData?.map((question) => (
          <Box key={question.id}>
            <Typography fontSize={20} color="#484747">
              {question.title}
            </Typography>
            <Divider />
          </Box>
        ))}
      </Stack>
    </Stack>
  )
}
