import { Stack, Typography } from '@mui/material'
import { ButtonCustom } from 'components/ButtonCustom'
import { TextFieldHook } from 'components/TextFieldHook'
import { useForm } from 'react-hook-form'

import { resolver } from './functions/resolver'
import { handleSubmit } from './functions/handleSubmit'
import { useUserContext } from 'context/UserContext'
import { useQuestionContext } from 'context/Question'

export function CommentAnswerTemplate() {
  const methods = useForm({ defaultValues: { description: '' }, resolver })
  const { token } = useUserContext()
  const { id, setAnswers } = useQuestionContext()

  return (
    <Stack
      spacing={2}
      component="form"
      onSubmit={methods.handleSubmit((data) =>
        handleSubmit(data, token, id, methods.setError, setAnswers)
      )}
    >
      <Stack>
        <Typography paddingLeft="15px" fontSize={15}>
          Responda a pergunta do usuário abaixo
        </Typography>
        <TextFieldHook
          name="description"
          control={methods.control}
          color="secondary"
          multiline
          rows={6}
          variant="outlined"
          inputProps={{ style: { fontSize: 15, lineHeight: '21px' } }}
          placeholder="Achas que tem o intelecto suficiente para conseguir responder a está questão?"
        />
      </Stack>
      <Stack justifyContent="end" direction="row" spacing={1}>
        <ButtonCustom
          sx={{ fontSize: '12px', maxWidth: '200px' }}
          size="small"
          color="inherit"
          disabled
        >
          Opções de resposta
        </ButtonCustom>
        <ButtonCustom
          sx={{ fontSize: '12px', maxWidth: '100px' }}
          size="small"
          color="inherit"
          type="submit"
        >
          Responder
        </ButtonCustom>
      </Stack>
    </Stack>
  )
}
