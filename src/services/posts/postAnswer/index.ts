import { api } from 'services/api'

export async function postAnswer(
  data: any,
  token: string | null,
  questionId: number
) {
  try {
    const response = await api.post(`/answer/question/${questionId}/`, data, {
      headers: { Authorization: `Token ${token}` }
    })

    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}
