import { Avatar, Divider, Stack, Typography } from '@mui/material'
import { IconWithLabel } from 'components/IconWithLabel'

import { AnswerProps } from 'global/types/AnswerProps'
import { parseDateBr } from 'global/functions/parseDateBr'

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices'

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
            <Divider orientation="vertical" sx={{ borderRightWidth: 2 }} />
          </Stack>
          <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between">
              <Stack spacing={-1} direction="column">
                <Typography fontSize={20}>{answer?.user?.username}</Typography>
                <Typography color="#484747" fontSize={13}>
                  enviado em {parseDateBr(answer?.created_at)}
                </Typography>
              </Stack>
              <Stack spacing={2} direction="row">
                <IconWithLabel
                  label="Upvote"
                  icon={<ArrowUpwardIcon sx={{ fontSize: '20px' }} />}
                />
                <IconWithLabel
                  label="Downvote"
                  icon={<ArrowDownwardIcon sx={{ fontSize: '20px' }} />}
                />
                <MiscellaneousServicesIcon sx={{ fontSize: '20px' }} />
              </Stack>
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
