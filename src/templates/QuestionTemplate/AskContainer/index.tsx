import { Stack, Typography } from '@mui/material'

import { IconWithLabel } from 'components/IconWithLabel'
import { AvatarWithName } from 'components/AvatarWithName'

import { parseDateBr } from 'global/functions/parseDateBr'

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices'
import StarIcon from '@mui/icons-material/Star'

type AskContainerProps = {
  question?: any
  userLogged?: boolean
}

export function AskContainer({ question }: AskContainerProps) {
  return (
    <Stack spacing={5}>
      <Stack spacing={2}>
        <AvatarWithName
          image=""
          date={parseDateBr(question?.created_at)}
          name={question?.user?.username}
        />
        <Stack spacing={1.5}>
          <Typography fontSize={20}>{question?.title}</Typography>
          <Typography fontSize={16} color="#484747">
            {question?.description}
          </Typography>
        </Stack>
      </Stack>
      <Stack spacing={2.5} direction="row" justifyContent="start">
        <IconWithLabel
          label="Upvote"
          icon={<ArrowUpwardIcon sx={{ fontSize: '20px' }} />}
        />
        <IconWithLabel
          label="Downvote"
          icon={<ArrowDownwardIcon sx={{ fontSize: '20px' }} />}
        />
        <IconWithLabel
          label="Favoritar"
          icon={<StarIcon sx={{ fontSize: '20px' }} />}
        />
        <IconWithLabel
          icon={<MiscellaneousServicesIcon sx={{ fontSize: '20px' }} />}
        />
      </Stack>
    </Stack>
  )
}
