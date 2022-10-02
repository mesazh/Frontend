import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  value: string
}

const initialState: UserState = {
  value: "",
}

export const userIdSlice = createSlice({
  name: 'userId',
    initialState,
  reducers: {
    setMesazhIDForTheUserBeingViewed: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const {setMesazhIDForTheUserBeingViewed} = userIdSlice.actions

export default userIdSlice.reducer
