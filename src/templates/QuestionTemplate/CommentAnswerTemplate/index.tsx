import { Stack, TextField, Typography } from '@mui/material'

export function CommentAnswerTemplate() {
  return (
    <Stack>
      <Typography paddingLeft="15px" fontSize={15}>
        Responda a pergunta do usuário abaixo
      </Typography>
      <TextField
        color="secondary"
        multiline
        rows={6}
        variant="outlined"
        inputProps={{ style: { fontSize: 15, lineHeight: '21px' } }}
        placeholder="Achas que tem o intelecto suficiente para conseguir responder a está questão?"
      />
    </Stack>
  )
}
