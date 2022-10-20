import { api } from 'services/api'

export async function getCategories(token: string) {
  try {
    const response = await api.get('/categories', {
      headers: {
        Authorization: `Token ${token}`
      }
    })
    return response
  } catch (error) {
    console.log(error)
  }
}
