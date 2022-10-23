import { Avatar, Divider, Stack, Typography } from '@mui/material'

import { AnswerProps } from 'global/types/AnswerProps'

type AnswerTemplateProps = {
  answers?: AnswerProps[]
}

export function AnswerTemplate({ answers }: AnswerTemplateProps) {
  return (
    <Stack spacing={10} padding={3}>
      {answers?.map((answer: AnswerProps, key: number) => (
        <Stack direction="row" spacing={1.4} key={key}>
          <Stack alignItems="center">
            <Avatar />
            <Divider orientation="vertical" />
          </Stack>
          <Stack spacing={2}>
            <Stack spacing={-1}>
              <Typography fontSize={20}>{answer?.user?.username}</Typography>
              <Typography color="#484747" fontSize={13}>
                enviado em 2020-20-20
              </Typography>
            </Stack>
            <Stack>
              <Typography fontSize={16} color="#484747">
                {answer.description}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Stack>
  )
}
