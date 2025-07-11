import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

const store = configureStore({
  // states
  reducer: {
    // define all your reducers here
    tasks: tasksReducer,
  }
})

export default store;