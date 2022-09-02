import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  Typography
} from '@mui/material'
import { Controller, Control } from 'react-hook-form'

type CheckHookProps = {
  name: string
  label?: string
  control: Control<any>
} & CheckboxProps

export function CheckHook({ name, control, label, ...props }: CheckHookProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <FormControlLabel
            control={<Checkbox defaultChecked {...field} {...props} />}
            label={<Typography fontSize="16px">{label}</Typography>}
          />
        )
      }}
    />
  )
}
