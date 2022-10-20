import { Stack, Typography } from '@mui/material'
import TypeWriter from 'typewriter-effect'

type TypeWriterWithTextBeforeProps = {
  textBefore: string
  words: string[]
}

export function TypeWriterWithTextBefore({
  words,
  textBefore
}: TypeWriterWithTextBeforeProps) {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent="center"
      spacing={1.5}
    >
      <Typography variant="h1">{textBefore}</Typography>
      <Typography variant="h1" sx={{ color: '#0288d1' }}>
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
  )
}
