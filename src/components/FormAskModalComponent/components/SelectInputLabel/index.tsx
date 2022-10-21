import {
  InputLabel,
  Select,
  FormControl,
  Typography,
  Stack
} from '@mui/material'
import { Controller } from 'react-hook-form'
import { ReactNode } from 'react'

type SelectInputLabelProps = {
  children: ReactNode
  name: string
  label: string
  control: any
}

export function SelectInputLabel({
  control,
  name,
  children,
  label
}: SelectInputLabelProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl color="secondary" fullWidth>
          <InputLabel>{label}</InputLabel>
          <Stack>
            <Select label="Categoria" {...field}>
              {children}
            </Select>
            <Typography
              sx={{ paddingLeft: '4px', margin: '5px' }}
              color="error"
              fontSize={18}
            >
              {error?.message}
            </Typography>
          </Stack>
        </FormControl>
      )}
    />
  )
}
