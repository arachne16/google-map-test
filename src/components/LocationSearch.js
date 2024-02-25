import React from 'react'

import { Autocomplete } from '@react-google-maps/api'

const LocationSearch = ({ onSelect }) => {
  const handlePlaceSelected = (place) => {
    const lat = place.geometry.location.lat()
    const lng = place.geometry.location.lng()
    onSelect({ lat, lng })
  }

  return (
    <Autocomplete onSelect={handlePlaceSelected}>
      <input type="text" placeholder="Search locations..." />
    </Autocomplete>
  )
}

export default LocationSearch
