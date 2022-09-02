import { TextField, TextFieldProps } from '@mui/material'
import { Controller, Control } from 'react-hook-form'

type TextFieldHookProps = {
  name: string
  control: Control
  rules?: any
} & TextFieldProps

export function TextFieldHook({
  name,
  control,
  rules,
  ...props
}: TextFieldHookProps) {
  return (
    <Controller
      name={name}
      rules={rules}
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
