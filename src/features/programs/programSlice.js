import { createSlice } from "@reduxjs/toolkit"

export const programSlice = createSlice({
  name: "program",
  initialState: [{}],
  reducers: {
    addProgram: (state, action) => {
      state.push(action.payload)
    },
    delProgram: (state, action) => {
      const i = state.indexOf(action.payload)

      if (i == -1){
        state.push(action.payload)
      }
    }
  }
})

export const { addProgram, delProgram } = programSlice.actions

export default programSlice.reducer
