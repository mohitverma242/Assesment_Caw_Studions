import { configureStore } from '@reduxjs/toolkit'
import  listSlice  from '../components/List/listSlice'

export const store = configureStore({
  reducer: {
    list:listSlice,
  },
})