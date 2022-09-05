import { Stack, Typography } from '@mui/material'

export function SimilarQuestions() {
  return (
    <Stack p={3} height={'400px'} borderRadius={5} boxShadow={10}>
      <Typography m={4}>Mais perguntas</Typography>
      <hr></hr>
      <Stack textAlign="start">
        <Typography fontSize={20} color="#484747">
          Quanto é 2 ao quadrado?
        </Typography>
        <hr></hr>
        <Typography fontSize={20} color="#484747">
          se x &gt;= 1 e y &gt; 2 qual o valor de x + y?
        </Typography>
        <hr></hr>
        <Typography fontSize={20} color="#484747">
          é possível programar em java?
        </Typography>
        <hr></hr>
        <Typography fontSize={20} color="#484747">
          como concertar a gambiarra que eu fiz?
        </Typography>
        <hr></hr>
        <Typography fontSize={20} color="#484747">
          Como se centraliza uma div?
        </Typography>
        <hr></hr>
        <Typography fontSize={20} color="#484747">
          rezolva a equação x + 2 - 4 = (2 + 2) * 3 / 4
        </Typography>
        <hr></hr>
      </Stack>
    </Stack>
  )
}
