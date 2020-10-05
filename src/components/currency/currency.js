import React from 'react'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  valueTotal: {
    color: '#3B5CB8',
    textAlign: 'center',
    fontSize: '22pt',
    fontWeight: 'bold',
    letterSpacing: '0.66pt',
    lineHeight: '27pt',
    margin: 0
  },
  value: {
    color: '#3B5CB8',
    textAlign: 'center',
    fontSize: '18pt',
    fontWeight: 'bold',
    letterSpacing: '0.54pt',
    lineHeight: '22pt',
    margin: 0
  }
}))
export default function Currency(props) {
  const { value, total } = props

  const valueFormated = new Intl.
    NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)

  const classes = useStyles()

  return (
    <p className={ total ? classes.valueTotal : classes.value }>
      { valueFormated }
    </p>
  )
}
