import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography
} from '@mui/material'
import { QuestionProps } from 'global/types/QuestionProps'

type QuestionsCardCustomProps = {
  title: string
  questions?: QuestionProps[]
}

const teste = [
  {
    id: 1,
    title: 'Como criar um componente no React?'
  },
  {
    id: 2,
    title: 'Por quê o React é tão legal?'
  },
  {
    id: 3,
    title: 'Como centralizar uma div?'
  },
  {
    id: 4,
    title: 'Matemática é muito difícil para mim :('
  }
]

export function QuestionsCardCustom({ title }: QuestionsCardCustomProps) {
  return (
    <Stack spacing={1} p={3} borderRadius={2} border="solid" textAlign="center">
      <Stack>
        <Typography fontSize={24} m={4}>
          {title}
        </Typography>
        <Divider />
      </Stack>
      <Stack spacing={1}>
        {teste?.map((question: any) => (
          <Button key={question.id}>
            <Box>
              <Container>
                <Typography fontSize={20}>
                  {question.title.substring(0, 25)}
                </Typography>
              </Container>
            </Box>
          </Button>
        ))}
      </Stack>
    </Stack>
  )
}
