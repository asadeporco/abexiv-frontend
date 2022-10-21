import { Controller } from 'react-hook-form'
import { InputLabel, Select, FormControl } from '@mui/material'
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
    <FormControl color="secondary" fullWidth>
      <InputLabel shrink={false}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Select {...field}>{children}</Select>}
      />
    </FormControl>
  )
}
