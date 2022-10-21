import { NavigateFunction } from 'react-router-dom'

import { UserProps } from 'global/types/UserProps'
import { postAuthUser } from 'services/posts/postAuthUser'
import { Dispatch, SetStateAction } from 'react'

export async function onSubmit(
  data: UserProps,
  navigate: NavigateFunction,
  setToken: Dispatch<SetStateAction<string | null>>,
  setUsername: Dispatch<SetStateAction<string | null>>,
  setError: any
) {
  const response = await postAuthUser(data.username, data.password)

  if (response) {
    localStorage.setItem('token', response.token)
    setToken(response.token)

    localStorage.setItem('username', data.username)
    setUsername(data.username)
    navigate('/')
  } else {
    setError('username', { type: 'wrongPasswordOrUsername' })
    setError('password', {
      type: 'wrongPasswordOrUsername',
      message: 'Usuário ou senha incorretos'
    })
  }
}
