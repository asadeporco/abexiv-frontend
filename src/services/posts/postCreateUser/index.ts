import { api } from 'services/api'

export async function postCreateUser(
  username: string,
  email: string,
  password: string
) {
  try {
    const response = await api.post('/user/', { username, email, password })

    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}
