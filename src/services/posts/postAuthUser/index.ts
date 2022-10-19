import { api } from 'services/api'

export async function postAuthUser(username: string, password?: string) {
  try {
    const response = await api.post('api-token-auth/', { username, password })
    if (response.status === 200) {
      return response.data
    } else {
      console.log('error')
    }
  } catch (error) {
    console.log(error)
  }
}
