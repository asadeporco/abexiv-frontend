import { ReactNode } from 'react'
import { Grid, GridProps } from '@mui/material'

type GridCustomProps = {
  children: ReactNode
} & GridProps

export function GridCustom({ children, ...props }: GridCustomProps) {
  return (
    <Grid
      container
      justifyContent={props.justifyContent ?? 'center'}
      alignItems={props.justifyContent ?? 'center'}
      textAlign={props.textAlign ?? 'center'}
      {...props}
    >
      {children}
    </Grid>
  )
}
