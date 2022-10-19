import { Avatar, AvatarProps } from '@mui/material'

type AvatarCustomProps = {
  image?: string
  size?: number
} & AvatarProps

export function AvatarCustom({ image, size, ...props }: AvatarCustomProps) {
  const styleAvatar = {
    width: size ? `${size}px` : '40px',
    height: size ? `${size}px` : '40px'
  }

  return (
    <Avatar
      src={
        image ??
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9720e55c-d222-4769-90b8-aec2262c0988/ddvtmz1-cadfaa7f-6da9-4b59-a0fe-6ed5742af38c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk3MjBlNTVjLWQyMjItNDc2OS05MGI4LWFlYzIyNjJjMDk4OFwvZGR2dG16MS1jYWRmYWE3Zi02ZGE5LTRiNTktYTBmZS02ZWQ1NzQyYWYzOGMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.G9iUpQwAJqx1MFT-nBlXA6ieOKcjtxSLzvXoeRFYr_k'
      }
      sx={styleAvatar}
      {...props}
    />
  )
}
