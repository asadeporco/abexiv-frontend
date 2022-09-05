import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  Stack,
  Typography
} from '@mui/material'
import { Controller, Control } from 'react-hook-form'

type CheckHookProps = {
  name: string
  label?: string
  control: Control<any>
  rules?: any
} & CheckboxProps

export function CheckHook({
  name,
  control,
  label,
  rules,
  ...props
}: CheckHookProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => {
        return (
          <FormControlLabel
            control={<Checkbox {...field} {...props} />}
            label={
              <Stack>
                <Typography margin={0} fontSize="14px">
                  {label}
                </Typography>
                <Typography margin={0} fontSize="13px" color="error">
                  {error?.message}
                </Typography>
              </Stack>
            }
          />
        )
      }}
    />
  )
}
