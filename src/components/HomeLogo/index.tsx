import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export function HomeLogo() {
  const navigate = useNavigate()
  return (
    <Button onClick={() => navigate('/')} variant="text">
      <Typography variant="h1" fontSize={'55px'}>
        Σ
      </Typography>
      <Typography fontSize={32} variant="h1">
        Respondidos&#xb2;
      </Typography>
    </Button>
  )
}
