import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './reducers/movieSlice'
import personReducer from './reducers/personSlice'
import tvReducer from './reducers/tvSlice'
export default configureStore({
  reducer: {
    movie: movieReducer,
    person: personReducer,
    tv: tvReducer
  },
})