import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  container: {
    fontFamily: 'proxima-nova, sans-serif',
    width: '344.5pt',
    height: '352pt',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    boxShadow: '1px 1px #9AA3BC',
    padding: '0 20px'
  }
}))
export default function Container(props){
  const classes = useStyles()

  const { children } = props

  return(
    <Grid container alignItems='center' className={ classes.container }>
      { children }
    </Grid>
  )
}
