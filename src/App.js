import React, { useState } from 'react'

import MapComponent from './components/MapComponent'
import LocationList from './components/LocationList'

import { Grid, TextField } from '@mui/material'

import { CategoryProvider } from './contexts/CategoryProvider'

function App() {
  const [mapCenter, setMapCenter] = useState({ lat: 51.917738, lng: 17.455256 }) // Default center

  const [searchQuery, setSearchQuery] = useState('')

  const handleRevisitLocation = (location) => {
    setMapCenter({ lat: location.lat, lng: location.lng })
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <CategoryProvider>
          <MapComponent center={mapCenter} setMapCenter={setMapCenter} />
        </CategoryProvider>
      </Grid>

      <Grid item xs={12} md={4}>
        <TextField
          label="Filter Locations"
          variant="outlined"
          sx={{ width: 'calc(100% - 15px)' }}
          margin="normal"
          value={searchQuery}
          size="small"
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <LocationList
          filter={searchQuery}
          onRevisitLocation={handleRevisitLocation}
        />
      </Grid>
    </Grid>
  )
}

export default App
