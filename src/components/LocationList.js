import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { List, Button, Box, Typography } from '@mui/material'

import LocationItem from './LocationItem'

import { removeAllLocations } from '../redux/locationSlice.js'

const LocationList = ({ filter, onRevisitLocation }) => {
  const dispatch = useDispatch()
  const locations = useSelector((state) => state.locations)

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: '15px',
        }}
      >
        <Button
          disabled={locations.length === 0}
          variant="contained"
          color="error"
          onClick={() => dispatch(removeAllLocations())}
        >
          Remove All Locations
        </Button>
        <Typography variant="subtitle1">
          <b>Total Locations: {locations.length}</b>
        </Typography>
      </Box>

      <Box sx={{ width: '100%', maxHeight: '100vh' }}>
        <Box
          sx={{
            overflowY: 'auto',
            maxHeight: 'calc(100vh - 110px)',
            paddingRight: '15px',
          }}
        >
          <List>
            {locations
              .filter((location) =>
                location.name.toLowerCase().includes(filter.toLowerCase())
              )
              .map((location) => (
                <LocationItem
                  key={location.time}
                  location={location}
                  onRevisitLocation={onRevisitLocation}
                />
              ))}
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default LocationList
