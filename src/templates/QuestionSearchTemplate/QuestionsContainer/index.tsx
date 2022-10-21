import { useNavigate } from 'react-router-dom'
import { Typography, Stack } from '@mui/material'

import { AvatarWithName } from 'components/AvatarWithName'
import { BoxQuestion } from 'components/BoxQuestion'
import { QuestionProps } from 'global/types/QuestionProps'

type QuestionsSearchTemplateProps = {
  questions?: QuestionProps[]
}

export function QuestionsContainer({
  questions
}: QuestionsSearchTemplateProps) {
  const navigate = useNavigate()

  console.log(questions)

  return (
    <Stack spacing={7}>
      {questions && questions.length > 0 ? (
        questions?.map((question) => (
          <a
            onClick={() => navigate(`../questions/${question.id}`)}
            style={{ cursor: 'pointer' }}
            key={question.id}
          >
            <BoxQuestion spacing={3}>
              <AvatarWithName
                image=""
                date={question.created_at}
                name={question.user.username}
              />
              <Stack spacing={2}>
                <Typography fontSize={28} variant="h3">
                  {question.title.substring(0, 25)}
                </Typography>
                <Typography fontSize={18} color="#5a5a5a">
                  {question.description.substring(0, 250)}
                </Typography>
              </Stack>
            </BoxQuestion>
          </a>
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
