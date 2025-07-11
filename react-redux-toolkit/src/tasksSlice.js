import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        text: action.payload,
        completed: false,
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      return state.filter((task, index) => index !== action.payload);
    }
  }
})

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;