import { Dispatch, MouseEvent, SetStateAction } from 'react'

interface MenuOpenProps {
  e: MouseEvent<HTMLElement>
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>
}

export function handleMenuOpen({ e, setAnchorEl }: MenuOpenProps) {
  setAnchorEl(e.currentTarget)
}
