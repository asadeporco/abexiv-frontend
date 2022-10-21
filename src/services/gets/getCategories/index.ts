import { api } from 'services/api'

export async function getCategories(token: string) {
  try {
    const response = await api.get('/category/', {
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
