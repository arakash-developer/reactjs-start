import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Container className='flex py-10 gap-x-3'>
        Navbar
        <Link to='/'>Home</Link>
        <Link to='about'>About</Link>
      </Container>
    </div>
  )
}

export default Navbar