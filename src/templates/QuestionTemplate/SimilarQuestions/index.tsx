import { Stack, Typography, Divider, Box } from '@mui/material'

export function SimilarQuestions() {
  const data = [
    {
      id: 1,
      title: 'Como criar um componente no React?',
      description:
        'Estou com dificuldades em criar um componente no React, alguém pode me ajudar?',
      tags: ['react', 'javascript', 'typescript'],
      user: {
        id: 1,
        username: 'João da Silva',
        image: 'https://avatars.githubusercontent.com/u/50770871?v=4'
      }
    },
    {
      id: 2,
      title: 'Como criar um componente no React?',
      description:
        'Estou com dificuldades em criar um componente no React, alguém pode me ajudar?',
      tags: ['react', 'javascript', 'typescript'],
      user: {
        id: 1,
        username: 'João da Silva',
        image: 'https://avatars.githubusercontent.com/u/50770871?v=4'
      }
    },
    {
      id: 3,
      title: 'Como criar um componente no React?',
      description:
        'Estou com dificuldades em criar um componente no React, alguém pode me ajudar?',
      tags: ['react', 'javascript', 'typescript'],
      user: {
        id: 1,
        username: 'João da Silva',
        image: 'https://avatars.githubusercontent.com/u/50770871?v=4'
      }
    }
  ]

  return (
    <Stack p={3} height={'400px'} borderRadius={5} boxShadow={10}>
      <Typography m={4}>Mais perguntas</Typography>
      <Divider />
      <Stack textAlign="start">
        {data?.map((question) => (
          <Box key={question.id}>
            <Typography fontSize={20} color="#484747">
              {question.title}
            </Typography>
            <Divider />
          </Box>
        ))}
      </Stack>
    </Stack>
  )
}
