import { Dispatch, SetStateAction } from 'react'

export function handleMenuClose(
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>
) {
  setAnchorEl(null)
}
