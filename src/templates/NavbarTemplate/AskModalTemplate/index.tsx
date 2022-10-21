import { SetStateAction, Dispatch } from 'react'
import { Stack, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import { AskModalContainer } from 'components/AskModalContainer'
import { FormAskModalComponent } from 'components/FormAskModalComponent'

import { handleClose } from './functions/handleClose'
import { handleOpen } from './functions/handleOpen'
import { resolver } from './functions/resolver'
import { defaultValues } from './functions/defaultValues'
import { handleSubmit } from './functions/handleSubmit'

type AskModelTemplateProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  token: any
}

export function AskModalTemplate({
  open,
  setOpen,
  token
}: AskModelTemplateProps) {
  return (
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
        <FormAskModalComponent
          setOpen={setOpen}
          token={token}
          onSubmit={handleSubmit}
          resolver={resolver}
          defaultValues={defaultValues}
        />
      </Stack>
    </AskModalContainer>
  )
}
