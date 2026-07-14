import { configureStore } from '@reduxjs/toolkit'
import noteReducer from '../features/pastefeature/PasteSlice'

export default configureStore({
  reducer: {
    note : noteReducer,
  },
});