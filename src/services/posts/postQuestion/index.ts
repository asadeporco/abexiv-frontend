import { api } from 'services/api'

export async function postQuestion(token: string, data: any) {
  try {
    const response = await api.post('/questions', data, {
      headers: {
        Authorization: `Token ${token}`
      }
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}
