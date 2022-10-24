import { postAnswer } from 'services/posts/postAnswer'

export function handleSubmit(
  data: any,
  token: string | null,
  questionId: number,
  setError: any
) {
  const response = postAnswer(data, token, questionId)
  if (response) {
    // getAnswersDataFromApi()
    return response
  } else {
    setError('description', { message: 'Erro ao enviar resposta' })
  }
}
