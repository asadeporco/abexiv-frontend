import { useForm } from 'react-hook-form'
import { Button, Grid, Container, Stack } from '@mui/material'

import { TextFieldHook } from './components/TextFieldHook'
import { CategoryProps } from 'global/types/CategoryProps'
import { SelectInputLabel } from './components/SelectInputLabel'

type FormAskModalComponentProps = {
  categories?: CategoryProps[]
  defaultValues?: any
  resolver?: any
  onSubmit: any
  navigate: any
  token: string
}

export function FormAskModalComponent({
  categories,
  defaultValues,
  resolver,
  navigate,
  onSubmit
}: FormAskModalComponentProps) {
  const { handleSubmit, control } = useForm({ defaultValues, resolver })

  return (
    <Stack
      spacing={3}
      component="form"
      onSubmit={handleSubmit((data) => onSubmit(data, navigate))}
    >
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextFieldHook name="title" control={control} label="Título" />
        </Grid>
        <Grid item xs={6}>
          <SelectInputLabel options={categories} control={control} />
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
