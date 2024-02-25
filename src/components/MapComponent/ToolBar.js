import React, { useContext } from 'react'

import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'

import ImportExportGEOs from './ImportExportGEOs'

import CategoryContext from '../../contexts/CategoryContext'

const ToolBar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext)

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  return (
    <>
      <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 5 }}>
        <TextField
          label="Search Location"
          variant="filled"
          size="small"
          autoFocus
        />
      </div>

      <div
        style={{
          position: 'absolute',
          top: 10,
          right: 100,
          zIndex: 5,
          width: '200px',
        }}
      >
        <FormControl size="small" fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            label="Category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <MenuItem value="Default">Default</MenuItem>
            <MenuItem value="Museum">Museum</MenuItem>
            <MenuItem value="Restaurant">Restaurant</MenuItem>
            <MenuItem value="Park">Park</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 5 }}>
        <ImportExportGEOs />
      </div>
    </>
  )
}

export default ToolBar
