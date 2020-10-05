import { configureStore } from '@reduxjs/toolkit';
import summaryReducer from '../ducks/summary'

export default configureStore({
  reducer: {
    summaryData: summaryReducer,
  },
});
