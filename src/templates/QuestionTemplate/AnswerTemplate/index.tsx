import { Stack, Typography } from '@mui/material'

import { BoxQuestion } from 'components/BoxQuestion'
import { AvatarWithName } from 'components/AvatarWithName'

import { AnswerProps } from 'global/types/AnswerProps'

type AnswerTemplateProps = {
  answers?: AnswerProps[]
}

export function AnswerTemplate({ answers }: AnswerTemplateProps) {
  return (
    <Stack spacing={3}>
      {answers?.map((answer: AnswerProps, key: number) => (
        <BoxQuestion spacing={3} key={key}>
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
