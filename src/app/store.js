import userReducer from 'features/Auth/userSlice'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = {
  user: userReducer
}

export const store = configureStore({
  reducer: rootReducer
})
