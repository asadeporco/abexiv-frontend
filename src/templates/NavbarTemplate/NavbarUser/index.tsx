import { Grid, Stack, Typography, Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { AppBarCustom } from 'components/AppbarCustom'
import { SearchInput } from 'components/SearchInput'
import { ButtonCustom } from 'components/ButtonCustom'
import { AvatarCustom } from 'components/AvatarCustom'
import { GridCustom } from 'components/GridCustom'

export function NavbarUser() {
  const navigate = useNavigate()

  return (
    <AppBarCustom>
      <GridCustom padding={1.5}>
        <Grid item xs={3}>
          <Stack
            spacing={11}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <ButtonCustom
              onClick={() => navigate('../')}
              sx={{ backgroundColor: 'transparent' }}
              variant="text"
              LinkComponent={Link}
            >
              <Typography color="#000000" variant="h1" fontSize={'55px'}>
                Σ
              </Typography>
              <Typography color="#000000" variant="h1">
                Respondidos&#xb2;
              </Typography>
            </ButtonCustom>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack maxWidth={850}>
            <SearchInput size="small" placeholder="pesquisar..." />
          </Stack>
        </Grid>
        <Grid item xs={2}>
          <Stack
            spacing={0}
            justifyContent="center"
            alignItems="center"
            direction="row"
          >
            <ButtonCustom
              sx={{ backgroundColor: 'transparent' }}
              variant="text"
              LinkComponent={Link}
            >
              <Typography color="#000000">pedro69</Typography>
            </ButtonCustom>
            <ButtonCustom variant="text" LinkComponent={Link}>
              <AvatarCustom
                size={50}
                image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9720e55c-d222-4769-90b8-aec2262c0988/ddvtmz1-cadfaa7f-6da9-4b59-a0fe-6ed5742af38c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk3MjBlNTVjLWQyMjItNDc2OS05MGI4LWFlYzIyNjJjMDk4OFwvZGR2dG16MS1jYWRmYWE3Zi02ZGE5LTRiNTktYTBmZS02ZWQ1NzQyYWYzOGMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.G9iUpQwAJqx1MFT-nBlXA6ieOKcjtxSLzvXoeRFYr_k"
              />
            </ButtonCustom>
          </Stack>
        </Grid>
      </GridCustom>
    </AppBarCustom>
  )
}
