import { Controller } from 'react-hook-form'
import { Autocomplete, TextField } from '@mui/material'

import { CategoryProps } from 'global/types/CategoryProps'

type SelectInputLabelProps = {
  options?: CategoryProps[]
  control?: any
}

const categories = [
  {
    name: 'pedro',
    id: 12
  },
  {
    name: 'pietro',
    id: 11
  }
]

export function SelectInputLabel({ control }: SelectInputLabelProps) {
  return (
    <Controller
      name="category"
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Autocomplete
          disableClearable
          defaultValue=""
          options={categories}
          value={value || null}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              color="info"
              label="Categoria"
              variant="outlined"
              onChange={onChange}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      )}
    />
  )
}
