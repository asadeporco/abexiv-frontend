import { useState } from 'react'
import { Button, Stack, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import { AskModalContainer } from 'components/AskModalContainer'

import { handleClose } from './functions/handleClose'
import { handleOpen } from './functions/handleOpen'
import { ButtonCustom } from 'components/ButtonCustom'
import { FormAskModal } from './FormAskModal'

export function AskModalTemplate() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button variant="contained" onClick={() => handleOpen(setOpen)}>
        askfodpkasdf
      </Button>
      <AskModalContainer
        open={open}
        handleClose={() => handleClose(setOpen)}
        handleOpen={() => handleOpen(setOpen)}
      >
        <Stack spacing={6}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h5">Tire a sua dúvida</Typography>
            <CloseIcon
              sx={{ cursor: 'pointer' }}
              onClick={() => handleClose(setOpen)}
            />
          </Stack>
          <FormAskModal />
          <Stack alignItems="center">
            <ButtonCustom color="info">Enviar</ButtonCustom>
          </Stack>
        </Stack>
      </AskModalContainer>
    </div>
  )
}
