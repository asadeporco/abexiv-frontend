import { ReactNode } from 'react'
import { Box, Container, Modal } from '@mui/material'

import { boxStyle } from './styles'

type AskModalContainerProps = {
  children: ReactNode
  open: boolean

  handleOpen: () => void
  handleClose: () => void
}

export function AskModalContainer({
  children,
  open,
  handleClose
}: AskModalContainerProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={boxStyle}>
        <Container>{children}</Container>
      </Box>
    </Modal>
  )
}
