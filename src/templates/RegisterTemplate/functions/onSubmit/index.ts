import { NavigateFunction } from 'react-router-dom'

import { postCreateUser } from 'services/posts/postCreateUser'
import { postAuthUser } from 'services/posts/postAuthUser'
import { Dispatch, SetStateAction } from 'react'

export async function onSubmit(
  data: any,
  navigate: NavigateFunction,
  setToken: Dispatch<SetStateAction<string | undefined>>,
  setUsername: Dispatch<SetStateAction<string | undefined>>
) {
  const response = await postCreateUser(
    data.username,
    data.email,
    data.password
  )

  if (response) {
    const responseAuth = await postAuthUser(data.username, data.password)
    console.log(responseAuth)

    if (responseAuth) {
      localStorage.setItem('token', responseAuth.token)
      setToken(responseAuth.token)

      localStorage.setItem('username', data.username)
      setUsername(data.username)
      navigate('../')
    }
  } else {
    console.log('error')
  }
}
