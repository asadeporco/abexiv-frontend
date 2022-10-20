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

  return (
    <Stack spacing={5}>
      {questions?.map((question) => (
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
            <Typography component="p">{question.title}</Typography>
            <Typography fontSize={17} color="#484747">
              {question.description}
            </Typography>
          </BoxQuestion>
        </a>
      ))}
    </Stack>
  )
}
