import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  color: {
    color: '#3B5CB8',
    textAlign: 'center',
    fontSize: '18pt',
    fontWeight: 'bold',
    letterSpacing: '0.54pt',
    lineHeight: '22pt',
    margin: 0
  }
}))

export default function Percentage(props) {
  const classes = useStyles()

  const { value, type } = props

  const percentageFormated = type === 'profitability'
    ? value.toString().replace('.', ',').slice(0, 5)
    : value.toString().replace('.', ',').slice(0, 4)

  return(
    <p className={ classes.color }>
      { percentageFormated }%
    </p>
  )
}
