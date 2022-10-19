import { NavigateFunction } from 'react-router-dom'

import { UserProps } from 'global/types/UserProps'
import { postAuthUser } from 'services/posts/postAuthUser'

export async function onSubmit(data: UserProps, navigate: NavigateFunction) {
  try {
    const response = await postAuthUser(data.username, data.password)
    if (response) {
      localStorage.setItem('token', response.token)
      localStorage.setItem('username', data.username)
      navigate('/')
    } else {
      console.log('error')
    }
  } catch (error) {
    console.log(error)
  }
}
