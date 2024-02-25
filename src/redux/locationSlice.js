import { createSlice } from '@reduxjs/toolkit'

export const locationSlice = createSlice({
  name: 'locations',
  initialState: [],
  reducers: {
    addLocation: (state, action) => {
      return [...state, ...action.payload]
    },
    removeLocation: (state, action) => {
      return state.filter((location) => location.time !== action.payload)
    },
    removeAllLocations: () => {
      return []
    },
  },
})

export const { addLocation, removeLocation, removeAllLocations } =
  locationSlice.actions

export default locationSlice.reducer
