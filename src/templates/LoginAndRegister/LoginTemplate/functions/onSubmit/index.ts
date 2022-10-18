import { NavigateFunction } from 'react-router-dom'

import { UserProps } from 'global/types/UserProps'
import { postAuthUser } from 'services/posts/postAuthUser'

export async function onSubmit(data: UserProps, navigate: NavigateFunction) {
  try {
    const response = await postAuthUser(data.username, data.password)

    if (response === 200) {
      localStorage.setItem('token', response.data.token)
      navigate('../')
    } else {
      console.log('error')
    }
  } catch (error) {
    console.log(error)
  }
}
