import React, { useState } from 'react'
import CategoryContext from './CategoryContext'

// This component will make the category value available to any child component that calls `useContext(CategoryContext)`.
export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('Default')

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  )
}
