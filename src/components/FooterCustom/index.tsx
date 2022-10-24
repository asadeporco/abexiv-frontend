import { Stack, Typography } from '@mui/material'

export function FooterCustom() {
  return (
    <Stack spacing={2} paddingTop="200px" alignItems="center">
      <Stack direction="row" spacing={3}>
        <img
          style={{ width: '50px', height: '50px' }}
          src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-4.png"
          alt="Logo"
        />
        <img
          style={{ width: '50px', height: '50px' }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png"
          alt="Logo"
        />
        <img
          style={{ width: '50px', height: '50px' }}
          src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png"
          alt="Logo"
        />
        <img
          style={{ width: '50px', height: '50px' }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
          alt="Logo"
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography fontSize={18}>
          <a href="" target="_blank" rel="noreferrer">
            Termos de uso
          </a>
        </Typography>
        <Typography fontSize={18}>
          <a href="" target="_blank" rel="noreferrer">
            Privacidade
          </a>
        </Typography>
        <Typography fontSize={18}>
          <a href="" target="_blank" rel="noreferrer">
            Sobre
          </a>
        </Typography>
        <Typography fontSize={18}>
          <a href="" target="_blank" rel="noreferrer">
            Categorias
          </a>
        </Typography>
        <Typography fontSize={18}>
          <a href="" target="_blank" rel="noreferrer">
            Trabalhe conosco
          </a>
        </Typography>
      </Stack>
    </Stack>
  )
}
