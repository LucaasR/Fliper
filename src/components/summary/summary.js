import React from 'react'
import { Button, CircularProgress, Grid, IconButton, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { MoreVert } from '@material-ui/icons'

import Currency from '../currency'
import Subtitle from '../subtitle'
import Percentage from '../percentage'

const useStyles = makeStyles(() => ({
  container: {
    height: '100%',
    width: '100%'
  },
  title: {
    color: '#3B5CB8',
    fontStyle: 'normal',
    fontWeight: 800,
    letterSpacing: '0.75pt',
    fontSize: 25,
  },
  icon: {
    color: '#606377'
  },
  divider: {
    color: '#9AA3BC',
    width: '100%'
  },
  buttonContainer: {
    width: '100%',
    position: 'relative',
    top: 15
  },
  button: {
    position: 'relative',
    borderRadius: 25,
    marginTop: 10,
    border: '1px solid',
    fontWeight: 'bold'
  }
}))

export default function Summary(props){
  const classes = useStyles()

  const { summaryData } = props

  return(
    !summaryData
      ? <CircularProgress />
      : <Grid className={ classes.container } container alignContent='space-evenly' justify='space-evenly'>
          <Grid container alignItems='center' justify='space-between'>
            <Typography className={ classes.title } variant='h3'> Seu Resumo </Typography>
            <IconButton>
              <MoreVert className={ classes.icon } />
            </IconButton>
          </Grid>
          <Grid>
            <Subtitle>
              Valor investido
            </Subtitle>
            <Currency total value={ summaryData.total }/>
          </Grid>
          <Grid
            container
            alignItems='center'
            justify='space-between'
          >
            <Grid
              container
              alignItems='center'
              justify='space-between'
              item
              xs={ 12 }
            >
              <Subtitle> Rentabilidade/mês</Subtitle>
              <Percentage type='profitability' value={ summaryData.profitability }/>
            </Grid>
            <Grid
              container
              alignItems='center'
              justify='space-between'
              item
              xs={ 12 }
            >
              <Subtitle> CDI </Subtitle>
              <Percentage value={ summaryData.cdi } />
            </Grid>
            <Grid
              container
              alignItems='center'
              justify='space-between'
              item
              xs={ 12 }
            >
              <Subtitle> Ganho/mês </Subtitle>
              <Currency value={ summaryData.gain } />
            </Grid>
          </Grid>
          <Grid className={ classes.buttonContainer }>
            <hr className={ classes.divider }/>
            <Grid container justify='flex-end'>
              <Button
                className={ classes.button }
                variant='outlined'
                color='primary'
              >
                Ver mais
              </Button>
            </Grid>
          </Grid>
        </Grid>
  )
}
