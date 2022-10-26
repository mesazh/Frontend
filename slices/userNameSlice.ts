import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  value: string
}

const initialState: UserState = {
  value: "",
}

export const userNameSlice = createSlice({
  name: 'userName',
    initialState,
  reducers: {
    setNameForTheUserBeingViewed: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const {setNameForTheUserBeingViewed} = userNameSlice.actions

export default userNameSlice.reducer
