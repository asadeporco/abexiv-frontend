import { Typography } from '@mui/material'
import { AvatarWithName } from 'components/AvatarWithName'
import { BoxQuestion } from 'components/BoxQuestion'
import { CommentTextField } from 'components/CommentTextField'

import { useForm } from 'react-hook-form'

type AskContainerProps = {
  question?: any
  userLogged?: boolean
}

export function AskContainer({ question }: AskContainerProps) {
  const { control } = useForm()

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
      <CommentTextField
        name="comment"
        label="Adicionar um comentário?"
        control={control}
      />
    </BoxQuestion>
  )
}
