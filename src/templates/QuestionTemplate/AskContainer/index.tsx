import { Typography } from '@mui/material'
import { AvatarWithName } from 'components/AvatarWithName'
import { AskQuestion } from 'components/AskQuestion'
import { CommentTextField } from 'components/CommentTextField'

import { useForm } from 'react-hook-form'

type AskContainerProps = {
  username: string
  avatar: string
  date?: string
  questionTitle?: string
  questionDescription?: string
}

export function AskContainer({
  username,
  avatar,
  date,
  questionTitle,
  questionDescription
}: AskContainerProps) {
  const { control } = useForm()

  return (
    <AskQuestion spacing={3}>
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
    </AskQuestion>
  )
}
