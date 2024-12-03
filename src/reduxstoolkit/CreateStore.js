import { configureStore } from '@reduxjs/toolkit'
import { todoAdded,todoToggled } from './UserSlice'
import todosReducer from './UserSlice'
 const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
})
export default store