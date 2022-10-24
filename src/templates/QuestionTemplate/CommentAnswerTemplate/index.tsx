import { Stack, Typography } from '@mui/material'
import { TextFieldHook } from 'components/TextFieldHook'
import { useForm } from 'react-hook-form'

export function CommentAnswerTemplate() {
  const { handleSubmit, control } = useForm()
  return (
    <Stack>
      <Typography paddingLeft="15px" fontSize={15}>
        Responda a pergunta do usuário abaixo
      </Typography>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <TextFieldHook
          name="description"
          control={control}
          color="secondary"
          multiline
          rows={7}
          variant="outlined"
          inputProps={{ style: { fontSize: 15, lineHeight: '21px' } }}
          placeholder="Achas que tem o intelecto suficiente para conseguir responder a está questão?"
        />
      </form>
    </Stack>
  )
}
