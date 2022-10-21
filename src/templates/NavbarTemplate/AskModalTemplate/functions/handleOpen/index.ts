import { Dispatch, SetStateAction } from 'react'

export function handleOpen(setOpen: Dispatch<SetStateAction<boolean>>) {
  setOpen(true)
}
