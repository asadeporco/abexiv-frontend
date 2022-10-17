import { Typography } from '@mui/material'
import { AvatarWithName } from 'components/AvatarWithName'
import { BoxQuestion } from 'components/BoxQuestion'
import { CommentTextField } from 'components/CommentTextField'

import { useForm } from 'react-hook-form'

type AskContainerProps = {
  username: string
  avatar: string
  date?: string
  questionTitle?: string
  questionDescription?: string
  userLogged?: boolean
}

export function AskContainer({
  username,
  avatar,
  date,
  questionTitle,
  questionDescription,
  userLogged
}: AskContainerProps) {
  const { control } = useForm()
  console.log(userLogged)

  return (
    <BoxQuestion spacing={3}>
      <AvatarWithName date={date} image={avatar} name={username} />
      <Typography component="p">{questionTitle}</Typography>
      <Typography fontSize={17} color="#484747">
        {questionDescription}
      </Typography>
      <CommentTextField
        name="comment"
        label="Adicionar um comentário?"
        control={control}
      />
    </BoxQuestion>
  )
}
