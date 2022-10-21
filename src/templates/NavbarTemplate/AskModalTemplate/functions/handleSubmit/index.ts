import { QuestionProps } from 'global/types/QuestionProps'
import { postQuestion } from 'services/posts/postQuestion'

export async function handleSubmit(
  token: string,
  data: QuestionProps,
  navigate: any
) {
  const response = await postQuestion(token, data)
  console.log(response)

  if (response) {
    navigate(`/questions/${response.id}`)
  } else {
    console.log('Erro ao postar pergunta')
  }
}
