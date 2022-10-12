import { configureStore } from "@reduxjs/toolkit"
import windowReducer from "../features/windows/windowSlice"

export default configureStore({
  reducer: {
    win: windowReducer
  }
})
