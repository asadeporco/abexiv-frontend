import { Container, Stack, Typography } from '@mui/material'
import { AvatarWithName } from 'components/AvatarWithName'
import { BoxQuestion } from 'components/BoxQuestion'

export function QuestionsSearchTemplate() {
  return (
    <Container>
      <Stack spacing={10}>
        <Typography variant="h1">Resultados da busca</Typography>
        <Stack spacing={3}>
          <Container maxWidth="md">
            <BoxQuestion spacing={3}>
              <AvatarWithName image="" date="17712" name="ahoba" />
              <Typography component="p">{'lorem ipsum'}</Typography>
              <Typography fontSize={17} color="#484747">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae sed, enim facere, accusamus minima maiores
                blanditiis, odit necessitatibus distinctio eaque eius!
                Architecto ducimus quasi blanditiis asperiores ea officiis
                reprehenderit. Eum.
              </Typography>
            </BoxQuestion>
          </Container>
        </Stack>
      </Stack>
    </Container>
  )
}
