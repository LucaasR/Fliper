import { loadSummary } from '../ducks/summary'

export const fetchSummaryData = (data) => {
  return dispatch => {
    dispatch(loadSummary(data))
  }
}
