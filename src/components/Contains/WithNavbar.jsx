import React from 'react'
import { Navbar } from '../CommonCotains/Navber/Navbar'

export const WithNavbar = ({children}) => {
  return (
    <>
      <Navbar />        
      {children}
    </>
  )
}
