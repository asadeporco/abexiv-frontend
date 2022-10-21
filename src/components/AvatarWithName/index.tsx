import { Avatar, Stack, Typography } from '@mui/material'

type AvatarWithNameProps = {
  name: string
  image: string
  date?: string
  spacing?: number
  size?: number
}

export function AvatarWithName({
  name,
  date,
  image,
  spacing,
  size
}: AvatarWithNameProps) {
  const styleAvatar = {
    width: size ? `${size}px` : '50px',
    height: size ? `${size}px` : '50px'
  }

  return (
    <Stack direction="row" spacing={spacing ?? 1}>
      <Avatar src={image} sx={styleAvatar} />
      <Stack spacing={-1}>
        <Typography fontSize={20}>{name}</Typography>
        <Typography color="#484747" fontSize={13}>
          enviado em {date}
        </Typography>
      </Stack>
    </Stack>
  )
}
