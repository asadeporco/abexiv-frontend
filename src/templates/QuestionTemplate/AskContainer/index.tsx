import { Typography } from '@mui/material'
import { AvatarWithName } from 'components/AvatarWithName'
import { BoxQuestion } from 'components/BoxQuestion'

type AskContainerProps = {
  question?: any
  userLogged?: boolean
}

export function AskContainer({ question }: AskContainerProps) {
  return (
    <BoxQuestion spacing={3}>
      <AvatarWithName
        image=""
        date={question?.created_at}
        name={question?.user?.username}
      />
      <Typography component="p">{question?.title}</Typography>
      <Typography fontSize={17} color="#484747">
        {question?.description}
      </Typography>
    </BoxQuestion>
  )
}
