import { redirect } from 'react-router-dom'

import { QuestionProps } from 'global/types/QuestionProps'
import { postQuestion } from 'services/posts/postQuestion'

export async function handleSubmit(
  token: string,
  data: QuestionProps,
  setOpen: any
) {
  const response = await postQuestion(token, data)

  if (response) {
    setOpen(false)
    return redirect('/')
  }
}
