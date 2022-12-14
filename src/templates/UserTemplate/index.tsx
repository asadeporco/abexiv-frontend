import { Typography, Container, Grid, Stack } from '@mui/material'

import { AvatarCustom } from 'components/AvatarCustom'
import { BoxQuestion } from 'components/BoxQuestion'

export function UserTemplate() {
  const userQuestions = [
    {
      title: 'How to create a custom hook in React?',
      description:
        'I am trying to create a custom hook in React. I have a component that needs to fetch data from an API. I want to create a custom hook that will fetch the data and return it. I am not sure how to do this. Can someone help me?'
    },
    {
      title: 'How to create a custom hook in React?',
      description:
        'I am trying to create a custom hook in React. I have a component that'
    }
  ]

  return (
    <Container maxWidth="md">
      <Grid container spacing={15}>
        <Grid item alignItems="center" textAlign="center">
          <AvatarCustom
            size={120}
            src="https://avatars.githubusercontent.com/u/10064416?v=4"
          />
          <Typography fontSize={24} variant="h1">
            admin
          </Typography>
        </Grid>
        <Grid item alignItems="center" textAlign="center" md={8}>
          <Stack spacing={6}>
            <Typography variant="h4" fontSize={32}>
              Questions
            </Typography>
            <Stack spacing={3} justifyContent="center" alignItems="center">
              {userQuestions?.map((question: any, key: number) => (
                <BoxQuestion key={key}>
                  <Stack spacing={1}>
                    <Typography fontSize={28} variant="h3">
                      {question.title.substring(0, 40)}
                    </Typography>
                    <Typography fontSize={18} color="#5a5a5a">
                      {question.description.substring(0, 250)}
                    </Typography>
                  </Stack>
                </BoxQuestion>
              ))}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}
