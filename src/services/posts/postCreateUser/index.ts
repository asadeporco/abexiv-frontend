import { api } from 'services/api'
import { UserProps } from 'global/types/UserProps'

export async function postCreateUser(data: UserProps) {
  try {
    const response = await api.post('/user/', data)

    if (response.status === 201) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}
