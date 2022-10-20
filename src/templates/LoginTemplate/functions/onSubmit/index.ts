import { NavigateFunction } from 'react-router-dom'

import { UserProps } from 'global/types/UserProps'
import { postAuthUser } from 'services/posts/postAuthUser'
import { Dispatch, SetStateAction } from 'react'

export async function onSubmit(
  data: UserProps,
  navigate: NavigateFunction,
  setToken: Dispatch<SetStateAction<string | undefined>>,
  setUsername: Dispatch<SetStateAction<string | undefined>>
) {
  try {
    const response = await postAuthUser(data.username, data.password)

    if (response) {
      localStorage.setItem('token', response.token)
      setToken(response.token)

      localStorage.setItem('username', data.username)
      setUsername(data.username)
      navigate('/')
    } else {
      console.log('error')
    }
  } catch (error) {
    console.log(error)
  }
}
