import { Container, Stack } from '@mui/material'

import { TypeWriterWithTextBefore } from 'components/TypeWriterWithTextBefore'
import { CardCustom } from 'components/CardCustom'
import { ButtonCustom } from 'components/ButtonCustom'

import { cardCategories, words } from './data'

export const CardCategories = () => {
  return (
    <Stack
      paddingBottom="50px"
      alignItems="center"
      spacing={7}
      justifyContent="center"
    >
      <TypeWriterWithTextBefore textBefore="Pergunte sobre" words={words} />
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={4}
          justifyContent="center"
        >
          {cardCategories.map((card) => (
            <CardCustom key={card.title} title={card.title} image={card.img} />
          ))}
        </Stack>
      </Container>
      <ButtonCustom disabled size="large">
        Mais categorias
      </ButtonCustom>
    </Stack>
  )
}
