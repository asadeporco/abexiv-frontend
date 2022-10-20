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
      textAlign="center"
      spacing={7}
    >
      <TypeWriterWithTextBefore textBefore="Pergunte sobre" words={words} />
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
          {cardCategories.map((card) => (
            <CardCustom key={card.title} title={card.title} image={card.img} />
          ))}
        </Stack>
      </Container>
      <ButtonCustom disabled>Mais categorias</ButtonCustom>
    </Stack>
  )
}
