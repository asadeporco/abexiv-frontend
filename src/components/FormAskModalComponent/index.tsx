import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button, Grid, Container, Stack, MenuItem } from '@mui/material'

import { TextFieldHook } from './components/TextFieldHook'
import { SelectInputLabel } from './components/SelectInputLabel'
import { useNavbarUserContext } from 'context/NavbarUser'

type FormAskModalComponentProps = {
  defaultValues?: any
  resolver?: any
  onSubmit: any
  setOpen: any
  token: string
}

export function FormAskModalComponent({
  defaultValues,
  resolver,
  token,
  setOpen,
  onSubmit
}: FormAskModalComponentProps) {
  const { handleSubmit, control } = useForm({ defaultValues, resolver })
  const navigate = useNavigate()

  const { categories } = useNavbarUserContext()

  return (
    <Stack
      spacing={3}
      component="form"
      onSubmit={handleSubmit((data) =>
        onSubmit(token, data, setOpen, navigate)
      )}
    >
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextFieldHook name="title" control={control} label="Título" />
        </Grid>
        <Grid item xs={6}>
          <SelectInputLabel name="category" label="Categoria" control={control}>
            {categories?.map((category) => {
              return (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              )
            })}
          </SelectInputLabel>
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
      <Stack textAlign="center">
        <Container>
          <Button variant="contained" color="info" type="submit">
            Enviar
          </Button>
        </Container>
      </Stack>
    </Stack>
  )
}
