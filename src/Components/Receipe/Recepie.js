import React from 'react'
import Aloe from './Product Pages/Aloe'
import { Link } from 'react-router-dom'

const Recepie = () => {
  return (
    <div style={{padding:'5rem'}}>
      Receipe 
      <Link to='/aloe'><Aloe/> </Link>
    </div>
  )
}

export default Recepie
