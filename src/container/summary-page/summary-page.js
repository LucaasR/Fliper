import React, { useEffect } from 'react'

import { CircularProgress, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { useQuery } from '@apollo/client'
import { SUMMARY_DATA } from '../../services/queries'

import Container from '../../components/container'
import Summary from '../../components/summary'

import { fetchSummaryData } from '../../app/fetchActions'
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#E8EBF6',
    height: '100vh',
    width: '100%',
  }
}))

export default function SummaryPage() {
  const classes = useStyles()
  const { data, loading } = useQuery(SUMMARY_DATA)

  const state = useSelector( ({ summaryData }) => summaryData.wealthSummary)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSummaryData(data))
  })

  return(
    <Grid
    className={ classes.root }
    container
    alignItems='center'
    justify='center'
    >
      { loading
        ? <CircularProgress />
        : <Container>
            { !!state && state.map(summaryItem => {
              return <Summary summaryData={ summaryItem } />
            })}
          </Container>
      }
    </Grid>
  )
}
