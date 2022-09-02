import { IconButton, TextField, TextFieldProps } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

import { Controller } from 'react-hook-form'

type CommentTextFieldProps = {
  name: string
  control: any
  rules?: any
} & TextFieldProps

export function CommentTextField({
  control,
  name,
  rules,
  ...props
}: CommentTextFieldProps) {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          color="info"
          autoComplete="off"
          error={!!error}
          size="small"
          InputProps={{
            style: { fontSize: 18.5 },
            endAdornment: (
              <IconButton>
                <SendIcon fontSize="small" color="info" type="submit" />
              </IconButton>
            )
          }}
          InputLabelProps={{ style: { fontSize: 19 } }}
          helperText={error?.message ?? props.helperText}
          {...field}
          {...props}
        />
      )}
    />
  )
}
