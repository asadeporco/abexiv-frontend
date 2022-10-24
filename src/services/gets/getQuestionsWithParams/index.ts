import { api } from 'services/api'

export async function getQuestionsWithParams(
  search?: string,
  page?: number,
  pageSize?: number
) {
  try {
    const response = await api.get('/question/', {
      params: { search: search, page: page, page_size: pageSize }
    })

    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}
