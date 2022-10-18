import { api } from 'services/api'

export async function getAnswersFromQuestion(questionId: number) {
  try {
    const response = await api.get(`answer/question/${questionId}/`)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}
