import { api } from 'services/api'

export async function getSimilarQuestion() {
  try {
    const response = await api.get(`/question`, {
      params: {
        page_size: 5,
        page: 1
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
