import { ReactNode } from 'react'

type AnchorCustomProps = {
  children: ReactNode
  handleClick: () => void
}

export function AnchorCustom({ handleClick, children }: AnchorCustomProps) {
  return (
    <a
      style={{
        cursor: 'pointer',
        textDecoration: 'underline',
        color: 'blue'
      }}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
