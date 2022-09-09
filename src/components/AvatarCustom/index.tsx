import { Avatar, AvatarProps } from '@mui/material'

type AvatarCustomProps = {
  image: string
  size?: number
} & AvatarProps

export function AvatarCustom({ image, size, ...props }: AvatarCustomProps) {
  const styleAvatar = {
    width: size ? `${size}px` : '40px',
    height: size ? `${size}px` : '40px'
  }

  return <Avatar src={image} sx={styleAvatar} {...props} />
}
