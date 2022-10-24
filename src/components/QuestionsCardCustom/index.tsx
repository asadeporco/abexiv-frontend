import { Stack, Typography } from '@mui/material'
import { QuestionProps } from 'global/types/QuestionProps'

import { iconOfCategoryByName } from 'global/functions/iconOfCategoryByName'

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
    <Stack spacing={1} p={3} alignItems="start">
      <Stack>
        <Typography fontSize={24}>{title}</Typography>
      </Stack>
      <Stack spacing={1} paddingLeft={1.5}>
        {teste?.map((question: any) => (
          <Stack key={question.id} direction="row" spacing={0.5}>
            {iconOfCategoryByName(question?.name)}
            <Typography
              onClick={() => console.log('belo click')}
              component="span"
              fontSize={18}
              sx={{ cursor: 'pointer' }}
            >
              {question.title.substring(0, 25)}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}
