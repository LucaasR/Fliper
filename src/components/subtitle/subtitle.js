import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  legendSumarry: {
    color: '#606377',
    fontSize: 16,
    margin: 0,
    letterSpacing: '0.48pt',
    height: '20pt',
    textAlign: 'center'
  }
}))

export default function Subtitle(props) {
  const { children } = props

  const classes = useStyles()

  return(
    <p className={ classes.legendSumarry }>
      { children }
    </p>
  )
}
