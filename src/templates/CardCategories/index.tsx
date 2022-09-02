import { Container, Stack, Typography } from '@mui/material'
import TypeWriter from 'typewriter-effect'

import { CardCustom } from 'components/CardCustom'
import { ButtonCustom } from 'components/ButtonCustom'

import { cardCategories, words } from './data'

export const CardCategories = () => {
  return (
    <Stack height={'70vh'} alignItems="center" textAlign="center" spacing={10}>
      <Stack justifyContent="center" direction="row" spacing={1.5}>
        <Typography fontSize={52} variant="h1">
          Pergunte sobre
        </Typography>
        <Typography fontSize={52} variant="h1" sx={{ color: '#0288d1' }}>
          <TypeWriter
            options={{
              strings: words,
              loop: true,
              autoStart: true,
              deleteSpeed: 60,
              delay: 60
            }}
          />
        </Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={11}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        {cardCategories.map((card) => (
          <CardCustom key={card.title} title={card.title} image={card.img} />
        ))}
      </Stack>
      <Container>
        <ButtonCustom color="info">Mais categorias</ButtonCustom>
      </Container>
    </Stack>
  )
}
