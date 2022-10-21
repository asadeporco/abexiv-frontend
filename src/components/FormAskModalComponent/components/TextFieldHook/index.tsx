import { TextField, TextFieldProps } from '@mui/material'
import { Controller } from 'react-hook-form'

export type TextFieldHookProps = {
  name: string
  control: any
} & TextFieldProps

export function TextFieldHook({ name, control, ...props }: TextFieldHookProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          color="info"
          error={!!error}
          helperText={error?.message ?? props.helperText}
          {...field}
          {...props}
        />
      )}
    />
  )
}
