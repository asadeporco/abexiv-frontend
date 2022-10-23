import { Grid, Stack } from '@mui/material'
import { AvatarWithName } from 'components/AvatarWithName'

import { AnswerProps } from 'global/types/AnswerProps'

type AnswerTemplateProps = {
  answers?: AnswerProps[]
}

export function AnswerTemplate({ answers }: AnswerTemplateProps) {
  return (
    <Stack spacing={3} padding={3}>
      {answers?.map((answer: AnswerProps) => (
        <Stack key={answer?.id}>
          <AvatarWithName
            name={answer?.user?.username}
            date={answer?.created_at}
            image=""
          />
          <Grid container></Grid>
        </Stack>
      ))}
    </Stack>
  )
}
