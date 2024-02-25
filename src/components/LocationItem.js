import React from 'react'
import { useDispatch } from 'react-redux'

import { ListItem, ListItemText, ListItemIcon, IconButton } from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete'

import RestaurantIcon from '@mui/icons-material/Restaurant'
import ParkIcon from '@mui/icons-material/Park'
import MuseumIcon from '@mui/icons-material/Museum'
import PlaceIcon from '@mui/icons-material/Place'

import { removeLocation } from '../redux/locationSlice.js'

const categoryToIcon = {
  Restaurant: { icon: RestaurantIcon, color: '#40a0c7' },
  Park: { icon: ParkIcon, color: '#5ac740' },
  Museum: { icon: MuseumIcon, color: '#8240c7' },
  Default: { icon: PlaceIcon, color: '#c7406a' }, // Default icon and color if no category is matched
}

const LocationItem = ({ location, onRevisitLocation }) => {
  const IconComponent = categoryToIcon[location.category]
    ? categoryToIcon[location.category].icon
    : categoryToIcon['Default'].icon
  const iconColor = categoryToIcon[location.category]
    ? categoryToIcon[location.category].color
    : categoryToIcon['Default'].color

  const dispatch = useDispatch()

  return (
    <ListItem
      sx={{
        marginBottom: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxShadow: '0px 2px 2px rgba(0,0,0,0.3)',
        '&:hover': {
          backgroundColor: '#ddd',
          cursor: 'pointer',
        },
      }}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => dispatch(removeLocation(location.time))}
        >
          <DeleteIcon />
        </IconButton>
      }
      onClick={() => onRevisitLocation(location)}
    >
      <ListItemIcon sx={{ marginRight: '10px', minWidth: '30px' }}>
        <IconComponent
          // onClick={() => onRevisitLocation(location)}
          sx={{ fontSize: '2rem', cursor: 'pointer', color: iconColor }}
        />
      </ListItemIcon>

      <ListItemText
        primary={`${location.name}`}
        secondary={`lat: ${location.lat}, lng: ${location.lng}`}
      />
    </ListItem>
  )
}

export default LocationItem
