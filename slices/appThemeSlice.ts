import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AppTheme {
  value: string
}

const initialState: AppTheme = {
  value: "darkKnight",
}

export const appThemeSlice = createSlice({
  name: 'appTheme',
    initialState,
  reducers: {
    setThemeForTheApp: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const {setThemeForTheApp} = appThemeSlice.actions

export default appThemeSlice.reducer