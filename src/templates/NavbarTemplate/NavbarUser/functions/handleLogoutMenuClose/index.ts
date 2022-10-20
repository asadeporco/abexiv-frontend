import { Dispatch, SetStateAction } from 'react'
import { NavigateFunction } from 'react-router-dom'

export async function handleLogoutMenuClose(
  navigate: NavigateFunction,
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>,
  setUsername: Dispatch<SetStateAction<string | undefined>>,
  setToken: Dispatch<SetStateAction<string | undefined>>
) {
  setAnchorEl(null)

  localStorage.removeItem('token')
  localStorage.removeItem('username')

  setUsername(undefined)
  setToken(undefined)

  navigate('/')
}
