import { Stack, Typography } from '@mui/material'

import { BoxQuestion } from 'components/BoxQuestion'
import { AvatarWithName } from 'components/AvatarWithName'

import { AnswerProps } from 'global/types/AnswerProps'

type ResponseTemplateProps = {
  answers: AnswerProps[]
}

export function ResponseTemplate({ answers }: ResponseTemplateProps) {
  return (
    <Stack>
      {answers?.map((answer: AnswerProps) => (
        <BoxQuestion spacing={3} key={answer.id}>
          <AvatarWithName
            image=""
            date={answer?.created_at}
            name={answer?.user.username}
          />
          <Typography fontSize={17} color="#484747">
            {answer?.description}
          </Typography>
        </BoxQuestion>
      ))}
    </Stack>
  )
}
