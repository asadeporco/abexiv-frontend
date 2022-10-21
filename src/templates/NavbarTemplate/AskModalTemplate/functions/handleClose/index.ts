import { Dispatch, SetStateAction } from 'react'

export function handleClose(setOpen: Dispatch<SetStateAction<boolean>>) {
  setOpen(false)
}
