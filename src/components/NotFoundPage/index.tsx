import { useNavigate } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

export function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <Stack alignItems="center" justifyContent="center" spacing={3}>
      <Stack>
        <Typography variant="h1">404 - Page not found</Typography>
      </Stack>
      <Stack>
        <Button
          sx={{ maxWidth: '250px' }}
          variant="contained"
          color="info"
          onClick={() => navigate('/')}
        >
          Voltar para a página principal
        </Button>
      </Stack>
    </Stack>
  )
}
