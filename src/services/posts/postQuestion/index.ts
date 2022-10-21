import { api } from 'services/api'

export async function postQuestion(token: string, data: any) {
  try {
    const response = await api.post('/question/', data, {
      headers: {
        Authorization: `Token ${token}`
      }
    })

    if (response.status === 200) {
      return response.data
    } else {
      console.log('error')
    }
  } catch (error) {
    console.log(error)
  }
}
