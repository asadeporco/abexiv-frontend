import { getAnswersFromQuestion } from 'services/gets/getAnswersFromQuestion'
import { postAnswer } from 'services/posts/postAnswer'

export async function handleSubmit(
  data: any,
  token: string | null,
  questionId: number,
  setError: any,
  setAnswers: any
) {
  const response = await postAnswer(data, token, questionId)
  if (response) {
    const responseGet = getAnswersFromQuestion(questionId)
    if (responseGet) {
      setAnswers(responseGet)
    }
  } else {
    setError('description', { message: 'Erro ao enviar resposta' })
  }
}
