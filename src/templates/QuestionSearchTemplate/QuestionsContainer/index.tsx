import { Typography, Stack } from '@mui/material'

import { AvatarWithName } from 'components/AvatarWithName'
import { BoxQuestion } from 'components/BoxQuestion'
import { QuestionProps } from 'global/types/QuestionProps'

import { parseDateBr } from 'global/functions/parseDateBr'

type QuestionsSearchTemplateProps = {
  questions?: QuestionProps[]
}

export function QuestionsContainer({
  questions
}: QuestionsSearchTemplateProps) {
  return (
    <Stack spacing={3}>
      {questions && questions.length > 0 ? (
        questions?.map((question) => (
          <BoxQuestion key={question.id}>
            <AvatarWithName
              image=""
              date={parseDateBr(question.created_at)}
              name={question.user.username}
            />
            <Stack spacing={1}>
              <Typography fontSize={28} variant="h3">
                {question.title.substring(0, 25)}
              </Typography>
              <Typography fontSize={18} color="#5a5a5a">
                {question.description.substring(0, 250)}
              </Typography>
            </Stack>
          </BoxQuestion>
        ))
      ) : (
        <Stack>
          <Typography fontSize={24} variant="h1">
            Nenhuma pergunta foi encontrada :(
          </Typography>
        </Stack>
      )}
    </Stack>
  )
}
