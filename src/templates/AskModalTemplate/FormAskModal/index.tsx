import { useForm } from 'react-hook-form'
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack
} from '@mui/material'

import { TextFieldHook } from 'components/TextFieldHook'

import { CategoryProps } from 'global/types/CategoryProps'

type FormAskModalProps = {
  categories?: CategoryProps[]
}

export function FormAskModal({ categories }: FormAskModalProps) {
  const { control } = useForm()

  return (
    <Stack spacing={3}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextFieldHook name="title" control={control} label="Título" />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth color="info">
            <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Cateogoria"
              onChange={(e) => console.log(e.currentTarget)}
            >
              {categories?.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <TextFieldHook
        multiline
        rows={7}
        name="description"
        control={control}
        label="Descrição"
        InputProps={{ style: { fontSize: 23 } }}
      />
    </Stack>
  )
}
