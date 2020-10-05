import { gql } from '@apollo/client'

export const SUMMARY_DATA = gql`
  query {
    wealthSummary {
      id
      hasHistory
      gain
      cdi
      profitability
      total
    }
  }
`
