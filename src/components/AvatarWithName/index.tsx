import { Avatar, Stack, Typography } from '@mui/material'

type AvatarWithNameProps = {
  name: string
  image: string
  spacing?: number
  size?: number
}

export function AvatarWithName({
  name,
  image,
  spacing,
  size
}: AvatarWithNameProps) {
  const styleAvatar = {
    width: size ? `${size}px` : '40px',
    height: size ? `${size}px` : '40px'
  }

  return (
    <Stack direction="row" spacing={spacing ?? 1}>
      <Avatar src={image} sx={styleAvatar} />
      <Typography fontSize={24}>{name}</Typography>
    </Stack>
  )
}
