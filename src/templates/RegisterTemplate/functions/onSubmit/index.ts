import { NavigateFunction } from 'react-router-dom'

import { postCreateUser } from 'services/posts/postCreateUser'
import { postAuthUser } from 'services/posts/postAuthUser'
import { UserProps } from 'global/types/UserProps'
import { Dispatch, SetStateAction } from 'react'

export async function onSubmit(
  data: UserProps,
  navigate: NavigateFunction,
  setToken: Dispatch<SetStateAction<string | undefined>>,
  setUsername: Dispatch<SetStateAction<string | undefined>>
) {
  const response = await postCreateUser(data)

  if (response.status === 201) {
    const responseAuth = await postAuthUser(data.username, data.password)
    setUsername(data.username)

    if (responseAuth === 200) {
      localStorage.setItem('token', responseAuth.data.token)
      setToken(responseAuth.data.token)
      navigate('../')
    }
  } else {
    console.log('error')
  }
}
