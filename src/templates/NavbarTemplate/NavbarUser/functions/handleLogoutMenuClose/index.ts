import { Dispatch, SetStateAction } from 'react'
import { NavigateFunction } from 'react-router-dom'

export function handleLogoutMenuClose(
  navigate: NavigateFunction,
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>,
  setUsername: Dispatch<SetStateAction<string | undefined>>,
  setToken: Dispatch<SetStateAction<string | undefined>>
) {
  localStorage.removeItem('token')
  localStorage.removeItem('username')

  setAnchorEl(null)
  setUsername(undefined)
  setToken(undefined)

  navigate('/')
}
