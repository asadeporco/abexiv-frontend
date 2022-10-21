import { Container, Stack, Typography } from '@mui/material'

import { QuestionProps } from 'global/types/QuestionProps'
import { QuestionsContainer } from './QuestionsContainer'

import { AdContainer } from 'components/AdContainer'
import { QuestionsCardCustom } from 'components/QuestionsCardCustom'
import { NavigationSearch } from 'components/NavigationSearch'

type QuestionsSearchTemplateProps = {
  questions?: QuestionProps[]
}

export function QuestionsSearchTemplate({
  questions
}: QuestionsSearchTemplateProps) {
  return (
    <Stack alignItems="center" spacing={10} paddingBottom="50px">
      <Typography variant="h1">Resultados da busca</Typography>
      <Stack direction="row">
        <Container maxWidth="md">
          <Stack alignItems="center" spacing={5}>
            <QuestionsContainer questions={questions} />
            <NavigationSearch count={10} />
          </Stack>
        </Container>
        <Container maxWidth="xs">
          <Stack spacing={5}>
            <QuestionsCardCustom title="Perguntas em destaque" />
            <AdContainer
              height="1000px"
              maxWidth="400px"
              img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9720e55c-d222-4769-90b8-aec2262c0988/ddvtmz1-cadfaa7f-6da9-4b59-a0fe-6ed5742af38c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk3MjBlNTVjLWQyMjItNDc2OS05MGI4LWFlYzIyNjJjMDk4OFwvZGR2dG16MS1jYWRmYWE3Zi02ZGE5LTRiNTktYTBmZS02ZWQ1NzQyYWYzOGMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.G9iUpQwAJqx1MFT-nBlXA6ieOKcjtxSLzvXoeRFYr_k"
            />
          </Stack>
        </Container>
      </Stack>
    </Stack>
  )
}
