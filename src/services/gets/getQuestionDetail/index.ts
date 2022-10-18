import { api } from 'services/api'

export async function getQuestionDetail(id: number) {
  try {
    const response = await api.get(`question/${id}/`)

    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}
