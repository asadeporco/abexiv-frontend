import { Typography } from '@mui/material'
import { BoxQuestion } from 'components/BoxQuestion'
import { AvatarWithName } from 'components/AvatarWithName'

type ResponseTemplateProps = {
  username: string
  avatar: string
  date?: string
  response: string
}

export function ResponseTemplate({
  username,
  avatar,
  date,
  response
}: ResponseTemplateProps) {
  return (
    <BoxQuestion spacing={3}>
      <AvatarWithName date={date} image={avatar} name={username} />
      <Typography fontSize={14} color="#484747">
        {response}
      </Typography>
    </BoxQuestion>
  )
}
