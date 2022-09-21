import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  value: string
}

const initialState: UserState = {
  value: "",
}

export const userSlice = createSlice({
  name: 'user',
    initialState,
  reducers: {
    setMesazhIDForTheUserBeingViewed: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const {setMesazhIDForTheUserBeingViewed} = userSlice.actions

export default userSlice.reducer