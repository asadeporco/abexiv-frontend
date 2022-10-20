import { api } from 'services/api'

export async function getQuestions() {
  try {
    const response = await api.get('question/')

    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}
